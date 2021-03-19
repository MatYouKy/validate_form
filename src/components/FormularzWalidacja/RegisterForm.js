import React from 'react';
import InputText from './InputText';
import './RegisterForm.css'
const RegisterForm = props =>{
    return(
        <div>
        <button onClick={props.onclick}>{props.propsApp.showUsers? "Schowaj wszystkich użytkowników":"Pokaż wszystkich użytkowników"}</button>
            <form onSubmit={props.submit} noValidate>
                <InputText 
                label="Nick"
                type="text"
                name="username"
                propsRegisterForm={props}
                />
                <InputText 
                label="Imię"
                type="text"
                name="name"
                propsRegisterForm={props}
                />
                <InputText 
                label="Nazwisko"
                type="text"
                name="surname"
                propsRegisterForm={props}
                />
                <InputText 
                label="e-mail"
                type="text"
                name="email"
                propsRegisterForm={props}
                />
                <InputText 
                label="Hasło"
                type="password"
                name="password"
                propsRegisterForm={props}
                />
                <InputText 
                label="Zapoznałem się z regulaminem"
                type="checkbox"
                name="isConfirmed"
                propsRegisterForm={props}
                />
                <button className="sign_in" onClick={props.submit}>{props.propsApp.signIn? "Zaloguj się!": "Zarejestruj się!"} </button>

            </form>
            
        </div>
    )
}  
export default RegisterForm;