// 3. CLASSE PROCESSO DI PRODUZIONE
import { IProcessoProduzione } from "../interfacce/IProcessoProduzione.ts";
import { IProdotto } from "../interfacce/IProdotto.ts";

export class ProcessoProduzione implements IProcessoProduzione {
  // Array inizialmente vuoto che conterrà i prodotti realizzati con questo processo
  public prodottiInProduzione: IProdotto[] = [];

  constructor(
    public nomeProcesso: string,
    public descrizione: string
  ) {}

  // Metodo richiesto dall'interfaccia: aggiungere un prodotto 
  aggiungiProdotto(prodotto: IProdotto): void {
    this.prodottiInProduzione.push(prodotto);
    console.log(`[PRODUZIONE] Prodotto ${prodotto.id} (${prodotto.tipo}) aggiunto al processo "${this.nomeProcesso}".`);
  }
}