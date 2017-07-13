import Ldv from './Ldv'
import * as rp from 'request-promise-native';
import * as cheerio from 'cheerio';
import HttpError from '../classes/HttpError';
import HistoryParser from '../classes/HistoryParser';

export default class Crawler {
    static urlPaginaRicerca = "http://wwww.sda.it/SITO_SDA-WEB/dispatcher?id_ldv=@ldv@&invoker=home&LEN=&execute2=ActionTracking.doGetTrackingHome&button=Vai";
    static urlValidazioneSessione = "http://wwww.sda.it/SITO_SDA-WEB/dispatcherHol?&execute2=ActionTracking.doInsSecurityCode&ses_id=@ses_id@&codice_sicurezza=@codice_sicurezza@&codice_sicurezza_request=@codice_sicurezza@&firstAcs=";
    static urlDatiSpedizione = "http://wwww.sda.it/SITO_SDA-WEB/dispatcher?id_ldv=@ldv@&execute2=@execute2@&ses_id=@ses_id@&code=ldv&codice_sicurezza=@codice_sicurezza@&codice_sicurezza_request=@codice_sicurezza@&firstAcs=&codice_sicurezza=@codice_sicurezza@&codice_sicurezza_request=&firstAcs="
    ses_id: string;
    codice_sicurezza: string;
    execute2: string;
    rawBody: CheerioAPI;
    ldv: Ldv;
    options = {
        uri: '',
        transform: function (body: string) {
            return cheerio.load(body);
        }
    };

    constructor(ldv: Ldv) {
        this.ldv = ldv;
    }

    setUrl(url: string) {
        this.options.uri = url;
    }

    async searchLdv() {
        this.setUrl(Crawler.urlPaginaRicerca.replace("@ldv@", this.ldv.code));
        try {
            const $ = await rp(this.options);
            this.ses_id = $('input[name=ses_id]').val();
            this.codice_sicurezza = $('input[name=codice_sicurezza]').val();
            this.execute2 = $('input[name=execute2]').val();
        } catch (error) {
            return new HttpError('Errore nella prima request', 500);
        }
    }

    async validateSession() {
        this.setUrl(Crawler.urlValidazioneSessione.replace(/@codice_sicurezza@/g, this.codice_sicurezza).replace('@ses_id@', this.ses_id));
        try {
            await rp(this.options);
        } catch (error) {
            return new HttpError('Errore nella seconda request', 500);
        }
    }

    async getShipmentDetails() {
        this.setUrl(Crawler.urlDatiSpedizione
            .replace(/@codice_sicurezza@/g, this.codice_sicurezza)
            .replace('@ses_id@', this.ses_id)
            .replace('@execute2@', this.execute2)
            .replace("@ldv@", this.ldv.code));
        try {
            this.rawBody = await rp(this.options);
        } catch (error) {
            return new HttpError('Errore nella terza request', 500);
        }
    }

    parse() {
        const { esito, steps } = HistoryParser.parse(this.rawBody);
        this.ldv.esito = esito;
        this.ldv.steps = steps;
    }
}