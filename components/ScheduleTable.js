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

const ScheduleTable = ({ schedule }) => {
  return (
    <Box mt={4}>
      <Typography variant="h6">Divisão Semanal</Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Dia</TableCell>
              <TableCell>Grupos Musculares</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {schedule.map((day, index) => (
              <TableRow key={index}>
                <TableCell>{day.day}</TableCell>
                <TableCell>{day.groups.join(", ")}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default ScheduleTable;