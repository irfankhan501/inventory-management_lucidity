import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import useInventoryManagementStore from "../../inventory-management.store";
import { ACTION_COLUMN } from "../../constants";
import Column from "./Column";
import Row from "./Row";
import "./grid.css";

const Grid = (): JSX.Element => {
  const { products } = useInventoryManagementStore((state) => ({
    products: state.products,
  }));

  const columns = Object.keys(products?.[0] || {});

  columns.push(ACTION_COLUMN);

  return (
    <div className="grid">
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              {columns?.map((column, index) => (
                <Column key={`${column}-${index}`} column={column} />
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {products?.map((product, index) => (
              <Row
                key={`${product.name}-${index}`}
                columns={columns}
                product={product}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Grid;
