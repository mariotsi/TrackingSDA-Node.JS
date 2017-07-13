import * as express from 'express';
const rq = require('request').defaults({ jar: true });
import * as rp from 'request-promise-native';
const router = express.Router();
const cheerio = require('cheerio');
const moment = require('moment');
import Ldv from '../classes/Ldv';
import HttpError from '../classes/HttpError';
import Crawler from '../classes/Crawler';


router.get('/:ldv', async (req, res, next) => {
    const ldv = new Ldv(req.params.ldv);
    if (!ldv.code) {
        const err = new HttpError('LDV lenght not allowed');
        err.status = 503;
        return next(err);
    }
    const crawler = new Crawler(ldv);

    let err: HttpError;
    if (err = await crawler.searchLdv()) {
        return next(err);
    }
    if (err = await crawler.validateSession()) {
        return next(err);
    }
    if (err = await crawler.getShipmentDetails()) {
        return next(err);
    }

    crawler.parse();

    return res.send({ esito: ldv.esito, steps: ldv.steps });
});

router.get('/html/:ldv', async function (req, res, next) {
    const ldv = new Ldv(req.params.ldv);
    if (!ldv.code) {
        const err = new HttpError('LDV lenght not allowed');
        err.status = 503;
        return next(err);
    }
    const crawler = new Crawler(ldv);

    let err: HttpError;
    if (err = await crawler.searchLdv()) {
        return next(err);
    }
    if (err = await crawler.validateSession()) {
        return next(err);
    }
    if (err = await crawler.getShipmentDetails()) {
        return next(err);
    }
    res.render('test', { res: crawler.rawBody.html() });

});

export = router;
