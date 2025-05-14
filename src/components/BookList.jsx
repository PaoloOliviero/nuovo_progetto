import SingleBook from "./SingleBook";
import { Container, Row, Col } from "react-bootstrap";

const BookList = ({ books }) => {
  return (
    <Container>
      <Row className="justify-content-center">
        {books.map((book) => (
          <Col key={book.asin} md={4} className="mb-3">
            <SingleBook book={book} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default BookList;
