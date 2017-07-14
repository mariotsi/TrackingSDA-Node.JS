import { ParserResult, Esito, Step } from '../classes/Interfaces';
import * as moment from 'moment-timezone';

export default class LdvBodyParser {
  public static parse($: CheerioAPI): ParserResult {

    if (!$('div#track table').length) {
      return {
        esito: {
          esito: false,
          errorCode: 404,
          message: 'Shipment not found',
        },
      };
    }
    const esito: Esito = {
      esito: true,
      consegnata: $('td.rowheadBis').parent().parent().find('tr').length > 1,
    };
    if (esito.consegnata) {
      const trEsito = $('td.rowheadBis').parent().parent().find('tr:nth-child(3)');
      if (trEsito.length) {
        const stringDate = `${trEsito.find('td:nth-child(1)').text()} ${trEsito.find('td:nth-child(2)').text()}`;
        esito.dataOra = moment(stringDate, 'DD-MM-YYYY HH:mm:ss').tz('Europe/Rome').toISOString();
        esito.firma = trEsito.find('td:nth-child(3)').text().substring(1);
      }
    }

    return { esito, steps: LdvBodyParser.getSteps($) };
  }

  private static getSteps($: CheerioAPI): Step[] {
    const steps: Step[] = [];
    $('div#track table').find('td[valign="TOP"] table tr:nth-child(n+2)').each((i, item) => {
      const colonne = $(item).find('td');
      steps.push(new Step({
        data: moment(colonne.eq(0).text(), 'DD-MM-YYYY').tz('Europe/Rome').toISOString(),
        descrizione: colonne.eq(1).text().trim(),
        filiale: colonne.eq(2).text().trim(),
      }));
    });
    return steps;
  }
}
