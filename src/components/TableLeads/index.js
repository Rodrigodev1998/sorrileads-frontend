import * as React from 'react';
import './style.css';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import { useState } from 'react';
import { useEffect } from 'react';
import { ErrorOutline } from '@mui/icons-material';
import axios from 'axios';
import { getLeads } from '../../service/leads';
import { async } from 'q';

function createData(name, email, phone, especialidadeInteressada) {
  return { name, email, phone, especialidadeInteressada };
}

const initialRows = [
  createData('Rodrigo', 'rodrigo@gmail.com', '(73)98232-8002', 'Botox'),
  createData('Carlos', 'carlos@gmail.com', '(73)98232-0000', 'Aparelho'),
  createData('joaquim', 'joaquim@gmail.com', '(73)1234-8002', 'Limpeza'),
  createData('Paulo', 'paulo@gmail.com', '(73)98232-4545', 'Botox'),
  createData('Jaqueline', 'jaqui@gmail.com', '(73)323323-8002', 'Botox'),
];

const NoDataMessage = () => (
  <div style={{ textAlign: 'center', marginTop: '20px', padding: 32 }}>
  <ErrorOutline style={{ fontSize: '48px', color: '#f00' }} />
  <Typography variant="h6" color="textSecondary" style={{ marginTop: '10px' }}>
    Não existe lead cadastrado.
  </Typography>
</div>
);

export default function TableLeads({ searchData }) {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://ec2-34-227-66-235.compute-1.amazonaws.com:8080/sorrileads/dashboard/a179f8ef-3f6a-417d-b56b-55af685d304f/leads');
        
        if (!response.ok) {
          throw new Error('Erro ao obter os dados da API');
        }

        const data = await response.json();
        console.log(response);
        
        const filteredRows = data.filter((row) =>
          Object.values(row).some(
            (value) => value.toLowerCase().includes(searchData.toLowerCase())
          )
        );

        setRows(filteredRows);
      } catch (error) {
        console.error('Error ao obter os dados da API:', error.message);
      }
    };

    fetchData();
  }, [searchData]);

  return (
    <>
    {rows.length === 0 ? (
      <NoDataMessage />
      ) : (
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
              <TableCell align="center">{row.especialidadeInteressada}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        </Table>
        </TableContainer> )}
        </>
  );
}
