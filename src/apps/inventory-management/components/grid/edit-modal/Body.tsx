import Modal from 'react-bootstrap/Modal';
import { IProduct } from '../../../inventory-management.interface';
import { EDIT_COLUMNS_CONFIG } from './edit-column-config'
import Input from './Input';

interface IBody {
    setUpdatedProduct: React.Dispatch<React.SetStateAction<IProduct | undefined>>
}

const Body = ({ setUpdatedProduct }: IBody): JSX.Element => {

    const handleOnChange = (label: string, value: string | undefined) => {
        if (value)
            setUpdatedProduct((prev) => {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                const updatedProduct: any = { ...prev };
                updatedProduct[label.toLowerCase()] = value;
                return { ...updatedProduct };
            });
    };

    return (
        <Modal.Body>
            <div className="input_wrapper">
                {EDIT_COLUMNS_CONFIG.map((columnConfig) => {
                    return <Input {...columnConfig} handleOnChange={handleOnChange} />;
                })}
            </div>
        </Modal.Body>
    );
};

export default Body;