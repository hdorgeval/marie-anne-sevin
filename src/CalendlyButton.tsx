import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

export const CalendlyButton: React.FC = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const link = 'https://calendly.com/marie-anne-sevin/soiree-tantra-yourte?hide_gdpr_banner=1';

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Réserver ici
      </Button>

      <Modal show={show} onHide={handleClose} fullscreen={true}>
        <Modal.Body>
          <iframe src={link} style={{ width: '100%', height: '100%' }} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

CalendlyButton.displayName = 'CalendlyButton';
