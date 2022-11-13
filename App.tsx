import * as React from 'react';
import './generalStyling.css';
import './style.css';
import OmOss from './OmOss';
import SeksjonEndreTekstOgFarger from './Seksjon1EndreTekstOgFarger';
import PersonligAvatar from './PersonligAvatar';

export default function App() {
  return (
    <div>
      <header className="header">
        <h1>Girl Tech Fest</h1>
      </header>

      <main>
        <SeksjonEndreTekstOgFarger />

        <OmOss />

        <section className="stylingForOppgave3">
          <h2>Oppgave 3</h2>
          <PersonligAvatar navn={['Navn', 'Navn', 'Navn', 'Navn']} />
        </section>

        <section className="stylingForSeksjon4">
          <h2>Oppgave 4</h2>
          <p>Oppgave</p>
        </section>
      </main>
    </div>
  );
}
