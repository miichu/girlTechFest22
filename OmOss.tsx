import * as React from 'react';

const OmOss = () => {
  // Oppgave 1
  // Skriv inn gruppenummer der det står Om gruppe:

  // Oppgave 2
  // Kopier linje 19 og lim den inn under for hvert medlem i gruppa. Erstatt alle steder hvor det står "Navn" med navnene på jentene i gruppa.

  // Eksta oppgave
  // For å se en litt finere liste, legg til dette: className="about" etter der det står <main

  return (
    <section className="stylingForOppgave2">
      <h2>Oppgave liste</h2>

      <div className="about-container">
        <main className="about">
          <h1>Om gruppe: </h1>
          <ul>
            <li>Navn</li>
          </ul>
        </main>
      </div>
    </section>
  );
};

export default OmOss;