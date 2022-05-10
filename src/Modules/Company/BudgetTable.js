import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import { Container } from '@material-ui/core';

const useStyles = makeStyles((theme)=>({
    Title:{
        color: '#3D8ED7',
        fontSize:'larger', 
        border:'3px solid #fff',
        background:'#f7f7f7',
        margin:'3px', 
        fontFamily: "'Poppins', sans-serif"

    },
    data:{
      border:'3px solid #fff',
      background:'#f7f7f7',
     
    },
    MainWrapper:{
        padding:'4rem 3rem',
        [theme.breakpoints.down('sm')]: {
          padding:'1rem 1rem',

        },
    },
    tableHeading:{
      border:'3px solid #fff',
      background:'#f7f7f7',
      fontFamily: "'Poppins', sans-serif"

    },
    table:{
     boxShadow:'none',
     border:'none',
    }
  
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Quick start', <AddCircleIcon />, <AddCircleIcon />, <AddCircleIcon />),
  createData('Fixed budget', <RemoveCircleIcon />, <RemoveCircleIcon />, <RemoveCircleIcon />,),
  createData('Full team engagement', <RemoveCircleIcon />, <AddCircleIcon />, <RemoveCircleIcon />),
  createData('Direct control over the team', <RemoveCircleIcon />, <AddCircleIcon />, <AddCircleIcon />),
  createData('Flexible management', <RemoveCircleIcon/>, <AddCircleIcon/>, <AddCircleIcon />),
  createData('Fixed deadlines', <RemoveCircleIcon/>, <RemoveCircleIcon/>, <RemoveCircleIcon/>,),
  createData('Cost-efficient search and recruitment', <RemoveCircleIcon/>, <AddCircleIcon/>, <AddCircleIcon/>,),
  createData('Suitable for continuous development / maintenance projects', <AddCircleIcon/>, <AddCircleIcon/>, <AddCircleIcon/>),
  createData('Easy to scale the team', <AddCircleIcon/>, <AddCircleIcon/>, <AddCircleIcon/>,),
  createData('Access to our proprietary code quality tools', <AddCircleIcon/>, <AddCircleIcon/>, <AddCircleIcon/>),
  
];

export default function BudgetTable() {
  const classes = useStyles();

  return (
      <Container maxWidth='lg' className={classes.MainWrapper}>
    <TableContainer>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell style={{background:'#fafafa',border:'none' ,padding:'3px'}}></TableCell>
            <TableCell align="right" className={classes.Title}>Time and Material</TableCell>
            <TableCell align="right" className={classes.Title}>Dedicated Team</TableCell>
            <TableCell align="right" className={classes.Title}> Staff Augmentation</TableCell>
         
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row" className={classes.tableHeading}>
                {row.name}
              </TableCell>
              <TableCell align="right" className={classes.data}>{row.calories}</TableCell>
              <TableCell align="right"  className={classes.data}>{row.fat}</TableCell>
              <TableCell align="right"  className={classes.data}>{row.carbs}</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Container>
  );
}
