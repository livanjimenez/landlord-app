import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';

const AddRenter = ({ rentData }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Tenant Name</TableCell>
            <TableCell>Rent Due Date</TableCell>
            <TableCell>Rent Paid</TableCell>
            <TableCell>Next Reminder</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rentData.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.tenantName}</TableCell>
              <TableCell>{row.rentDueDate}</TableCell>
              <TableCell>{row.rentPaid ? 'Yes' : 'No'}</TableCell>
              <TableCell>{row.nextReminder}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default AddRenter;
