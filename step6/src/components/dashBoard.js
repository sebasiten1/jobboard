import * as React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Container from '@mui/material/Container';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Subscribe from './subscribe.js';
import LogIn from './logIn.js';

export default function DashboardContent() {
  return (
      <div>
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <Toolbar
                sx={{
                pr: '24px', // keep right padding when drawer closed
                }}
            >
                <Typography
                component="h1"
                variant="h6"
                color="inherit"
                noWrap
                sx={{ flexGrow: 1 }}
                >
                Job-Board
                </Typography>
                <IconButton color="inherit">
                <Badge badgeContent={4} color="secondary">
                    <NotificationsIcon />
                </Badge>
                </IconButton>
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
                height: '100vh',
                overflow: 'auto',
            }}
            >
            <Toolbar />
            <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Router>
                <Switch>
                <Route exact path="/">

                    <LogIn/>
                </Route>
                <Route path="/signUp">
                <Subscribe/>
                </Route>
                <Route path="/modificateProfils">
                </Route>
                <Route path="/Admin">
                </Route>
                <Route path="/Entreprise">
                </Route>
                </Switch>
            </Router>
            </Container>
            </Box>
      </div>

  );
}

