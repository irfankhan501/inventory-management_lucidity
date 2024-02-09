import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

interface IFooter {
    handleClose: () => void;
    handleOnSave: () => void
}

const Footer = (props: IFooter): JSX.Element => {
    const { handleClose, handleOnSave } = props;

    return (
        <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Cancel
            </Button>
            <Button variant="primary" onClick={handleOnSave}>
                Save
            </Button>
        </Modal.Footer>

    );
}

export default Footer;