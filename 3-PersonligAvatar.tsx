import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';

/* OPPGAVE 3 - Personlig Avatar
* ---------------------------------

A) 🌸 Gå tilbake til "App.tsx"-filen og se om dere finner et sted det står: <PersonligAvatar />. På samme linje, erstatt alle steder der det står 'navn' med navnene på jentene i gruppa. Se om dere kan endre på rekkefølgen på navnene for å bytte avatar.

Ekstra oppgave:
B) 🌸 Hvis dere har lyst på et annet bilde til avataren deres kan dere gå inn på google, finne et bilde og trykke 'Kopier bildeadresse', deretter kan dere erstatte det som står etter 'src' og lime inn bildeadressen.
*/

const PersonligAvatar = ({ navn }) => {
  return (
    <section className="stylingForSeksjon3">
      <h2>😺 Oppgave 3 - Personlig Avatar</h2>
      <p>
        han er død
        <strong> </strong>!
      </p>
      <Grid container md={7} className="avatar">
        <Grid item xs={3}>
          <Avatar
            src="https://www.pngitem.com/pimgs/m/524-5249204_cute-disney-stitch-hd-png-download.png"
            sx={{ width: 75, height: 75 }}
          />
          <p>{navn[0]}</p>
        </Grid>
        <Grid item xs={3}>
          <Avatar
            src="https://verdensbestenyheter.no/wp-content/uploads/2020/09/16402574116_fde4556f3d_o-1-1024x611.jpg"
            sx={{ width: 75, height: 75 }}
          />
          <p>{navn[1]}</p>
        </Grid>
        <Grid item xs={3}>
          <Avatar
            src="https://www.nysgjerrigper.no/siteassets/bilder-artikler/2017-3/katter-foto-shutterstock.jpg?transform=DownFit&width=1000"
            sx={{ width: 75, height: 75 }}
          />
          <p>{navn[2]}</p>
        </Grid>
        <Grid item xs={3}>
          <Avatar
            src="https://static.dw.com/image/60744189_403.jpg"
            sx={{ width: 75, height: 75 }}
          />
          <p>{navn[3]}</p>
        </Grid>
      </Grid>
    </section>
  );
};

export default PersonligAvatar;
