import React from 'react';
const User = props =>{
    return(
        <li key={props.id}>
            <h3>{props.name}</h3>
            <p> <i>ulica:</i> {props.street}</p>
        </li>
    );
}
export default User;
