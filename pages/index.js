// File: pages/index.js
import React from "react";
import { CssBaseline, Container, Box, Typography } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import theme from "/components/theme";
import ExerciseTable from "/components/ExerciseTable";
import StudentDetails from "/components/StudentDetails";

const exercises = [
  { day: "Segunda-feira", group: "Coxa", sequence: "C2", exercise: "Extensão de Joelhos", series: "4x10", isScheduled: true },
  { day: "Segunda-feira", group: "Coxa", sequence: "C2", exercise: "Flexão de Joelhos (Sentado/Vertical)", series: "4x10", isScheduled: true },
  { day: "Segunda-feira", group: "Coxa", sequence: "C3", exercise: "Leg Press 45°", series: "3x15", isScheduled: true },
  { day: "Segunda-feira", group: "Glúteo", sequence: "C4", exercise: "Adução de Quadril (Cabo/Polia)", series: "4x30", isScheduled: false },
  { day: "Terça-feira", group: "Peito", sequence: "A1", exercise: "Supino Reto Articulado", series: "3x10", isScheduled: true },
  { day: "Terça-feira", group: "Peito", sequence: "A2", exercise: "Crucifixo (Reto/Inclinado/Declinado)", series: "3x10", isScheduled: true },
  { day: "Terça-feira", group: "Tríceps", sequence: "A14", exercise: "Tríceps Pulley (Polia/Barra)", series: "4x10", isScheduled: true },
  { day: "Quarta-feira", group: "Costas", sequence: "B1", exercise: "Puxador Frente", series: "4x10", isScheduled: true },
  { day: "Quarta-feira", group: "Costas", sequence: "B2", exercise: "Remada (Sentada/Máquina)", series: "4x10", isScheduled: true },
  { day: "Quarta-feira", group: "Bíceps", sequence: "B5", exercise: "Rosca Direta Barra", series: "4x10", isScheduled: false },
  { day: "Quarta-feira", group: "Bíceps", sequence: "B7", exercise: "Rosca Martelo", series: "3x10", isScheduled: true },
  { day: "Quinta-feira", group: "Coxa", sequence: "C2", exercise: "Extensão de Joelhos", series: "4x10", isScheduled: true },
  { day: "Quinta-feira", group: "Glúteo", sequence: "C4", exercise: "Adução de Quadril (Cabo/Polia)", series: "4x30", isScheduled: false },
  { day: "Quinta-feira", group: "Panturrilha", sequence: "C6", exercise: "Flexão Plantar Sentado", series: "4x10", isScheduled: true },
  { day: "Sexta-feira", group: "Peito", sequence: "A1", exercise: "Supino Reto Articulado", series: "3x10", isScheduled: true },
  { day: "Sexta-feira", group: "Ombro", sequence: "A15", exercise: "Flexão de Ombros", series: "3x12", isScheduled: true },
  { day: "Sexta-feira", group: "Tríceps", sequence: "A14", exercise: "Tríceps Pulley (Polia/Barra)", series: "4x10", isScheduled: true },
];

const studentDetails = {
  name: "Paulo Romualdo",
  age: 29,
  goal: "Hipertrofia",
  weight: "98.4 kg",
  height: "1.80 m",
  waist: "82 cm",
  rightThigh: "51 cm",
  leftThigh: "52 cm",
  rightArm: "32 cm",
  leftArm: "31 cm",
  rightCalf: "N/A",
  leftCalf: "N/A",
  chest: "N/A",
};

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container>
        <Box sx={{ padding: 2 }}>
          <Typography variant="h4" align="center" gutterBottom sx={{ color: "#1976d2", fontWeight: "bold" }}>
            Plano de Treino Personalizado
          </Typography>
          <StudentDetails details={studentDetails} />
          <ExerciseTable exercises={exercises} />
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default App;
