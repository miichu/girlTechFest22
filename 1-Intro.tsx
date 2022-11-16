import Typography from '@mui/material/Typography';
import * as React from 'react';

/*  OPPGAVE 1A - OVERSKRIFT (heading) 
   * ---------------------------------------
   I denne oppgaven, vil vi at dere skal endre overskriftsteksten til innholdet under. 
   🌸 Endre teksten inni heading 2 taggen "<h2> ... </h2>" til "👋 Oppgave 1 - Intro". 

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
    <section className="stylingForSeksjon1">
      <p>
        hei jeg heter MINHA jeg går i stovner skole 5B🐼✨ jeg her 4 søsken en store bror en store søster lillebror og me😄
        
        
        jeg heter rahima jeg like pugramaring og jeg har en snil lærer som heter frida  er gøy på skolen jeg har en store bror og en lille søster
        Jeg heter Aalia å jeg har en av de beste faglerenr som heter Frida. hene gjør skolen mye gøyere. 
      </p>
      <h2>oppgave 1</h2>
      <p>
        Sjekk ut oppgaven for denne seksjonen i fil{' '}
        <strong>"1-Intro.tsx"</strong>.
      </p>
    </section>
  );
};

export default Intro;
