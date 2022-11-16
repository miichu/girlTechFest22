import * as React from 'react';
import './styling-generell.css';
import './styling-komponenter.css';
import Intro from './1-Intro';
import OmGruppa from './2-OmGruppa';
import PersonligAvatar from './3-PersonligAvatar';
import Konfetti from './4-Konfetti';
import Typography from '@mui/material/Typography';

export default function App() {
  return (
    <div>
      <header className="header">
        <h1>🦠🦠🦠😷😷JULEN 2022😷😷🦠🦠🦠</h1>
      </header>

      <main>
        <Intro />

        <OmGruppa />

        <PersonligAvatar navn={['julie victoria', 'Julie', 'mariam','daycha']} />

        <Konfetti />
      </main>
    </div>
  );
}
