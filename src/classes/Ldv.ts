import {Esito, Step} from './Interfaces';
import HttpError from '../classes/HttpError';
import Crawler from '../classes/Crawler';


export default class Ldv {
  private static allowedLengths = [7, 9, 12, 13];
  public code: string;
  public rawHtml: string;
  public esito: Esito;
  public steps: Step[];

  constructor(code: string) {
    if (!Ldv.allowedLengths.includes(code.length)) {
      throw (new HttpError('Wrong LDV format', 503));
    }
    this.code = code;

  }

  public async extractData() {
    const crawler = new Crawler(this);
    try {
      await crawler.searchLdv();
      await crawler.validateSession();
      await crawler.getShipmentDetails();
      this.rawHtml = crawler.rawBody.html();
      crawler.parse();
    } catch (err) {
      throw err;
    }
  }
}
