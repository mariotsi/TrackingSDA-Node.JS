const express = require('express');
const rq = require('request').defaults({jar: true});
const router = express.Router();
const cheerio = require('cheerio');
const moment = require('moment');

const urlPaginaRicerca = "http://wwww.sda.it/SITO_SDA-WEB/dispatcher?id_ldv=@ldv@&invoker=home&LEN=&execute2=ActionTracking.doGetTrackingHome&button=Vai";
const urlValidazioneSessione = "http://wwww.sda.it/SITO_SDA-WEB/dispatcherHol?&execute2=ActionTracking.doInsSecurityCode&ses_id=@ses_id@&codice_sicurezza=@codice_sicurezza@&codice_sicurezza_request=@codice_sicurezza@&firstAcs=";
const urlDatiSpedizione = "http://wwww.sda.it/SITO_SDA-WEB/dispatcher?id_ldv=@ldv@&execute2=@execute2@&ses_id=@ses_id@&code=ldv&codice_sicurezza=@codice_sicurezza@&codice_sicurezza_request=@codice_sicurezza@&firstAcs=&codice_sicurezza=@codice_sicurezza@&codice_sicurezza_request=&firstAcs="

router.get('/:ldv', function (req, res, next) {
    const lunghezzeAccettate = [7, 9, 12, 13];
    if (lunghezzeAccettate.indexOf(req.params.ldv.length) < 0) {
        const err = new Error('lunghezza LDV errata');
        err.status = 503;
        next(err);
        return;
    }
    rq.get(urlPaginaRicerca.replace("@ldv@", req.params.ldv), function (error, response, body) {
        "use strict";
        if (error) {
            const err = new Error('Errore nella prima request');
            err.status = 500;
            next(err);
        }
        const $ = cheerio.load(body);
        const ses_id = $('input[name=ses_id]').val();
        const codice_sicurezza = $('input[name=codice_sicurezza]').val();
        const execute2 = $('input[name=execute2]').val();
        const urlValidazioneSessioneReady = urlValidazioneSessione.replace(new RegExp('@codice_sicurezza@', 'g'), codice_sicurezza).replace('@ses_id@', ses_id);
        rq.get(urlValidazioneSessioneReady, function (error, response, body) {
            if (error) {
                const err = new Error('Errore nella seconda request');
                err.status = 500;
                next(err);
            }
            const urlDatiSpedizioneReady = urlDatiSpedizione.replace(new RegExp('@codice_sicurezza@', 'g'), codice_sicurezza).replace('@ses_id@', ses_id).replace('@execute2@', execute2).replace("@ldv@", req.params.ldv);
            rq.get(urlDatiSpedizioneReady, function (error, response, body) {
                if (error) {
                    const err = new Error('Errore nella terza request');
                    err.status = 500;
                    next(err);
                }
                //res.render('test', {res: body});
                res.send(makeJsonFromResponse(body));
            });
        });

    });

});
router.get('/html/:ldv', function (req, res, next) {
    const lunghezzeAccettate = [7, 9, 12, 13];
    if (lunghezzeAccettate.indexOf(req.params.ldv.length) < 0) {
        const err = new Error('LDV troppo corta');
        err.status = 503;
        next(err);
    }
    rq.get(urlPaginaRicerca.replace("@ldv@", req.params.ldv), function (error, response, body) {
        "use strict";
        if (error) {
            const err = new Error('Errore nella prima request');
            err.status = 500;
            next(err);
        }
        const $ = cheerio.load(body);
        const ses_id = $('input[name=ses_id]').val();
        const codice_sicurezza = $('input[name=codice_sicurezza]').val();
        const execute2 = $('input[name=execute2]').val();
        const urlValidazioneSessioneReady = urlValidazioneSessione.replace(new RegExp('@codice_sicurezza@', 'g'), codice_sicurezza).replace('@ses_id@', ses_id);
        rq.get(urlValidazioneSessioneReady, function (error, response, body) {
            if (error) {
                const err = new Error('Errore nella seconda request');
                err.status = 500;
                next(err);
            }
            const urlDatiSpedizioneReady = urlDatiSpedizione.replace(new RegExp('@codice_sicurezza@', 'g'), codice_sicurezza).replace('@ses_id@', ses_id).replace('@execute2@', execute2).replace("@ldv@", req.params.ldv);
            rq.get(urlDatiSpedizioneReady, function (error, response, body) {
                if (error) {
                    const err = new Error('Errore nella terza request');
                    err.status = 500;
                    next(err);
                }
                res.render('test', {res: body});
                //res.send(makeJsonFromResponse(body));
            });
        });

    });

});

const getSteps = function ($) {
    const steps = [];
    $('div#track table').find('td[valign="TOP"] table tr:nth-child(n+2)').each(function (i, item) {
        "use strict";
        const colonne = $(item).find('td');
        steps.push({
            data: moment(colonne.eq(0).text(), 'DD-MM-YYYY').toISOString(),
            descrizione: colonne.eq(1).text().trim(),
            filiale: colonne.eq(2).text().trim()
        });
    });
    return steps;

};
function makeJsonFromResponse(body) {
    "use strict";
    const response = {};
    const $ = cheerio.load(body);
    if(!$('div#track table').length){
        return {
            esito: {
                esito: false,
                errorCorde: 404,
                message: 'Spedizione non trovata'
            }
        };
    }
    const esito = {
        esito: true,
        consegnata: $('td.rowheadBis').parent().parent().find('tr').length > 1
    };
    if (esito.consegnata) {
        const trEsito = $('td.rowheadBis').parent().parent().find('tr:nth-child(3)');
        if (trEsito.length) {
            const stringDate = trEsito.find('td:nth-child(1)').text() + ' ' + trEsito.find('td:nth-child(2)').text();
            esito.dataOra = moment(stringDate, 'DD-MM-YYYY HH:mm:ss').toISOString();
            esito.firma = trEsito.find('td:nth-child(3)').text().substring(1);
        }
    }
    response.esito = esito;
    response.steps = getSteps($);


    return response;

}

module.exports = router;
