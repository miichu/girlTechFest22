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
        Her ser dere 4 avatarer som vi vil at dere skal tilpasse jentene på
        gruppa 🐶 Sjekk ut filen som heter 3-PersonligAvatar.tsx!
      </p>
      <Grid container md={7} className="avatar">
        <Grid item xs={3}>
          <Avatar
            src="https://www.norli.no/media/catalog/product/7/3/7331626125819.jpg?auto=webp&format=pjpg&width=1920&height=2400&fit=cover"
            sx={{ width: 75, height: 75 }}
          />
          <p>{navn[0]}</p>
        </Grid>
        <Grid item xs={3}>
          <Avatar
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Soccerball.svg/500px-Soccerball.svg.png"
            sx={{ width: 75, height: 75 }}
          />
          <p>{navn[1]}</p>
        </Grid>
        <Grid item xs={3}>
          <Avatar
            src="https://www.ikea.com/no/no/images/products/smycka-kunstige-blomster-rose-rosa__0903523_pe596725_s5.jpg"
            sx={{ width: 75, height: 75 }}
          />
          <p>{navn[2]}</p>
        </Grid>
        <Grid item xs={3}>
          <Avatar
            src="https://evidensia.no/getmedia/ec099f6f-9572-49b6-85d2-2af26ec0baf8/kjope-valp-2"
            sx={{ width: 75, height: 75 }}
          />
          <p>{navn[3]}</p>
        </Grid>
      </Grid>
    </section>
  );
};

export default PersonligAvatar;
