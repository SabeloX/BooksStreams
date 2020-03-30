import React, {Component} from 'react';
import axios from 'axios';
import './auth.css';

class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            users: [],
            username: null,
            password: null,
            access: 'denied'
        }
        this.handleSubmit = this.handleSubmit.bind();
        this.handleChange = this.handleChange.bind();
    }

    componentDidMount(){
        axios.get('api_address')
        .then((response) =>{
            this.setState({ user: response.data });
        })
        .catch((e) =>{
            console.log('API not found.');
        })
    }

    handleChange = (e) =>{
        this.setState({ [e.target.id]: e.target.value });
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        const { username, password, users } = this.state;
        users.map(user =>{
            (user.email === username && user.password === password) ?
                (
                    this.setState({ access: 'granted'})
                ) :
                (
                    this.setState({ access: 'denied' })
                )
        })
    }

    render(){
        return(
            <div>
                <div className='container'>
                    <div className='card'>
                        <div id='heading'>
                            <h2>Login</h2>
                        </div>
                        <div>
                            <form onSubmit={this.handleSubmit}>
                                <input type='text' placeholder='Username' id='username' onChange={this.handleChange} /><br/>
                                <input type='password' placeholder='Password' id='password' onChange={this.handleChange} /><br/>
                                <button type="submit">Login</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;