import * as React from 'react';
import { useState } from 'react';
import OmOss from './OmOss';
import Hjem from './Hjem';
import './generalStyling.css';
import './style.css';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

export default function App() {
  const [side, settSide] = useState<'hjem' | 'omOss'>('hjem');

  return (
    <div>
      <header className="header">
        <h1>Girl Tech Fest</h1>

        <ButtonGroup
          variant="contained"
          aria-label="outlined primary button group"
          className="menu"
        >
          <Button
            className={side === 'hjem' && 'active-page'}
            onClick={() => settSide('hjem')}
          >
            Home
          </Button>
          <Button
            className={side === 'omOss' && 'active-page'}
            onClick={() => settSide('omOss')}
          >
            About us
          </Button>
        </ButtonGroup>
      </header>

      {side === 'hjem' ? <Hjem /> : <OmOss />}
    </div>
  );
}
