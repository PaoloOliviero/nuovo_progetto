import React, { useState } from "react";
import { Alert, Container, Button } from "react-bootstrap";

const Welcome = () => {
  const [showAlert, setShowAlert] = useState(false); // Stato per gestire la visibilità dell'alert

  return (
    <Container className="mt-4 text-center">
      <Button variant="warning" onClick={() => setShowAlert(true)}>
        Allert
      </Button>

      {showAlert && (
        <Alert variant="danger" className="mt-3" onClose={() => setShowAlert(false)} dismissible>
          <Alert.Heading>Attenzioneeeeeeeee!</Alert.Heading>
          <p>Questo è un messaggio è di attenzione.</p>
        </Alert>
      )}
    </Container>
  );
};

export default Welcome;
