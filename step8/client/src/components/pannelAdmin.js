import * as React from 'react';
import jwt from 'jwt-decode';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';

import TableAdds from './templateAdmin/tableAdds';
import TableEntreprise from './templateAdmin/tableEntreprise';
import TableUser from './templateAdmin/tableUser';
import {Link} from "react-router-dom";
import {Fab}from '@material-ui/core';
import {Add} from "@material-ui/icons";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import { DataContext } from "../data/dataContext";
import axios from "axios";

export default function PanelAdmin(props) {
  const {urlPostAdds}= React.useContext(DataContext);
  const {token} = props;
  const [open, setOpen]= React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    let adds = {
      title: data.get('title'),
      name_entreprise: data.get('entreprise'),
      type_contrat: data.get('type_contrat'),
      email: data.get('email'),
      description: data.get('description'),
      content: data.get('content'),
      location: data.get('location')
    }
    axios.post(urlPostAdds, adds).then(res => {
      console.log("post annonce", res);
    });
  };
  //const user = jwt(token);
  return (
    <Box sx={{ display: 'flex' }}>
       <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
            <Grid item xs={12}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                  <TableUser />
                  <Link to="/signUp" style={{ textDecoration: "none" }}>
                    <Fab color="primary" aria-label="addProfils" style={{marginLeft:"90%", marginTop:"1%"}}>
                      <Add />
                    </Fab>
                  </Link>
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                 < TableEntreprise/>
                 <Link to="/signUp" style={{ textDecoration: "none" }}>
                    <Fab color="primary" aria-label="addProfils" style={{marginLeft:"90%", marginTop:"1%"}}>
                      <Add />
                    </Fab>
                  </Link>
                </Paper>
              </Grid>
              <Grid item xs={12}>
                  <TableAdds />
                    <Fab color="primary" aria-label="addProfils" style={{marginLeft:"90%", marginTop:"1%"}}onClick={handleClickOpen}>
                      <Add />
                    </Fab>
              </Grid>
            </Grid>
          </Container>
          <Dialog onClose={handleClose} open={open}>
      <DialogTitle>create Adds</DialogTitle>
        <DialogContent>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
        <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
                <TextField
                  name="title"
                  required
                  fullWidth
                  id="titre"
                  label="titre"
                  autoFocus
                />
              </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                  name="entreprise"
                  required
                  fullWidth
                  id="entreprise"
                  label="nom de l'entreprise"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="location"
                  required
                  fullWidth
                  id="location"
                  label="localisation"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="type_contrat"
                  required
                  fullWidth
                  id="type_contrat"
                  label="type de contrat"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="email"
                  name="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="description"
                  multiline
                  label="description"
                  name="description"

                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="content"
                  label="Contenu"
                  multiline
                  id="content"

                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Add
            </Button>
            </Box>
        </DialogContent>
      </Dialog>
    </Box>
  );
}