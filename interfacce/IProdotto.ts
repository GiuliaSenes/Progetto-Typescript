export type TipoProdotto = 'costume da bagno' | 'pareo' | 'cappello';
export type StatoProdotto = 'disponibile' | 'ordinato' | 'esaurito';

import { ICliente } from './ICliente.ts';

export interface IProdotto {
  id: string;                              
  tipo: TipoProdotto;                      
  taglia: string;                         
  colore: string;                          
  stato: StatoProdotto;                    
  clienteAssegnato?: ICliente;             
  
  // Metodo per associare un cliente al prodotto
  assegnaCliente(cliente: ICliente): void; 
}