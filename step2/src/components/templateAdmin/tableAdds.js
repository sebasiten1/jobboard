import * as React from 'react';
import { DataContext } from "../../data/dataContext";
//refonte du code
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import {Button}from '@mui/material';
import {Link} from "react-router-dom";
import {Fab}from '@material-ui/core';

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

  const {apiDataAdds}= React.useContext(DataContext);
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (row) => {
    row.checked = !row.checked 
  };

  const isChecked = (row) => {
    return row.checked === false
  }
  return (
    <React.Fragment>
      <Typography variant="subtitle1">list des Annonces</Typography>
      <Grid container spacing={1}>
        {apiDataAdds.map((row) => (
             
            <Grid item xs={6}>
              <Card sx={{ maxWidth: 345 }} key={row.id_annonce}>
                <CardHeader
                  action={
                    <IconButton aria-label="settings">
                      <MoreVertIcon />
                    </IconButton>
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
                    Delete
                  </Button>
                  <ExpandMore
                    expand={isChecked(row)}
                    onClick={()=>handleChange(row)}
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
    </React.Fragment>
  );
}