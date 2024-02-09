interface IInput {
    label: string;
    placeholder: string;
    handleOnChange: (label: string, value: string | undefined) => void;
}

const Input = (props: IInput): JSX.Element => {

    const { label, placeholder, handleOnChange } = props;


    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        handleOnChange(label, value)
    }

    return (
        <div className="input">
            <label htmlFor={label} className="form-label">{label}</label>
            <input className="form-control" id={label} placeholder={placeholder} onChange={onChange}></input>
        </div >
    );
}

export default Input;