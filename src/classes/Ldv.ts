import { ParserResult, Esito, Step } from './Interfaces'
const allowedLengths = [7, 9, 12, 13];
export default class Ldv {
    code: string;
    esito: Esito;
    steps: Step[];
    constructor(code: string) {
        if (!allowedLengths.includes(code.length)) {
            return null;
        }
        this.code = code;
    }
    extractData(data: ParserResult) {
        this.esito = data.esito
        this.steps = data.steps
    }
};