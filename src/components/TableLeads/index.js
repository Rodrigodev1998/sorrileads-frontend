import * as React from 'react';
import './style.css';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { useState } from 'react';
import { useEffect } from 'react';

function createData(name, email, phone, treatment) {
  return { name, email, phone, treatment };
}

const initialRows = [
  createData('Rodrigo', 'rodrigo@gmail.com', '(73)98232-8002', 'Botox'),
  createData('Carlos', 'carlos@gmail.com', '(73)98232-0000', 'Aparelho'),
  createData('joaquim', 'joaquim@gmail.com', '(73)1234-8002', 'Limpeza'),
  createData('Paulo', 'paulo@gmail.com', '(73)98232-4545', 'Botox'),
  createData('Jaqueline', 'jaqui@gmail.com', '(73)323323-8002', 'Botox'),
];

export default function TableLeads({ searchData }) {
  const [rows, setRows] = useState(initialRows);

  
  useEffect(() => {
    const filteredRows = initialRows.filter((row) =>
      Object.values(row).some(
        (value) => value.toLowerCase().includes(searchData.toLowerCase())
      )
    );

    setRows(filteredRows);
  }, [searchData]);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead >
          <TableRow >
            <TableCell sx={{fontWeight: 'bold', color: '#425FA8' }} >Nome</TableCell>
            <TableCell align="center" sx={{fontWeight: 'bold', color: '#425FA8' }} >Email</TableCell>
            <TableCell align="center" sx={{fontWeight: 'bold', color: '#425FA8' }}>Telefone</TableCell>
            <TableCell align="center" sx={{fontWeight: 'bold', color: '#425FA8' }}>Tratamento</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th ': { border: 0 }, }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="center">{row.email}</TableCell>
              <TableCell align="center">{row.phone}</TableCell>
              <TableCell align="center">{row.treatment}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
