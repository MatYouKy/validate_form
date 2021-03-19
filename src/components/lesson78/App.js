import React, { Component } from 'react';
import UserList from './UserList';
import ButtonFetchUsers from './ButtonFetchUsers';
const API = 'https://randomuser.me/api/?results=1';

class App extends Component {
    state = {
        users: []
    }

    handleDataFetch =() =>{
        fetch(API)
        .then(response=> {
            if(response.ok){
                return response
            }
            throw Error(response.status)
        })
        .then(response=> response.json())
        .then(data => {
            const user = data.results;
            this.setState(prevState =>({
                users: prevState.users.concat(user)
            }))
        })
        .catch(error=> console.log(error))
    }
    render() { 
        const users = this.state.users;
        return ( 
            <div>
                <ButtonFetchUsers button={this.handleDataFetch}/>
                <ul className="users">
                    {users.length>0? <UserList user={users}/>: users}
                </ul>
            </div>
         );
    }
}
 
export default App;