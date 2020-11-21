import React from "react";
import Container from "react-bootstrap/Container";
import Program from "./program";

const lista = [
  {
    id: 1,
    ora: "10:00",
    titlu: "Întâlnire cu presa",
    loc: "Sala G114",
    descriere: "Nu este cazul"
  },
  {
    id: 2,
    ora: "11:00",
    titlu: "Bem cafea",
    loc: "Birou",
    descriere: "Bem cafea de calitate, cumparata de la Coffee Corner."
  }
];

export default function App() {
  const stergActivitate = () => 1;

  return (
    <Container>
      <Program activitati={lista} sterg={stergActivitate} />
    </Container>
  );
}
