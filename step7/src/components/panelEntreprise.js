import React, {useState} from 'react';
import Button from '@mui/material/Button';
/*import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';*/



import axios from 'axios';

/*const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));*/

export default function PanelEntreprise() {
    const [user, setUser]=useState([{}]);
    const GetUSers = async()=>{
      await axios.get(`http://10.137.214.102:9000/user`)
        .then(res => {
          console.warn("Res", res.data)
          setUser(res.data);

          
        })
    };
    console.warn("users", user);

  return (
    <>
      <h1>Panel entreprise</h1>
      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
        onClick={()=>GetUSers()}
      >
        charge user
      </Button>
    </>
  );
}