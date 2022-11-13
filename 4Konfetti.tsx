import * as React from 'react';
import useWindowSize from 'react-use/lib/useWindowSize';
import Confetti from 'react-confetti';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';

/* OPPGAVE 4 - KONFETTI KNAPP
* ----------------------------

a) Legg til en knapp ved å kopiere kodesnutten under og 
lim den inn under </p>-taggen

```
 <button className="konfetti-knapp" onClick={}>
    {konfetti ? 'Konfetti PÅ' : 'Konfetti AV'}
  </button>
```

b) Endre bakgrunnsfargen til knappen når man hovrer musepekeren over knappen ved å legge til styling vha pseudoklassen ":hover". Kopier kodesnutten under, og lim den inn nederst i "komponentStyling.css" filen.

```
.konfetti-knapp:hover {
  background-color: var(--color-purple-darker);
}
```
c) Koble til funksjon til knappen til ved å sette "() => handleKonfetti()" inni "onClick={}" egenskapen til knappen din

```
onClick={handleKonfetti}>
```

* 
*/

const Konfetti = () => {
  const { width, height } = useWindowSize();
  const [konfetti, settKonfetti] = React.useState<boolean>(false);

  // FUNKSJON FOR Å SKRU KONFETTI AV OG PÅ
  // NB, det tar litt tid før funksjonen aktiveres
  const handleKonfetti = () => {
    if (konfetti === true) {
      settKonfetti(false);
    } else {
      settKonfetti(true);
    }
  };

  return (
    <section className="stylingForSeksjon4">
      {konfetti && <Confetti width={width} height={height} />}
      <h2>Oppgave 4 - Konfetti Knapp </h2>
      <p>
        I denne oppgaven, skal vi (1) legge til en knapp, (2) endre
        bakgrunnsfarge på knappen ved hover, og (3) koble en funksjon på knappen
        vår.
      </p>
    </section>
  );
};

export default Konfetti;
