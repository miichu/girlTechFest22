import * as React from 'react';
import { useState } from 'react';
import AboutUs from './AboutUs';
import FrontPage from './FrontPage';
import './style.css';

type TPage = 'home' | 'aboutUs';

export default function App() {
  const [page, setPage] = useState<TPage>('home');

  // hallo

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
        <h1>Hello StackBlitz!</h1>
      </div>

      {page === 'home' ? <FrontPage /> : <AboutUs />}
    </div>
  );
}
