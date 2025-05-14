import React, { Component } from "react";
import { Card } from "react-bootstrap";

class SingleBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false,
    };
  }

  toggleSelection = () => {
    this.setState({ selected: !this.state.selected }, () => {
      console.log("Stato selezionato:", this.state.selected);
    });
  };

  render() {
    const { book } = this.props;
    return (
      <Card
        style={{
          width: "18rem",
          border: this.state.selected ? "2px solid red" : "1px solid gray",
          cursor: "pointer",
        }}
        onClick={this.toggleSelection}
      >
        <Card.Img variant="top" src={book.img} alt={book.title} />
        <Card.Body>
          <Card.Title>{book.title}</Card.Title>
        </Card.Body>
      </Card>
    );
  }
}

export default SingleBook;
