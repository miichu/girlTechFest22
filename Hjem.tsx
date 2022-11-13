import * as React from 'react';
import PersonligAvatar from './Avatar';
import OmOss from './OmOss';
import SeksjonEndreTekstOgFarger from './Seksjon1EndreTekstOgFarger';

const Hjem = () => {
  return (
    <main className="home">
      <SeksjonEndreTekstOgFarger />

      <section className="stylingForOppgave2">
        <h2>Oppgave liste</h2>
        <OmOss />
      </section>

      <section className="stylingForOppgave3">
        <h2>Oppgave 3</h2>
        <PersonligAvatar navn={['Navn', 'Navn', 'Navn', 'Navn']} />
      </section>

      <section className="stylingForOppgave1">
        <h2>Oppgave 4</h2>
        <p>Oppgave</p>
      </section>
    </main>
  );
};

export default Hjem;
