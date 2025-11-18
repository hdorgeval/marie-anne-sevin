import { useState } from "react";
import { Button, Modal } from "react-bootstrap";

export interface CalendlyButtonOwnProps {
	link: string;
	title: string;
}
export const CalendlyButton: React.FC<CalendlyButtonOwnProps> = ({
	link,
	title,
}) => {
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<>
			<Button variant="primary fw-bolder w-100" onClick={handleShow}>
				{title}
			</Button>

			<Modal show={show} onHide={handleClose} fullscreen={true}>
				<Modal.Body>
					<iframe
						src={link}
						style={{ width: "100%", height: "100%" }}
						title={title}
					/>
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

CalendlyButton.displayName = "CalendlyButton";
