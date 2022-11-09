import * as React from 'react';
import { useState } from 'react';
import AboutUs from './AboutUs';
import FrontPage from './FrontPage';
import './style.css';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

type TPage = 'home' | 'aboutUs';

export default function App() {
  const [page, setPage] = useState<TPage>('home');

  /* 
    Erstatt button toggling med lenker hvis det går uten å måtte legge til routing
     <nav>
        <a href="./FrontPage.tsx">Home</a>
        <a href="./AboutUs.tsx">About us</a>
      </nav>
  */

  return (
    <div>
      <div className="header">
        <h1>Velkommen til Girl Tech Fest!!</h1>
      </div>

      <ButtonGroup
        variant="contained"
        aria-label="outlined primary button group"
      >
        <Button onClick={() => setPage('home')}>Home</Button>
        <Button onClick={() => setPage('aboutUs')}>About us</Button>
      </ButtonGroup>

      {page === 'home' ? <FrontPage /> : <AboutUs />}
    </div>
  );
}
