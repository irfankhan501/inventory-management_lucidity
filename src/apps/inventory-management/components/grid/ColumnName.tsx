interface IColumnName {
    name: string
}

const ColumnName = ({ name }: IColumnName): JSX.Element => {
    return (
        <div className="column_name">
            {name.charAt(0).toUpperCase() + name.slice(1)}
        </div>
    );
};

export default ColumnName;
