import  React, {useState} from 'react';
import jwt from 'jwt-decode';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from "react-router-dom";
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {Button}from '@mui/material';


//import du visuel du site
import Subscribe from './subscribe.js';
import LogIn from './logIn.js';
import Adds from './adds.js';
import PanelAdmin from './pannelAdmin.js';
import PanelEntreprise from './panelEntreprise.js';
import CreateAdds from './templateAdmin/createAdds.js';

export default function DashboardContent() {
    const [token, setToken]= useState(null);
    const redirect = (token) =>{
        let user = jwt(token);
        if(user.type === "admin"){
            return(
                <Redirect to="/Admin"/>)
        }else if(user.type === "entreprise"){
            return(
                <Redirect to="/Entreprise"/>)
        }else if(user.type === "client"){
            return(
                <Redirect to="/jobBoard"/>)
        }
    }
    const handleSubmit = (event) => {
        event.preventDefault();
         alert('deconnexion !!!')
      };
  return (
      <div style={{margin:0, padding:0}}>
        <Box sx={{position:"fixed" }} style={{backgroundColor: '#1565c0', width:"100%"}}>
            <CssBaseline />
            <Toolbar  >
                <Typography
                component="h1"
                variant="h6"
                color="white"
                noWrap
                sx={{ flexGrow: 1 }}
                >
                Job-Board
                </Typography>
                <Button
                type="submit"
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={handleSubmit}
                
              > logOut </Button>
                

            </Toolbar>
        </Box>
        <Box
            component="main"
            sx={{
                backgroundColor: (theme) =>
                theme.palette.mode === 'light'
                    ? theme.palette.grey[100]
                    : theme.palette.grey[900],
                flexGrow: 1,
                height: '100%',
                overflow: 'auto',
            }}
            >
            <Toolbar />
            <Container maxWidth="lg" sx={{ height: '100vh' }}>
            <Router>
                <Switch>
                <Route exact path="/">
                    {token === null ? <LogIn  setToken ={setToken}/>:redirect(token)}
                </Route>
                <Route path="/signUp">
                <Subscribe/>
                </Route>
                <Route path="/jobBoard">
                    <Adds token={token}/>
                </Route>
                <Route path="/modificateProfils">
                </Route>
                <Route path="/Admin">
                    <PanelAdmin token={token}/>
                </Route>
                <Route path="/Entreprise">
                    <PanelEntreprise token={token}/>
                </Route>
                <Route path="/Admin/createAnnonce">
                    <CreateAdds/>
                </Route>
                </Switch>
            </Router>
            </Container>
        </Box>
      </div>

  );
}

