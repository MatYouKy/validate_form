import React from 'react';
const InputError = props => {
    const error = props.propsInputText.propsRegisterForm.propsApp.error[props.propsInputText.name]
    const info = props.propsInputText.propsRegisterForm.messages[props.propsInputText.name +"_incorrect"]

    return(
        <p>{error && info}</p>
    )
}   
export default InputError;