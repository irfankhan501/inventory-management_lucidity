import { useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import useInventoryManagementStore from "../../inventory-management.store";
import { Action, View } from '../../inventory-management.interface';
import EditModal from './edit-modal/';
import './grid.css';

interface IActions {
    id: string
}

const Actions = ({ id }: IActions): JSX.Element => {

    const [showEditModal, setShowEditModal] = useState(false);

    const { view, deleteProduct, disabledProductIds, setDisabledProductId, removeDisabledProductId } = useInventoryManagementStore((state) => ({
        view: state.view,
        deleteProduct: state.deleteProduct,
        disabledProductIds: state.disabledProductIds,
        setDisabledProductId: state.setDisabledProductId,
        removeDisabledProductId: state.removeDisabledProductId
    }));

    const onActionClick = (action: Action) => {
        switch (action) {
            case Action.Edit:
                setShowEditModal(true);
                break;
            case Action.View:
                if (disabledProductIds.includes(id))
                    removeDisabledProductId(id);
                else setDisabledProductId(id)
                break;
            case Action.Delete:
                deleteProduct(id);
                break;
        }
    }

    const disableIconCss = { color: '#808080', cursor: 'not-allowed', pointerEvents: 'none' };

    const getSx = (action: Action) => {
        if (view === View.User) return disableIconCss;
        switch (action) {
            case Action.Edit:
                if (disabledProductIds.includes(id)) return disableIconCss;
                return { color: '#377c22', cursor: 'pointer' };
            case Action.View:
                return { color: '#b98ec6', cursor: 'pointer' };
            case Action.Delete:
                return { color: '#eb3323', cursor: 'pointer' };
        }
    }

    return (
        <>
            <div className='actions'>
                <EditIcon sx={getSx(Action.Edit)} onClick={() => onActionClick(Action.Edit)} />
                {disabledProductIds.includes(id) ? <VisibilityOffIcon sx={getSx(Action.View)} onClick={() => onActionClick(Action.View)} /> : <VisibilityIcon sx={getSx(Action.View)} onClick={() => onActionClick(Action.View)} />}
                <DeleteIcon sx={getSx(Action.Delete)} onClick={() => onActionClick(Action.Delete)} />
            </div>
            {showEditModal ? <EditModal show={showEditModal} setShow={setShowEditModal} id={id} /> : null}
        </>

    );
};

export default Actions;
