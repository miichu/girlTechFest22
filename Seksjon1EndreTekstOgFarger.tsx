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
   
   Som du ser, er bakgrunnsfargen på seksjonen foreløpig hvit. I denne oppgaven, 
   vil vi at dere skal endre på bakgrunnsfargen vha enten inline styling eller 
   å koble på en stylingklasse som vi allerede har laget.. 

  Les mer om de ulike styling metodene i ReadMe.md filen.

  METODE 1: Inline styling (dvs. å style koden direkte i samme fil)
   - Erstatt 'className="" ' med 
   "style={{ 'background-color': 'var(--color-purple-light)' }}"

  METODE 2: Styling via ekstern styling sheet  (anbefalt)
   - Endre klassenavnet til seksjon til className="stylingForSeksjon1"

   Da skal <section> se slik ut:
      <section className="stylingForSeksjon1"> 
      ...
      </section>

   */

  return (
    <section className="">
      <h2>*Endre teksten her*</h2>
      <p>
        GTF er et initiativ fra ODA Nettverket, TENK – Tech Nettverket for
        kvinner, IKT Norge og Nasjonalt senter for realfagsrekruttering.
      </p>
    </section>
  );
};

export default SeksjonEndreTekstOgFarger;
