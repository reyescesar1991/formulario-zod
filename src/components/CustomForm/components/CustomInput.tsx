import { Control, Controller, FieldError } from "react-hook-form";
import './CustomInput.css';
import { FormValues } from "../models/form.model";

interface Props{

    name: keyof FormValues;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    control: Control<FormValues>;
    label: string;
    type?: string;
    error?: FieldError;
}

const InputForm = ({name, control, label, type, error} : Props) => {

    return (
        <div className="form-group">
        <label htmlFor={name}>{label}</label>
        <Controller 
            name={name} 
            control={control} render={(
                {field}
            ) => 
                <input id={name} type={type} {...field} className={`form-control ${error ? "is-invalid" : ""}`}></input>}/>
            {error && <p className="error">{error.message}</p>}
        </div>
    )
}

export default InputForm;