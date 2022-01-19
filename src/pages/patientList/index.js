import React from 'react'
import { Container, Table, TableBody,TableContainer, TableHead, TableRow } from '@mui/material';
import CTitlePatientList from '../../shared/CTitlePatientList';
import { makeStyles } from '@mui/styles';

import { StyledButtonEdit, StyledButtonProfile, StyledTableCell } from '../../shared/TablePatientList';
import { StyledTableCellGray } from '../../shared/TablePatientList';
import { StyledTableCellGreen } from '../../shared/TablePatientList';
import { StyledButtonDelete } from '../../shared/TablePatientList';
import PatientImage from '../../shared/TablePatientList/components';
import { StyledTableCellName } from '../../shared/TablePatientList';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import LogoutIcon from '@mui/icons-material/Logout';
import ModeEditIcon from '@mui/icons-material/ModeEdit';

const patients = [
  {image : 'http://medic-app-react.next-item.com//content/user-40-1.jpg', name : 'Gonzalo', id : '10021', age: '30', adress : '46 Pilgrim  Chevy Chase, MD 20816', number : '0126596452', lasVisit : '5 Dec 2020', status : 'Pending', action : 'actions'},
  {image : 'http://medic-app-react.next-item.com//content/user-40-2.jpg', name : 'Mar', id : '10022', age: '18', adress : 'Avenue Avenue Chevy Chase, MD 20412', number : '0125252425', lasVisit : '15 Dec 2020', status : 'Approved', action : 'actions'},
  {image : 'http://medic-app-react.next-item.com//content/user-40-3.jpg', name : 'Juana', id : '10023', age: '24', adress : ' Pilgrim Avenue Chevy Chase, MD 21540', number : '01524525252', lasVisit : '5 Dec 2020', status : 'Pending', action : 'actions'},
  {image : 'http://medic-app-react.next-item.com//content/user-40-4.jpg', name : 'Fer', id : '10024', age: '23', adress : ' Pilgrim Avenue Chevy Chase, MD 28975', number : '0122542482', lasVisit : '5 Dec 2020', status : 'Pending', action : 'actions'},
  {image : 'http://medic-app-react.next-item.com//content/user-40-5.jpg', name : 'Victor', id : '10025', age: '27', adress : '30 Pilgrim Avenue Chevy Chase, MD 23456', number : '0857946452', lasVisit : '7 Ene 2021', status : 'Approved', action : 'actions'},
  {image : 'http://medic-app-react.next-item.com//content/user-40-6.jpg', name : 'Ramona', id : '10026', age: '23', adress : 'A-2 Pilgrim Avenue Chevy Chase, MD 20014', number : '0196877452', lasVisit : '18 Ene 2021', status : 'Pending', action : 'actions'},
  {image : 'http://medic-app-react.next-item.com//content/user-40-7.jpg', name : 'Marisol', id : '10027', age: '23', adress : ' Pilgrim Avenue Chevy Chase, MD 20031', number : '01288796452', lasVisit : '5 Feb 2021', status : 'Pending', action : 'actions'},
  {image : 'http://medic-app-react.next-item.com//content/user-40-8.jpg', name : 'Mirto', id : '10028', age: '31', adress : ' Pilgrim Avenue Chevy Chase, MD 25887', number : '019788652', lasVisit : '30 Set 2021', status : 'Approved', action : 'actions'},
  {image : 'http://medic-app-react.next-item.com//content/user-40-9.jpg', name : 'Mac', id : '10029', age: '19', adress : ' Pilgrim Avenue Chevy Chase, MD 25555', number : '01889766452', lasVisit : '26 Dec 2021', status : 'Pending', action : 'actions'},
  {image : 'http://medic-app-react.next-item.com//content/user-40-10.jpg', name : 'Hullco', id : '10030', age: '26', adress : ' Pilgrim Avenue Chevy Chase, MD 26667', number : '089766452', lasVisit : '15 Ene 2022', status : 'Pending', action : 'actions'},
];

const styles = makeStyles({
    tablePatientA: {
      minWidth: 700,
    },
});


function PatientList(){

  const classesA = styles();
  return (
    <div>       
      <Container>  
        
        <CTitlePatientList text = "Lista Pacientes"/>
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
                  <StyledTableCell>
                    
                    <StyledButtonProfile>
                      <IconButton>
                        <LogoutIcon/>
                      </IconButton>
                    </StyledButtonProfile>
                    
                    <StyledButtonEdit>
                      <IconButton>
                        <ModeEditIcon/>
                      </IconButton>
                    </StyledButtonEdit>                     
                    
                    <StyledButtonDelete>
                      <IconButton>
                        <DeleteIcon/>
                      </IconButton>
                    </StyledButtonDelete>

                  </StyledTableCell>
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
