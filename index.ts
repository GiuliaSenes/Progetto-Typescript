// Importazione delle classi dagli altri file del progetto
import { Prodotto } from './classi/Prodotto.ts';
import { Cliente } from './classi/Cliente.ts';
import { ProcessoProduzione } from './classi/ProcessoProduzione.ts';

console.log('==================================================');
console.log('   AVVIO VERIFICA SISTEMA BEACHWEAR SUNNEE       ');
console.log('==================================================\n');

// 1. ISTANZIAMENTO DEI PRODOTTI (Beachwear sostenibile)
console.log('--- 1. ISTANZIAMENTO DEI PRODOTTI ---');
const costumeBlu = new Prodotto('PRD-101', 'costume da bagno', 'L', 'Blu Oceano');
const pareoRosa = new Prodotto('PRD-201', 'pareo', 'Unica', 'Rosa Corallo');
const cappelloPaglia = new Prodotto('PRD-301', 'cappello', 'M', 'Naturale');

// 2. ISTANZIAMENTO DEI CLIENTI
console.log('\n--- 2. ISTANZIAMENTO DEI CLIENTI ---');
const clienteGiulia = new Cliente('Giulia', 'Verdi', 'giulia.verdi@email.com', 'PayPal');
const clienteLuca = new Cliente('Luca', 'Rossi', 'luca.rossi@email.com', 'Carta di Credito');

// 3. ISTANZIAMENTO E GESTIONE DEL PROCESSO DI PRODUZIONE
console.log('\n--- 3. CREAZIONE PROCESSO PRODUTTIVO E AGGIUNTA ARTICOLI ---');
const processoPET = new ProcessoProduzione(
  'Riciclo Bottiglie PET',
  'Trasforma la plastica recuperata dai mari in fibra poliestere di alta qualità.'
);

// Aggiunta dei prodotti alla filiera
processoPET.aggiungiProdotto(costumeBlu);
processoPET.aggiungiProdotto(pareoRosa);
processoPET.aggiungiProdotto(cappelloPaglia);

// 4. TEST DELLA LOGICA DI ORDINAZIONE E GESTIONE DEGLI STATI
console.log('\n--- 4. TEST ORDINAZIONI E CONTROLLI ---');

// Test 1: Giulia ordina il costume disponibile
console.log('-> Test 1: Giulia acquista il costume da bagno');
clienteGiulia.ordinaProdotto(costumeBlu);

// Test 2: Luca tenta di ordinare lo stesso costume (deve fallire: già ordinato)
console.log('\n-> Test 2: Luca tenta di acquistare lo stesso costume appena ordinato');
clienteLuca.ordinaProdotto(costumeBlu);

// Test 3: Luca ordina il pareo disponibile
console.log('\n-> Test 3: Luca acquista il pareo disponibile');
clienteLuca.ordinaProdotto(pareoRosa);

console.log('\n==================================================');
console.log('               TEST COMPLETATI                    ');
console.log('==================================================');