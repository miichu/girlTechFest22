import * as React from 'react';

const IntroSeksjon = () => {
  /* --------------------------------------
   *  OPPGAVE 1A - OVERSKRIFT (heading) 
   * ---------------------------------------
   Hver seksjon (<section>) burde ha en overskrift. 
   I denne oppgaven, vil vi at dere skal endre overskriftsteksten til seksjonen under. 
   Dere ved å endre teksten inni heading 2 taggen "<h2> ... </h2>" til "Oppgave 1 og 2 - Intro". 

   Da skal <h2> se slik ut: <h2> Oppgave 1 og 2 - Intro</h2>

   * --------------------------------------
   *  OPPGAVE 1B - ENDRE BAKGRUNNSFARGE (styling på seksjon)
   * ---------------------------------------
   Som du ser, er bakgrunnsfargen på seksjonen foreløpig hvit. I denne oppgaven, vil vi at dere skal endre på bakgrunnsfargen ved å koble på en stylingklasse som vi allerede har laget.  

  Dette gjør dere ved å:
   - Endre klassenavnet til seksjon til className="stylingForSeksjon1" (dette kobler section html elementet vårt med en css styling klasse som vi har laget i generalStyling.css)

   Da skal <section> se slik ut:
      <section className="stylingForSeksjon1"> 
      ...
      </section>

  * ---------------------------------------
   */

  return (
    <section className="">
      <h2>...</h2>
      <p>
        Hei! Velkommen til workshop med oss! Hvis det er noe som skulle være
        uklart, er det bare å stille en av oss som går rundt spørsmål! Heller en
        gang for mye enn for lite 😺✨
      </p>
    </section>
  );
};

export default IntroSeksjon;
