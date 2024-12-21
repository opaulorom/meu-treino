// File: components/ExerciseTable.js
import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Box,
} from "@mui/material";

const ExerciseTable = ({ exercises }) => {
  return (
    <Box mt={4}>
      <Typography variant="h6" sx={{ color: "#1976d2", fontWeight: "bold" }}>
        Lista de Exercícios por Dia
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ color: "#1976d2", fontWeight: "bold" }}>Dia da Semana e Exercício</TableCell>
              <TableCell sx={{ color: "#1976d2", fontWeight: "bold" }}>Grupo Muscular</TableCell>
              <TableCell sx={{ color: "#1976d2", fontWeight: "bold" }}>Sequência</TableCell>
              <TableCell sx={{ color: "#1976d2", fontWeight: "bold" }}>Séries</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {exercises.map((exercise, index) => (
              <TableRow
                key={index}
                style={{
                  backgroundColor: exercise.isScheduled ? "#e3f2fd" : "inherit",
                }}
              >
                <TableCell>{`${exercise.day}: ${exercise.exercise}`}</TableCell>
                <TableCell>{exercise.group}</TableCell>
                <TableCell>{exercise.sequence}</TableCell>
                <TableCell>{exercise.series}</TableCell>
                <TableCell>{exercise.interval}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default ExerciseTable;