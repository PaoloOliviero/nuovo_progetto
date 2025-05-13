import { Container, Row, Col } from "react-bootstrap";

const MyFooter = () => {
  return (
    <footer className="bg-dark text-light py-3">
      <Container fluid>
        <Row>
          <Col md={12} className="text-md-end">
            <a href="#" className="text-light mx-2">
              Privacy
            </a>
            <a href="#" className="text-light mx-2">
              Termini
            </a>
            <a href="#" className="text-light mx-2">
              Contatti
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default MyFooter;
