import React,{Component} from 'react';
import RegisterForm from './RegisterForm';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state={
            username:'',
            name:'',
            surname:'',
            email:'',
            password:'',
            id: null,
            users:[],
            isConfirmed: false,
            showUsers: false,
            signIn: false,
            error:{
                username: false,
                name:false,
                surname:false,
                email:false,
                password:false,
                isConfirmed: false
            }
        }
    }
    messages={
        username_incorrect: 'Nick musi mieć więcej niż 3 znaki',
        name_incorrect: 'Nazwa użytkownika musi być dłuższa niż 3 znaki!',
        surname_incorrect: "Nazwisko nie może zawierać spacji!y",
        email_incorrect: "Adres e-mail musi zawierać @",
        password_incorrect: "Hasło musi mieć więćej niż 8 znaków",
        isConfirmed_incorrect: "Musisz zaznaczyć zgodę"
    }
    getData=()=>{
        fetch("data/users.json")
        .then(response => response.json())
        .then(data => {
            this.setState({
                users: data.users
            })
        })
    }

    componentDidMount(){
        this.getData()

    }

    handleChange =e=>{
        if(e.target.type !== "checkbox"){
            this.setState({
                [e.target.name]: e.target.value
            })
        }else{
            this.setState({
                [e.target.name]: e.target.checked
            })
        }
    }

    validation(){
        let username = false;
        let name = false;
        let surname = false;
        let email = false;
        let password = false;
        let isConfirmed = false;
        let correct = false;

        if(this.state.username.length > 3){
            username = true;
        }
        if(this.state.name.length > 3){
            name = true;
        }
        if(this.state.surname.indexOf(" ") === -1&&this.state.surname.length>2 ){
            surname = true;
        }

        if(this.state.email.indexOf("@") !== -1){
            email = true;
        }
        if(this.state.password.length >= 8){
            password = true;
        }
        if(this.state.isConfirmed){
            isConfirmed = true;
        }

        if(name && surname && email && password && isConfirmed && username){
            correct = true;
        }
        return ({
            correct,
            surname,
            username,
            name,
            email,
            isConfirmed,
            password
        })

    }
    handleSubmit = e =>{
        e.preventDefault();
        const users = this.state.users;
        const validation = this.validation()
        if(validation.correct){
            users.push({username: this.state.username,name:this.state.name, surname: this.state.surname, email: this.state.email, password: this.state.password, id: users.length +1})
            this.setState({
                users,
                username:'',
                name:'',
                surname:'',
                email:'',
                password:'', 
                isConfirmed: false,
                showUsers: false,

                error:{
                    username: false,
                    name:false,
                    surname:false,
                    email:false,
                    password:false,
                    isConfirmed: false
                }
            })
        }else{
            this.setState({
            error:{
                username: !validation.username,
                name:!validation.name,
                surname:!validation.surname,
                email:!validation.email,
                password:!validation.password,
                isConfirmed: !validation.isConfirmed
            }
        })
        }
    
    }
    handleClick=()=>{
        this.setState(prevState => {
            return {     
                showUsers: !prevState.showUsers
            }
        })
    }
    render() { 
        const {signIn} = this.state;
        const users = this.state.users.map(user =>{
            return (
                <li key={user.id}>
                    <p>Nick: <strong>{user.username}</strong></p>
                    <p>imię: <strong>{user.name}</strong></p>
                    <p>Nazwisko: <strong>{user.surname}</strong></p>
                    <p>E-mail: <strong>{user.email}</strong></p>
                    <br/>
                </li>
            )
        })
        return (

            <div className="login_window">
                <h2>{signIn? "Zaloguj się" : "Zarejestruj się!"}</h2>
                {}
                <RegisterForm
                propsApp={this.state}
                onclick={this.handleClick}
                onchange={this.handleChange}
                submit={this.handleSubmit}
                messages={this.messages}
                />
                <ul>
                    {this.state.showUsers && users}
                </ul>
            </div>
        );
    }
}
 
export default App;

