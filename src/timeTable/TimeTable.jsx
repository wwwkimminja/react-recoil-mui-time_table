import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import React from 'react'

const hourData = Array.from({length:11},(i,j)=>j+9)
console.log(hourData)

function TimeTable() {
  return (
    <div>
      <TableContainer>
        <Typography>Time Table</Typography>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="center" width={100}>Time</TableCell>
              <TableCell align="center" width={100}>Mon</TableCell>
              <TableCell align="center" width={100}>Tue</TableCell>
              <TableCell align="center" width={100}>Wen</TableCell>
              <TableCell align="center" width={100}>Thu</TableCell>
              <TableCell align="center" width={100}>Fri</TableCell>
            </TableRow>

          </TableHead>
          <TableBody>
            {hourData.map((time,index)=>(
             <TableRow key={index}>
              <TableCell align="center" width={100}>{`${time}:00 - ${time+1}:00`}</TableCell>
             </TableRow>
            )
            )}
         
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default TimeTable