import TableRow from "@mui/material/TableRow";
import { IProduct } from "../../inventory-management.interface";
import Cell from "./Cell";

interface IRow {
  columns: string[];
  product: IProduct;
}

const Row = (props: IRow): JSX.Element => {
  const { columns, product } = props;

  return (
    <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
      {columns.map((column) => (
        <Cell column={column} product={product} />
      ))}
    </TableRow>
  );
};

export default Row;
