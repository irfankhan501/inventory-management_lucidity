import { useEffect, useState } from 'react';
import useInventoryManagementStore from '../../inventory-management.store';
import { IWidgetsData } from './widgets.interface';
import { getWidgetsConfig } from './widgets.config';
import { getWidgetsData } from './utils'
import Widget from './Widget';
import Title from './Title';
import './widgets.css';


const Widgets = (): JSX.Element => {
    const { products, disabledProductIds } = useInventoryManagementStore(
        (state) => ({
            products: state.products,
            disabledProductIds: state.disabledProductIds
        })
    );
    const [widgetsData, setWidgetsData] = useState<IWidgetsData | undefined>(
        undefined
    );

    useEffect(() => {
        if (products) {
            setWidgetsData(getWidgetsData(products, disabledProductIds));
        }
    }, [products, disabledProductIds]);

    if (!widgetsData) return <></>;

    return (
        <div className='widgets-wrapper'>
            <Title />
            <div className='widgets'>
                {getWidgetsConfig(widgetsData).map((widget, index) => (
                    <Widget key={index} {...widget} />
                ))}
            </div>

        </div>
    );
};

export default Widgets;
