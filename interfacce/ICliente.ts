
import { IProdotto } from './IProdotto.ts';
export interface ICliente {
  nome: string;                            
  cognome: string;                        
  email: string;                           
  metodoPagamentoPreferito: string;        
  
  // Metodo per effettuare un ordine
  ordinaProdotto(prodotto: IProdotto): void; 
}