import * as React from 'react';
import { DataContext } from "../data/dataContext";
//refonte du code
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import {Button}from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import TextField from '@mui/material/TextField';
import validator from 'validator';
import axios from "axios";


const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function TableAdds() {

  const {apiDataAdds, urlPostMail}= React.useContext(DataContext);
  const [open, setOpen] = React.useState(false);
  const [mail, setMail]= React.useState({
    client:undefined,
    client_name:undefined,
    entreprise:undefined,
    title:undefined,
    content:undefined,
    cv:null
  });
  const [expanded, setExpanded] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
  };
  const handleChange = () => {
    setExpanded(!expanded)
  };

  const handleChangeMail =(event)=>{
    let change = {...mail};
    if(event.target.name === "client" ){
      change.client = event.target.value;
    }else if(event.target.name === "client_name"){
      change.client_name = event.target.value;
    }else if(event.target.name === "entreprise"){
      change.entreprise = event.target.value;
    }else if(event.target.name === "title"){
      change.title = event.target.value;
    }else if(event.target.name === "content"){
      change.content = event.target.value;
    }else if(event.target.name === "cv"){
      change.cv = event.target.value;
    }
    setMail(change)

  }
 const handleSubmit = (event) => {
    event.preventDefault();
     if(validator.isEmail(mail.client) === false || validator.isEmail(mail.entreprise) === false || mail.client_name === undefined || mail.title === undefined || mail.content === undefined || mail.cv === undefined){
      alert("mauvais format de champs veuillez renseigner tout les champs !");
    }else{
      console.log("send")
        axios.post(urlPostMail, mail).then(res => {
          console.log("send mail", res);
        });
    }

  };
  return (
    <React.Fragment>
      <Grid container spacing={1}>
        {apiDataAdds.map((row) => (
             
            <Grid item xs={6}>
              <Card  key={row.id_annonce}>
                <CardHeader
                  action={
                    <Button onClick={handleClickOpen}>
                      <SendIcon />
                    </Button>
                  }
                  title={row.title}
                />
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                  {row.description}
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  <Button >
                  <FavoriteIcon/>
                  </Button>
                  <ExpandMore
                    expand={expanded}
                    onClick={()=>handleChange()}
                    aria-expanded={expanded}
                    aria-label="learn more"
                  >
                    <ExpandMoreIcon />
                  </ExpandMore>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                  <CardContent>
                  <Typography paragraph>
                      "Localisation:"{row.location}
                    </Typography>
                    <Typography paragraph>
                      "Nom de l'entreprise: "{row.name_entreprise}
                    </Typography>
                    <Typography paragraph>
                      "email de contact: "{row.email}
                    </Typography>
                    <Typography paragraph>"Type de contrat: "{row.contrat_type}</Typography>
                    <Typography paragraph>
                      {row.content}
                    </Typography>
                  </CardContent>
                </Collapse>
              </Card>
            </Grid>       
        ))}
      </Grid>
      <Dialog onClose={handleClose} open={open}>
      <DialogTitle>send Email</DialogTitle>
        <DialogContent>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                name="client"
                required
                fullWidth
                id="Name1"
                value={mail.client}
                onChange={(event)=>{handleChangeMail(event)}}
                label="email client"
                autoFocus
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                required
                fullWidth
                id="email1"
                value={mail.client_name}
                onChange={(event)=>{handleChangeMail(event)}}
                label="Nom du client"
                name="client_name"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                required
                fullWidth
                name="entreprise"
                value={mail.entreprise}
                onChange={(event)=>{handleChangeMail(event)}}
                label="Email entreprise"
                id="password1"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                name="title"
                required
                fullWidth
                id="Name"
                value={mail.title}
                onChange={(event)=>{handleChangeMail(event)}}
                label="titre de l'annonce"
                autoFocus
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                multiline
                label="Message"
                name="content"
                value={mail.content}
                onChange={(event)=>{handleChangeMail(event)}}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="file"
                name="cv"
                type="file"
                value={mail.cv}
                onChange={(event)=>{handleChangeMail(event)}}
              />
            </Grid>
            <Button onClick={handleSubmit}>Send</Button>
          </Grid>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}