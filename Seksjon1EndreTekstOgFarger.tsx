import * as React from 'react';

const SeksjonEndreTekstOgFarger = () => {
  /* --------------------------------------
   *  OPPGAVE 1 - OVERSKRIFT (heading)
   * ---------------------------------------
   
   Hver seksjon (<section>) burde ha en overskrift. 
   I denne oppgaven, vil vi at dere skal endre overskriftsteksten til seksjonen under. 
   Dere ved å endre teksten inni heading 2 taggen "<h2> ... </h2>". 

   * --------------------------------------
   *  OPPGAVE 2 - ENDRE BAKGRUNNSFARGE (styling på seksjon)
   * ---------------------------------------
   
   Som du ser, er bakgrunnsfargen på seksjonen foreløpig hvit. I denne oppgaven, vil vi at dere skal endre på bakgrunnsfargen ved å koble på en stylingklasse som vi allerede har laget.  

  Dette gjør dere ved å:
   - Endre klassenavnet til seksjon til className="stylingForSeksjon1"

   Da skal <section> se slik ut:
      <section className="stylingForSeksjon1"> 
      ...
      </section>

      

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

export default SeksjonEndreTekstOgFarger;
