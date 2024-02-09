import useFetchInventoryItems from './use-fetch-inventory-items';
import Widgets from './components/widgets';
import Header from './components/header';
import Grid from './components/grid';
import './inventory-management.css';

const InventoryManagement = (): JSX.Element => {
    const { isLoading } = useFetchInventoryItems();

    if (isLoading) return <div>Loading...</div>

    return (
        <div className='inventory_management_container'>
            <Header />
            <div className='body_section'>
                <Widgets />
                <Grid />
            </div>  
        </div>
    );
};

export default InventoryManagement;
