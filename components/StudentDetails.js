// File: components/StudentDetails.js
import React from "react";
import { Typography, Grid } from "@mui/material";

const StudentDetails = ({ details }) => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={6}>
        <Typography variant="h6" sx={{ color: "#1976d2", fontWeight: "bold" }}>Detalhes do Aluno</Typography>
        <Typography>Nome: {details.name}</Typography>
        <Typography>Idade: {details.age}</Typography>
        <Typography>Objetivo: {details.goal}</Typography>
      </Grid>
      <Grid item xs={12} md={6}>
        <Typography variant="h6" sx={{ color: "#1976d2", fontWeight: "bold" }}>Informações Físicas</Typography>
        <Typography>Peso: {details.weight}</Typography>
        <Typography>Altura: {details.height}</Typography>
        <Typography>Cintura: {details.waist}</Typography>
        <Typography>Coxa D: {details.rightThigh}</Typography>
        <Typography>Coxa E: {details.leftThigh}</Typography>
        <Typography>Braço D: {details.rightArm}</Typography>
        <Typography>Braço E: {details.leftArm}</Typography>
        <Typography>Panturrilha D: {details.rightCalf}</Typography>
        <Typography>Panturrilha E: {details.leftCalf}</Typography>
        <Typography>Tórax: {details.chest}</Typography>
      </Grid>
    </Grid>
  );
};

export default StudentDetails;