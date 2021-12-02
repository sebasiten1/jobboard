import React, {useContext} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {Link} from "react-router-dom";
import validator from 'validator';
import { DataContext } from "../data/dataContext";
import axios from "axios";

const theme = createTheme();

export default function Subscribe() {
  const {urlPostUser, urlPostEntreprise} = useContext(DataContext);
  const subClient = React.useState({
    name: "",
    email: "",
    password: ""
  });
  const subEntreprise = React.useState({
    name: undefined,
    location:undefined,
    email:undefined,
    password:undefined
  });
  const [checked, setChecked] = React.useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    if(checked===true){
      let change = {...subEntreprise};
      change.name = data.get('Name');
      change.location = data.get('location');
      change.email = data.get('email');
      change.password = data.get('password');
      if(change.name === undefined || change.location === undefined ||  validator.isEmail(change.email) === false || change.password === undefined){
        alert("mauvais format de champs veuillez renseigner tout les champs !");
      }else{
          axios.post(urlPostEntreprise, change).then(res => {
            console.log("post des donnée", res);
          });
      }
    }else{
      let change = {...subClient};
      change.name = data.get('Name');
      change.email = data.get('email');
      change.password = data.get('password');
      if(change.name === undefined ||  validator.isEmail(change.email) === false || change.password === undefined){
        alert("mauvais format de champs veuillez renseigner tout les champs !");
      }else{
          axios.post(urlPostUser, change).then(res => {
            console.log("inscription", res);
          });
      }
    }

  }; 
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="name"
                  name="Name"
                  required
                  fullWidth
                  id="Name"
                  label="Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
              <Checkbox
                checked={checked}
                onChange={handleChange}
                inputProps={{ 'aria-label': 'controlled' }}
              />Compte Entreprise
              
              </Grid>
              <Grid item xs={12}sm={6}>
                <TextField
                  disabled={!checked}
                  required
                  fullWidth
                  name="location"
                  label="Location"
                  id="location"
                  
                />
              </Grid>
            </Grid>
            <Link to="/">
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            </Link>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to="/">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}