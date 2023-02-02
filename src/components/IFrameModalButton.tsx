import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

export interface IFrameModalButtonOwnProps {
  link: string;
  variant: string;
  children?: React.ReactNode;
}
export const IFrameModalButton: React.FC<IFrameModalButtonOwnProps> = ({
  link,
  variant,
  children,
}) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant={`${variant}`} onClick={handleShow}>
        {children}
      </Button>

      <Modal show={show} onHide={handleClose} fullscreen={true}>
        <Modal.Body>
          <iframe src={link} style={{ width: '100%', height: '100%' }} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fermer
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

IFrameModalButton.displayName = 'IFrameModalButton';
