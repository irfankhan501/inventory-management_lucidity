import useFetchInventoryItems from './use-fetch-inventory-items';
import Widgets from './components/widgets';
import ToggleView from './components/toggle-view';
import Grid from './components/grid';
import './inventory-management.css';

const InventoryManagement = (): JSX.Element => {
    const { isLoading } = useFetchInventoryItems();

    if (isLoading) return <div>Loading...</div>

    return (
        <div className='inventory_management_container'>
            <ToggleView />
            <Widgets />
            <Grid />
        </div>
    );
};

export default InventoryManagement;
