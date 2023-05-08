import React, { useEffect, useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


export const App = () => {
  const[supplier,setSupplier]=useState([])
  useEffect(()=>{
    fetch('https://api.instantwebtools.net/v1/passenger?')
    .then((res)=>res.json())
    .then((data)=>{
      setSupplier(data.data)
    
    })
  },[])
  return (
    <TableContainer  component={Paper}>
      <Table sx={{ minWidth: "100%" }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Trips</TableCell>
        
          </TableRow>
        </TableHead>
        <TableBody>
          {supplier.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">{row.trips}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default App