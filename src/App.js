import logo from './logo.svg';
import './App.css';
import {Container, AppBar, Typography, Grow, Grid, Button, Card, CardHeader, CardMedia, CardContent, CardFooter, CardImage} from './../node_modules/@material-ui/core';
import { shadows } from '@material-ui/system';
import thumbnail1 from './Images/thumbnail1.jpg';
import thumbnail2 from './Images/thumbnail2.png';
import thumbnail3 from './Images/thumbnail3.jpg';
import thumbnail4 from './Images/thumbnail4.jpg';

function App() {
  return (
    <Container maxidth="lg">
      {/* Navbar */}
        <Typography variant="h4" align="left">Deckbuilder</Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Introductie naar deckbuilder
        </Typography>
        <Grid container justify="left" alignItems="stretch" spacing="3">
          <Grid item xs={3} >
            <Button href="/deck-builder/" variant="contained" color="primary">Go To Deckbuilder</Button>
          </Grid>
        </Grid>
      <Grow in>
        <Grid container justify="space-betweeen" alignItems="stretch" spacing={3}>
          <Grid item xs={12} sm={6} >
            <Card boxShadows={3}>
              <CardHeader title="Tierlist"  />
              <CardMedia 
                component="img"
                alt="thumbnail"
                height="250"
                image={thumbnail1}
                title="thumbnail"
              />
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} >
            <Card boxShadows={3}>
              <CardHeader title="Top Decks"  />
              <CardMedia 
                component="img"
                alt="thumbnail"
                height="250"
                image={thumbnail2}
                title="thumbnail"
              />
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} >
            <Card boxShadows={3}>
              <CardHeader title="Farming & Events"  />
              <CardMedia 
                component="img"
                alt="thumbnail"
                height="250"
                image={thumbnail3}
                title="thumbnail"
              />
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} >
            <Card boxShadows={3}>
              <CardHeader title="Leaks & Updates"  />
              <CardMedia 
                component="img"
                alt="thumbnail"
                height="250"
                image={thumbnail4}
                title="thumbnail"
              />
            </Card>
          </Grid>
        </Grid>
      </Grow>
      <Typography variant="h4" align="left">News</Typography>
      <Typography variant="body2" color="textSecondary" component="p">
        Nieuws Items
      </Typography>
    </Container>

  );
}

export default App;
