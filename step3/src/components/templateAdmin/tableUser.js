import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { DataContext } from "../../data/dataContext";
import Typography from '@mui/material/Typography';


export default function TableUser() {
  const {apiDataUser}= React.useContext(DataContext);
  return (
    <React.Fragment>
      <Typography variant="subtitle1">list des utilisateurs</Typography>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Statut</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {apiDataUser.map((row) => (
            <TableRow key={row.id_client}>
              <TableCell>{row.id_client}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell>{row.admin===0?'client':'admin'}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
     
    </React.Fragment>
  );
}