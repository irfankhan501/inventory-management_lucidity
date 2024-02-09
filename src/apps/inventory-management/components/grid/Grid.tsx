import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import useInventoryManagementStore from '../../inventory-management.store';
import ColumnName from './ColumnName';
import Actions from './Actions';
import './grid.css';


const Grid = (): JSX.Element => {
    const { products, disabledProductIds } = useInventoryManagementStore(
        (state) => ({ products: state.products, disabledProductIds: state.disabledProductIds })
    );

    const columns = Object.keys(products?.[0] || {});

    columns.push('ACTION');

    return (
        <div className='grid'>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            {columns?.map((column) => (
                                <TableCell><ColumnName name={column} /></TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {products?.map((product, index) => (
                            <TableRow
                                key={`item.name-${index}`}
                                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                            >
                                {columns.map((column) => (
                                    <TableCell component="td" scope="row" sx={{ opacity: column !== 'ACTION' && disabledProductIds.includes(product.name) ? 0.5 : 1 }} >
                                        {column === 'ACTION' ? <Actions id={product.name} /> : (product as any)[column]}
                                    </TableCell>
                                ))}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer >
        </div>

    );
};

export default Grid