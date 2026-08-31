// 2. CLASSE CLIENTE
// Gestisce i dati anagrafici del cliente e la possibilità di ordinare prodotti
import { ICliente } from "../interfacce/ICliente.ts";
import { IProdotto } from "../interfacce/IProdotto.ts";

export class Cliente implements ICliente {
  constructor(
    public nome: string,
    public cognome: string,
    public email: string,
    public metodoPagamentoPreferito: string
  ) {}

  // Metodo richiesto dall'interfaccia: ordina un prodotto se disponibile
  ordinaProdotto(prodotto: IProdotto): void {
    if (prodotto.stato !== 'disponibile') {
      console.log(`[ERRORE] ${this.nome}, il prodotto ${prodotto.id} non è disponibile per l'ordine.`);
      return;
    }

    console.log(`[INFO] ${this.nome} ${this.cognome} sta ordinando il prodotto ${prodotto.id}...`);
    // Richiama il metodo assegnaCliente sul prodotto, passando se stesso (this)
    prodotto.assegnaCliente(this);
  }
}