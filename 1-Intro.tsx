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
    <section className="">
      <p>
    🎄🎄🎄🌺❄️☃️⛄️ god jul men jeg må skuffe dere med og si at det fortsatt er korona i norpolen og dermed er julenisen i isolasjon frem til etter deres liv sikkert er ferdig😂😂😂😔😔😔😷😷😷🦠🦠🦠🦠🦠🦠🦠🦠🦠🦠🦠🦠🦠🦠🦠🦠🦠🦠🦠🦠🦠🦠🦠🦠men dere kan gi gaver til han han trenger antibac og munnbind😔😔og sikkert enda mere smittevernsutstyr
      </p>
      <h2>...</h2>
      <p>
        god jul selom det bare er Novenber!!!{' '}
        <strong></strong>.
      </p>
    </section>
  );
};

export default Intro;
