import React from "react";
import fantasyBooks from "../assets/Fantasy.json"; // Modifica il nome del file JSON!
import { Container, Row, Col, Card } from "react-bootstrap";

const AllTheBooks = () => {
  return (
    <Container className="mt-4">
      <Row>
        {fantasyBooks.map((book, index) => (
          <Col key={index} md={4} className="mb-4">
            <Card>
              <Card.Img variant="top" src={book.img} alt={book.title} />
              <Card.Body>
                <Card.Title>{book.title}</Card.Title>
                <Card.Text>{book.author}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default AllTheBooks;
