import { IProdotto } from './IProdotto.ts';

export interface IProcessoProduzione {
  nomeProcesso: string;                    
  descrizione: string;                     
  prodottiInProduzione: IProdotto[];      
  
  // Metodo per inserire nuovi prodotti nel processo
  aggiungiProdotto(prodotto: IProdotto): void; 
}