import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const Activitate = (props) => {
  const { ora, titlu, loc, descriere, sterge, id } = props;

  return (
    <>
      <h4>
        {ora} - {titlu}
      </h4>
      <Row>
        <Col sm={10}>
          <h6>Loc: {loc}</h6>
        </Col>
        <Col sm={2}>
          <Button variant="primary" onClick={(ev) => sterge(ev)} id={id}>
            Sterge
          </Button>
        </Col>
      </Row>
      <p>{descriere}</p>
      <hr />
    </>
  );
};

export default Activitate;
