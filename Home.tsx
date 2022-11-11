import * as React from 'react';
import OmOss from './OmOss';

const Home = () => {
  return (
    <main className="home">
      <section className="stylingForOppgave1">
        <h2>Oppgave 1</h2>
        <p>Oppgave</p>
        <p></p>
      </section>

      <section className="stylingForOppgave2">
        <h2>Oppgave liste</h2>
        <OmOss />
      </section>

      <section className="stylingForOppgave3">
        <h2>Oppgave 3</h2>
        <p>Oppgave</p>
      </section>

      <section className="stylingForOppgave1">
        <h2>Oppgave 4</h2>
        <p>Oppgave</p>
      </section>
    </main>
  );
};

export default Home;
