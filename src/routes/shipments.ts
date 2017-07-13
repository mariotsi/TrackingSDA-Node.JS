import * as express from 'express';
import * as rp from 'request-promise-native';
import Ldv from '../classes/Ldv';

const router = express.Router();

router.get('/:ldv', async (req, res, next) => {
    try {
        const ldv = new Ldv(req.params.ldv);
        await ldv.extractData();
        return res.send({ esito: ldv.esito, steps: ldv.steps });
    } catch (error) {
        return next(error)
    }
});

router.get('/html/:ldv', async function (req, res, next) {
    try {
        const ldv = new Ldv(req.params.ldv);
        await ldv.extractData();
        res.render('test', { res: ldv.rawHtml });
    } catch (error) {
        return next(error)
    }
});

export = router;
