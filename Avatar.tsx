import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';

const PersonligAvatar = ({ navn }) => {
  console.log(navn);
  return (
    <Grid container md={4}>
      <Grid item xs={3}>
        <Avatar
          src="https://www.norli.no/media/catalog/product/7/3/7331626125819.jpg?auto=webp&format=pjpg&width=1920&height=2400&fit=cover"
          sx={{ width: 60, height: 60 }}
        />
        <p>{navn[0]}</p>
      </Grid>
      <Grid item xs={3}>
        <Avatar
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Soccerball.svg/500px-Soccerball.svg.png"
          sx={{ width: 60, height: 60 }}
        />
        <p>{navn[1]}</p>
      </Grid>
      <Grid item xs={3}>
        <Avatar
          src="https://www.ikea.com/no/no/images/products/smycka-kunstige-blomster-rose-rosa__0903523_pe596725_s5.jpg"
          sx={{ width: 60, height: 60 }}
        />
        <p>{navn[2]}</p>
      </Grid>
      <Grid item xs={3}>
        <Avatar
          src="https://evidensia.no/getmedia/ec099f6f-9572-49b6-85d2-2af26ec0baf8/kjope-valp-2"
          sx={{ width: 60, height: 60 }}
        />
        <p>{navn[3]}</p>
      </Grid>
    </Grid>
  );
};

export default PersonligAvatar;
