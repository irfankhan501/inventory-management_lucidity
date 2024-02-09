import Switch from '@mui/material/Switch';
import useInventoryManagementStore from "../../inventory-management.store";
import './toggle-view.css';

const ToggleView = (): JSX.Element => {

    const toggleView = useInventoryManagementStore((state) => state.toggleView);

    return (
        <div className='toggle_view'>
            <span>admin</span>
            <Switch
                onChange={toggleView}
                inputProps={{ 'aria-label': 'controlled' }}
            />
            <span>user</span>
        </div>
    );
};

export default ToggleView;
