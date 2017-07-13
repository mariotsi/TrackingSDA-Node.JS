import Ldv from './Ldv'
import * as rp from 'request-promise-native';
import * as cheerio from 'cheerio';
import HttpError from '../classes/HttpError';
import HistoryParser from '../classes/HistoryParser';

export default class Crawler {
    static searchPageUrl = "http://wwww.sda.it/SITO_SDA-WEB/dispatcher?id_ldv=@ldv@&invoker=home&LEN=&execute2=ActionTracking.doGetTrackingHome&button=Vai";
    static validateSessionUrl = "http://wwww.sda.it/SITO_SDA-WEB/dispatcherHol?&execute2=ActionTracking.doInsSecurityCode&ses_id=@ses_id@&codice_sicurezza=@codice_sicurezza@&codice_sicurezza_request=@codice_sicurezza@&firstAcs=";
    static shipmentDetailsUrl = "http://wwww.sda.it/SITO_SDA-WEB/dispatcher?id_ldv=@ldv@&execute2=@execute2@&ses_id=@ses_id@&code=ldv&codice_sicurezza=@codice_sicurezza@&codice_sicurezza_request=@codice_sicurezza@&firstAcs=&codice_sicurezza=@codice_sicurezza@&codice_sicurezza_request=&firstAcs="
    sesId: string;
    codiceSicurezza: string;
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
        this.setUrl(Crawler.searchPageUrl.replace("@ldv@", this.ldv.code));
        try {
            const $ = await rp(this.options);
            this.sesId = $('input[name=ses_id]').val();
            this.codiceSicurezza = $('input[name=codice_sicurezza]').val();
            this.execute2 = $('input[name=execute2]').val();
        } catch (error) {
            return new HttpError('Error while accessing to the search page', 500);
        }
    }

    async validateSession() {
        this.setUrl(Crawler.validateSessionUrl.replace(/@codice_sicurezza@/g, this.codiceSicurezza).replace('@ses_id@', this.sesId));
        try {
            await rp(this.options);
        } catch (error) {
            return new HttpError('Error validating session', 500);
        }
    }

    async getShipmentDetails() {
        this.setUrl(Crawler.shipmentDetailsUrl
            .replace(/@codice_sicurezza@/g, this.codiceSicurezza)
            .replace('@ses_id@', this.sesId)
            .replace('@execute2@', this.execute2)
            .replace("@ldv@", this.ldv.code));
        try {
            this.rawBody = await rp(this.options);
        } catch (error) {
            return new HttpError('Error retrieving shipment details', 500);
        }
    }

    parse() {
        Object.assign(this.ldv,HistoryParser.parse(this.rawBody))
    }
}