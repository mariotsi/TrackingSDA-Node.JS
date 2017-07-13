import { ParserResult, Esito, Step } from './Interfaces'
import HttpError from '../classes/HttpError';
import Crawler from '../classes/Crawler';


export default class Ldv {
    code: string;
    rawHtml: string;
    esito: Esito;
    steps: Step[];
    static allowedLengths = [7, 9, 12, 13]
    constructor(code: string) {
        if (!Ldv.allowedLengths.includes(code.length)) {
            throw (new HttpError('Wrong LDV format', 503));
        }
        this.code = code;

    }
    async extractData() {
        const crawler = new Crawler(this);

        let err: HttpError;
        if (err = await crawler.searchLdv()) {
            throw(err);
        }
        if (err = await crawler.validateSession()) {
            throw(err);
        }
        if (err = await crawler.getShipmentDetails()) {
            throw(err);
        }
        this.rawHtml = crawler.rawBody.html();
        crawler.parse();
    }
};