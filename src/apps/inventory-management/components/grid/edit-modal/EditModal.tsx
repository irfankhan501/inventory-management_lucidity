import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import useInventoryManagementStore from '../../../inventory-management.store';
import { IProduct } from '../../../inventory-management.interface'
import Header from './header';
import Body from './Body';
import Footer from './Footer';
import './edit-modal.css'

interface IEditModal {
    show: boolean;
    setShow: React.Dispatch<React.SetStateAction<boolean>>;
    id: string;
}

const EditModal = (props: IEditModal): JSX.Element => {
    const { show, setShow } = props;

    const { products, updateProduct } = useInventoryManagementStore((state) => ({
        products: state.products,
        updateProduct: state.updateProduct
    }));

    const editProduct = products?.find((product) => product.name === props.id) || undefined;

    const [updatedProduct, setUpdatedProduct] = useState<IProduct | undefined>(editProduct)


    const handleClose = () => setShow(false);

    const handleOnSave = () => {
        if (updatedProduct) updateProduct(updatedProduct);
        handleClose();
    }

    return (
        <Modal show={show} onHide={handleClose} centered>
            <Header productName={editProduct?.name || ''} handleClose={handleClose} />
            <Body setUpdatedProduct={setUpdatedProduct} />
            <Footer handleClose={handleClose} handleOnSave={handleOnSave} />
        </Modal>
    );
}

export default EditModal;