import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import CloseIcon from '@mui/icons-material/Close';

interface IHeader {
    productName: string;
    handleClose: () => void;
}

const Header = (props: IHeader): JSX.Element => {

    const { productName, handleClose } = props;

    return (
        <Modal.Header>
            <Modal.Title>
                Edit product
                <span className='product_name'>{productName}</span>
            </Modal.Title>
            <Button variant="light" onClick={handleClose}>
                <CloseIcon />
            </Button>
        </Modal.Header>

    );
}

export default Header;