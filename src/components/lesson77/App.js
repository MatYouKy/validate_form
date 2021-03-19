import React, {Component} from 'react';
import User from './User';
import './App.css';

class App extends Component {
    state={
        users:[]
    }

    componentDidMount(){
        this.responseData();
    }
    responseData =()=>{
        const xhr = new XMLHttpRequest();
        xhr.open('GET','https://jsonplaceholder.typicode.com/users',true);
        xhr.onload =()=>{
            if(xhr.status ===200){
                const users = JSON.parse(xhr.response);
                this.setState({users})
            }
        }

        xhr.send(null)
    }
    render() { 
        const users = this.state.users.map(user =>{
            return <User 
                id={user.id}
                name={user.name}
                street={user.address.street}
             />
        })
        return ( 
            <ul>
                {users}
            </ul>
         );
    }
}
 
export default App;