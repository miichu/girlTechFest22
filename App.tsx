import * as React from 'react';
import './generalStyling.css';
import './style.css';
import Intro from './1Intro';
import OmGruppa from './2OmGruppa';
import PersonligAvatar from './3PersonligAvatar';
import Konfetti from './4Konfetti';

export default function App() {
  return (
    <div>
      <header className="header">
        <h1>Girl Tech Fest</h1>
      </header>

      <main>
        <Intro />

        <OmGruppa />

        <PersonligAvatar navn={['Navn', 'Navn', 'Navn', 'Navn']} />

        <Konfetti />
      </main>
    </div>
  );
}
