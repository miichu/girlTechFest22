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
            src="https://harunmudak.com/wp-content/uploads/2020/12/cute-cartoon-characters-2-1024x1024.png"
            sx={{ width: 75, height: 75 }}
          />
          <p>{navn[0]}</p>
        </Grid>
        <Grid item xs={3}>
          <Avatar
            src="https://static8.depositphotos.com/1000792/861/v/450/depositphotos_8614495-stock-illustration-fun-zoo-koala.jpg"
            sx={{ width: 75, height: 75 }}
          />
          <p>{navn[1]}</p>
        </Grid>
        <Grid item xs={3}>
          <Avatar
            src="https://i.pinimg.com/originals/d4/51/b2/d451b242dcfafe6ac710c790ca7b5be4.png"
            sx={{ width: 75, height: 75 }}
          />
          <p>{navn[2]}</p>
        </Grid>
        <Grid item xs={3}>
          <Avatar
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5BXfmtW_d688mEISM2-Ong3ASFgCcqyEl-A&usqp=CAU"
            sx={{ width: 75, height: 75 }}
          />
          <p>{navn[3]}</p>
        </Grid>
      </Grid>
    </section>
  );
};

export default PersonligAvatar;
