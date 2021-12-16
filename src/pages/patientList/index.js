import React from 'react'
import { Container, createStyles, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import PatientListLayout from '../../components/layouts/PatientListLayout';
import Button from '@mui/material/Button'
import CTitlePatientList from '../../shared/CTitlePatientList';
import { Box } from '@mui/system';
import { makeStyles } from '@mui/styles';
import { blue, red } from '@mui/material/colors';
import { StyledTableCell } from '../../shared/TablePatientList';
import { StyledTableCellGray } from '../../shared/TablePatientList';
import { StyledTableCellGreen } from '../../shared/TablePatientList';
import PatientImage from '../../shared/TablePatientList/components';
import { StyledTableCellName } from '../../shared/TablePatientList';


const patients = [
  {image : 'http://medic-app-react.next-item.com//content/user-40-2.jpg', name : 'Emma', id : '10022', age: '30', adress : '46 Pilgrim Avenue Chevy Chase, MD 20816', number : '0126596452', lasVisit : '5 Dec 2018', status : 'Pending', action : 'actions'},
  {image : 'http://medic-app-react.next-item.com//content/user-40-2.jpg', name : 'Emma', id : '10022', age: '30', adress : '46 Pilgrim Avenue Chevy Chase, MD 20816', number : '0126596452', lasVisit : '5 Dec 2018', status : 'Approved', action : 'actions'},
  {image : 'http://medic-app-react.next-item.com//content/user-40-2.jpg', name : 'Emma', id : '10022', age: '30', adress : '46 Pilgrim Avenue Chevy Chase, MD 20816', number : '0126596452', lasVisit : '5 Dec 2018', status : 'Pending', action : 'actions'},
  {image : 'http://medic-app-react.next-item.com//content/user-40-2.jpg', name : 'Emma', id : '10022', age: '30', adress : '46 Pilgrim Avenue Chevy Chase, MD 20816', number : '0126596452', lasVisit : '5 Dec 2018', status : 'Pending', action : 'actions'},
  {image : 'http://medic-app-react.next-item.com//content/user-40-2.jpg', name : 'Emma', id : '10022', age: '30', adress : '46 Pilgrim Avenue Chevy Chase, MD 20816', number : '0126596452', lasVisit : '5 Dec 2018', status : 'Approved', action : 'actions'},
  {image : 'http://medic-app-react.next-item.com//content/user-40-2.jpg', name : 'Emma', id : '10022', age: '30', adress : '46 Pilgrim Avenue Chevy Chase, MD 20816', number : '0126596452', lasVisit : '5 Dec 2018', status : 'Pending', action : 'actions'},
  {image : 'http://medic-app-react.next-item.com//content/user-40-2.jpg', name : 'Emma', id : '10022', age: '30', adress : '46 Pilgrim Avenue Chevy Chase, MD 20816', number : '0126596452', lasVisit : '5 Dec 2018', status : 'Pending', action : 'actions'},
  {image : 'http://medic-app-react.next-item.com//content/user-40-2.jpg', name : 'Emma', id : '10022', age: '30', adress : '46 Pilgrim Avenue Chevy Chase, MD 20816', number : '0126596452', lasVisit : '5 Dec 2018', status : 'Approved', action : 'actions'},
  {image : 'http://medic-app-react.next-item.com//content/user-40-2.jpg', name : 'Emma', id : '10022', age: '30', adress : '46 Pilgrim Avenue Chevy Chase, MD 20816', number : '0126596452', lasVisit : '5 Dec 2018', status : 'Pending', action : 'actions'},
  {image : 'http://medic-app-react.next-item.com//content/user-40-2.jpg', name : 'Emma', id : '10022', age: '30', adress : '46 Pilgrim Avenue Chevy Chase, MD 20816', number : '0126596452', lasVisit : '5 Dec 2018', status : 'Pending', action : 'actions'},
];

const styles = makeStyles({
    tablePatientA: {
      minWidth: 700,
    }
});

const stylesHeader = makeStyles({
  tablePatientB: {
    minWidth: 700,
  }
});

function PatientList(){

  const classesA = styles();
  const classesB = stylesHeader();
  return (
    <div>       
      <Container>  
        <p></p>  
        <CTitlePatientList text = "Lista de Pacientes"/>
        <p></p>
        <TableContainer>
          <Table classname = {classesA.tablePatientA} >
            <TableHead >
              <TableRow>
                <StyledTableCell>Foto</StyledTableCell> 
                <StyledTableCell>Nombre</StyledTableCell>
                <StyledTableCell>ID</StyledTableCell>
                <StyledTableCell>Edad</StyledTableCell>
                <StyledTableCell>Dirección</StyledTableCell>
                <StyledTableCell>Número</StyledTableCell>
                <StyledTableCell>Última visita</StyledTableCell>
                <StyledTableCell>Estado</StyledTableCell>
                <StyledTableCell align = "center">Acción</StyledTableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {patients.map(celda => (
                <TableRow >
                  <PatientImage margin={5} image = { celda.image } />
                  <StyledTableCellName>{celda.name}</StyledTableCellName>
                  <StyledTableCellGray>{celda.id}</StyledTableCellGray>
                  <StyledTableCellGray>{celda.age}</StyledTableCellGray>
                  <StyledTableCell>{celda.adress}</StyledTableCell>
                  <StyledTableCell>{celda.number}</StyledTableCell>
                  <StyledTableCellGray>{celda.lasVisit}</StyledTableCellGray>
                  <StyledTableCell>
                    <StyledTableCellGreen>
                      {celda.status}
                    </StyledTableCellGreen>
                  </StyledTableCell>
                  <StyledTableCell>{celda.action}</StyledTableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>          
      </Container>      
    </div>    
  );
}
export default PatientList;
