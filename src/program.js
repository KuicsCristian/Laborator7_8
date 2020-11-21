import React from "react";
import Activitate from "./activitate";

const Program = (props) => {
  const { activitati, sterg } = props;
  const lista = activitati.map((item) => (
    <Activitate
      id={item.id}
      ora={item.ora}
      titlu={item.titlu}
      loc={item.loc}
      descriere={item.descriere}
      sterge={sterg}
    />
  ));

  const stil = {
    h2: { textAlign: "center" }
  };

  return (
    <>
      <h2 className="mt-4" style={stil.h2}>
        Agenda
      </h2>
      <hr />
      <div>{lista}</div>
    </>
  );
};

export default Program;
