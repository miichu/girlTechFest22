import * as React from 'react';

/* OPPGAVE 2 - Om gruppa 
* -----------------------
A) 🌸 Skriv inn gruppenummer der det står "Om gruppa:"

B) 🌸 Se om dere finner der det står <ul>, dette betyr at nå kommer det en liste og listen slutter der det står </ul>. Mellom <ul> og </ul> ser dere at det står <li>Navn</li> - dette representerer et element på lista! Kopier linje 30 og lim den inn under for hvert medlem i gruppa. 
Erstatt alle steder hvor det står "Navn" med navnene på jentene i gruppa.

C) 🌸 For å se en litt finere liste, legg til dette: className="omOss" etter der det står <div> på linje 19.

```
<div className="omOss"> ... </div>
```
*/
const OmGruppa = () => {
  return (
    <section className="stylingForSeksjon2">
      <div>
        <h2>👩‍👩‍👧 Oppgave 2 - Om Gruppa </h2>
        <p>
          Vi trenger litt informasjon om hvem som er med på gruppa! Vi vil at
          dere skal fikse listen under slik at den viser navnene på alle jentene
          på gruppa 🌸 Gå til filen som heter 2-OmGuppa.tsx og følg det som står
          i grønn tekst.
        </p>
        <div>
          <h3>Om gruppa: </h3>
          <ul>
            <li>Navn</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default OmGruppa;
