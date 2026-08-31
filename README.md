# 🌊 Sunnee Beachwear - TypeScript Architecture & Dashboard

Progetto di modellazione ad oggetti in **TypeScript** per **Sunnee**, un brand di beachwear sostenibile che realizza capi da mare utilizzando plastica riciclata dagli oceani (PET).

Il sistema gestisce l'intera filiera produttiva, la profilazione dei clienti, il tracciamento dei prodotti e la validazione degli ordini tramite un'interfaccia grafica dinamica.

---

## 🔗 Link al Progetto

* 🌐 **Demo Interattiva (CodePen):** [Guarda la Dashboard su CodePen](https://codepen.io/GiuliaSenes/pen/01a05718-c537-72ae-ba14-57d4f11f5578)
* 💻 **Repository Codice (GitHub):**

---

## 🛠️ Architettura e Tecnologie

Il progetto è sviluppato seguendo i principi dell'**Object-Oriented Programming (OOP)** e la tipizzazione forte offerta da TypeScript:

* **Tipi Personalizzati (`TipoProdotto`, `StatoProdotto`)**: Restringono i valori ammessi per categorie e stati di disponibilità (`disponibile`, `ordinato`, `esaurito`).
* **Interfacce (`IProdotto`, `ICliente`, `IProcessoProduzione`)**: Definiscono i contratti e l'interoperabilità tra i vari moduli del sistema.
* **Classi (`Prodotto`, `Cliente`, `ProcessoProduzione`)**: Gestiscono la logica di business, l'assegnazione dei capi ai clienti e il tracciamento nella filiera di riciclo.
* **Controllo di Validazione**: Impedisce ordini duplicati o l'acquisto di prodotti non disponibili.

---

