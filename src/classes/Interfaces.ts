interface Esito {
  esito: boolean;
  consegnata?: boolean;
  errorCode?: number;
  message?: string;
  dataOra?: string;
  firma?: string;
}

interface ParserResult {
  esito?: Esito;
  steps?: Step[];
}
class Step {
  private data: string;
  private descrizione: string;
  private filiale: string;
  constructor(step: { data: string, descrizione: string, filiale: string }) {
    this.data = step.data;
    this.descrizione = step.descrizione;
    this.filiale = step.filiale;
  }
}
export { ParserResult, Esito, Step };
