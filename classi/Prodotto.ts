// 1. CLASSE PRODOTTO

import { IProdotto } from "../interfacce/IProdotto.ts";
import { ICliente } from "../interfacce/ICliente.ts";
import { TipoProdotto, StatoProdotto } from "../interfacce/IProdotto.ts";

// Gestisce le informazioni dei capi da mare e la loro assegnazione al cliente
export class Prodotto implements IProdotto {
  // Proprietà opzionale: all'inizio è undefined perché non c'è ancora un cliente
  public clienteAssegnato?: ICliente;

  // Il costruttore assegna le proprietà e imposta 'disponibile' come stato iniziale di default
  constructor(
    public id: string,
    public tipo: TipoProdotto,
    public taglia: string,
    public colore: string,
    public stato: StatoProdotto = 'disponibile'
  ) {}

  // Metodo richiesto dall'interfaccia: associa un cliente al prodotto
  assegnaCliente(cliente: ICliente): void {
    if (this.stato === 'ordinato') {
      console.log(`[ERRORE] Il prodotto ${this.id} è già stato ordinato.`);
      return;
    }
    if (this.stato === 'esaurito') {
      console.log(`[ERRORE] Il prodotto ${this.id} è esaurito.`);
      return;
    }

    // Collega il cliente e aggiorna lo stato a "ordinato"
    this.clienteAssegnato = cliente;
    this.stato = 'ordinato';
    console.log(`[OK] Prodotto ${this.id} (${this.tipo}) assegnato con successo a ${cliente.nome} ${cliente.cognome}.`);
  }
}