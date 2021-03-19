import React from 'react';
const ButtonFetchUsers = props => {
    return (  
        <button style={{padding: '10px 20px',
    border: '1px solid black', backgroundColor:'white', margin: '20px'}} onClick={props.button}>Dodaj użytkownika</button>
    );
}
 
export default ButtonFetchUsers;