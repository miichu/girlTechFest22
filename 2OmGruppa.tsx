import * as React from 'react';

const OmGruppa = () => {
  // Oppgave 1
  // Skriv inn gruppenummer der det står Om gruppe:

  // Oppgave 2
  // Kopier linje 19 og lim den inn under for hvert medlem i gruppa. Erstatt alle steder hvor det står "Navn" med navnene på jentene i gruppa.

  // Ekstra oppgave
  // For å se en litt finere liste, legg til dette: className="about" etter der det står <main

  return (
    <section className="stylingForSeksjon2">
      <h2>Oppgave 2 - Om Gruppa </h2>

      <div className="about">
        <h3>Om gruppa: </h3>
        <ul>
          <li>Navn</li>
        </ul>
      </div>
    </section>
  );
};

export default OmGruppa;
