import Typography from '@mui/material/Typography';
import * as React from 'react';

/*  OPPGAVE 1A - OVERSKRIFT (heading) 
   * ---------------------------------------
   I denne oppgaven, vil vi at dere skal endre overskriftsteksten til seksjonen under. 
   🌸 Endre teksten inni heading 2 taggen "<h2> ... </h2>" til "Oppgave 1 og 2 - Intro". 

   *  OPPGAVE 1B - ENDRE BAKGRUNNSFARGE (styling på seksjon)
   * ---------------------------------------
   Som du ser, er bakgrunnsfargen på seksjonen foreløpig hvit. I denne oppgaven, vil vi at dere skal endre på bakgrunnsfargen ved å koble på en stylingklasse som allerede er laget.  

   🌸 Endre klassenavnet til seksjon til className="stylingForSeksjon1" (dette kobler section html elementet vårt med en css styling klasse som vi har laget i generalStyling.css)

   Da skal <section> se slik ut:
      <section className="stylingForSeksjon1"> 
      ...
      </section>

  */

const Intro = () => {
  return (
    <section className="">
      <p>
        Hei! Velkommen til workshop med oss! ✨ Vi har gledet oss masse til å ha workshop med dere, og skulle noe være uklart så må dere bare huke tak i en av oss! 
        Vi er her for å hjelpe 😺✨
      </p>
      <h2>...</h2>
      <p>Sjekk ut oppgaven for denne seksjonen i fil "1-Intro.tsx".</p>
    </section>
  );
};

export default Intro;
