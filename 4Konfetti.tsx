import * as React from 'react';

/* OPPGAVE 4 - KONFETTI KNAPP
* ----------------------------

a) Legg til en knapp ved å kopiere kodesnutten under og lim den inn under <h2>-taggen

b) Legg til en hover effekt (pseudo klasse)
Endre bakgrunnsfarge on hover

c) Koble til funksjon 

* 
*/

const Konfetti = () => {
  return (
    <section className="stylingForSeksjon4">
      <h2>Oppgave 4 - Konfetti </h2>
      <p>I denne oppgaven, skal vi:</p>
      <ol>
        <li> legge til en knapp</li>
        <li>
          {' '}
          endre bakgrunnsfarge på knappen når man hovrer over med musepekeren
        </li>
        <li> koble på en konfetti funksjon</li>
      </ol>

      <button className="konfetti-knapp">Klikk for konfetti</button>
    </section>
  );
};

export default Konfetti;
