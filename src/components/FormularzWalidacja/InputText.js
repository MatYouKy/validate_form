import React from 'react';
import './InputText.css';
import InputError from './InputError'
const InputText = props => {
    const propsRegisterForm = props.propsRegisterForm;
    const name = props.name;
    return(
        <div className="input_value_area">
            <label htmlFor={props.id}>{props.label}
                <input className="input_value"
                    type={props.type}
                    id={["input_"+ name]}
                    name={name}
                    value={propsRegisterForm.propsApp[name]}
                    onChange={propsRegisterForm.onchange}
                />
            </label>
            <InputError
                message={propsRegisterForm.messages[name + "_incorrect"]}ge
                propsInputText={props}
            />      
            
        </div>
    );
}
export default InputText;