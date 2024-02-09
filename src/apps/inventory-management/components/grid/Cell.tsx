import TableCell from "@mui/material/TableCell";
import { IProduct } from "../../inventory-management.interface";
import useInventoryManagementStore from "../../inventory-management.store";
import { ACTION_COLUMN } from "../../constants";
import Actions from "./Actions";

interface ICell {
  product: IProduct;
  column: string;
}

const Cell = (props: ICell): JSX.Element => {
  const disabledProductIds = useInventoryManagementStore(
    (state) => state.disabledProductIds
  );

  const { product, column } = props;
  return (
    <TableCell
      component="td"
      scope="row"
      sx={{
        opacity:
          column !== ACTION_COLUMN && disabledProductIds.includes(product.name)
            ? 0.5
            : 1,
      }}
    >
      {column === ACTION_COLUMN ? (
        <Actions id={product.name} />
      ) : (
        (product as any)[column]
      )}
    </TableCell>
  );
};

export default Cell;
