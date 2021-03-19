import React from 'react';
import './UserList.css';
const UserList = props =>{
    const users = props.user.map(user => {
        return <li>
            <div>
                <img src={user.picture.large} alt="{user.name.last}"/>
                <p>{user.name.title} {user.name.first}</p>
                <i>{user.email}</i>
            </div>
            </li>
    })
    return(
        <>
            {users.reverse()}
        </>
    );
}
export default UserList;