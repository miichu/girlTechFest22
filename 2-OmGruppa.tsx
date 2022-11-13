import * as React from 'react';

/* OPPGAVE 2 - Om gruppa 
* -----------------------
A) 🌸 Skriv inn gruppenummer der det står "Om gruppa:"

B) 🌸 Kopier linje 21 og lim den inn under for hvert medlem i gruppa. 
Erstatt alle steder hvor det står "Navn" med navnene på jentene i gruppa.

Ekstra oppgave:
C) 🌸 For å se en litt finere liste, legg til dette: className="about" etter der det står <div>

```
<div className="about"> ... </div>
```
*/
const OmGruppa = () => {
  return (
    <section className="stylingForSeksjon2">
      <h2>👩‍👩‍👧 Oppgave 2 - Om Gruppa </h2>

      <div>
        <h3>Om gruppa: </h3>
        <ul>
          <li>Navn</li>
        </ul>
      </div>
    </section>
  );
};

export default OmGruppa;
