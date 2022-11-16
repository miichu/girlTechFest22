import * as React from 'react';
import useWindowSize from 'react-use/lib/useWindowSize';
import Confetti from 'react-confetti';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';

/* OPPGAVE 4 - KONFETTI KNAPP
* ----------------------------

A) 🌸 Legg til en knapp ved å kopiere kodesnutten under og 
lim den inn under </p>-taggen

```
 <button className="konfetti-knapp" onClick={}>
    {konfetti ? 'Konfetti PÅ' : 'Konfetti AV'}
  </button>
```

B) 🌸 Endre bakgrunnsfargen til knappen når man hovrer musepekeren over knappen ved å legge til styling vha pseudoklassen ":hover". Kopier kodesnutten under, og lim den inn nederst i "styling-komponenter.css" filen.

``` 
.konfetti-knapp:hover {
  background-color: var(--color-purple-darker);
}
```
C) 🌸 Koble til funksjon til knappen ved å sette
 "() => handleKonfetti()" inni "onClick={}" egenskapen til knappen din

```
onClick={() => handleKonfetti()}>
``` 
*/

const Konfetti = () => {
  const { width, height } = useWindowSize();
  const [konfetti, settKonfetti] = React.useState<boolean>(false);

  // Funksjon for å skru konfetti av/på
  // NB, det tar litt tid før funksjonen aktiveres når man trykker på knappen
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
      <h2>🎉 Oppgave 4 - Konfetti Knapp </h2>
      <p>
        I denne oppgaven, skal vi (1) legge til en knapp, (2) endre
        bakgrunnsfarge på knappen ved hover, og (3) koble en funksjon på knappen
        vår. Sjekk ut oppgaveteksten i filen som heter
        <strong> "4-Konfetti.tsx".</strong>
      </p>
      <button className="konfetti-knapp" onClick={() => handleKonfetti()}>
        {konfetti ? 'Konfetti PÅ' : 'Konfetti AV'}
      </button>
    </section>
  );
};

export default Konfetti;
