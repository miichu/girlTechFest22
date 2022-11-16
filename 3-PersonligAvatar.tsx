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
        gruppa 🐶 Sjekk ut filen som heter
        <strong>"3-PersonligAvatar.tsx" </strong>!
      </p>
      <Grid container md={7} className="avatar">
        <Grid item xs={3}>
          <Avatar
            src="https://64.media.tumblr.com/8093f48d41140c8dc410eb278e35599d/tumblr_oo2n9a4XcN1sqnsado1_r1_500.jpg"
            sx={{ width: 75, height: 75 }}
          />
          <p>{navn[0]}</p>
        </Grid>
        <Grid item xs={3}>
          <Avatar
            src="https://render.fineartamerica.com/images/rendered/default/canvas-print/10/6.5/mirror/break/images/artworkimages/medium/2/side-view-of-girl-kicking-soccer-ball-at-field-against-sky-during-sunset-cavan-images-canvas-print.jpg"
            sx={{ width: 75, height: 75 }}
          />
          <p>{navn[1]}</p>
        </Grid>
        <Grid item xs={3}>
          <Avatar
            src="https://i.pinimg.com/736x/c9/96/8c/c9968cca48a6b3095ae15e95e9e43678.jpg"
            sx={{ width: 75, height: 75 }}
          />
          <p>{navn[2]}</p>
        </Grid>
        <Grid item xs={3}>
          <Avatar
            src="https://cdn.britannica.com/92/211792-050-E764F875/American-singer-Ariana-Grande-2018.jpg"
            sx={{ width: 75, height: 75 }}
          />
          <p>{navn[3]}</p>
        </Grid>
      </Grid>
    </section>
  );
};

export default PersonligAvatar;
