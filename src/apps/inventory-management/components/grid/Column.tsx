import TableCell from "@mui/material/TableCell";
import ColumnName from "./ColumnName";

interface IColumn {
  column: string;
}

const Column = ({ column }: IColumn): JSX.Element => {
  return (
    <TableCell>
      <ColumnName name={column} />
    </TableCell>
  );
};

export default Column;
