import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './auth.css'

class Signup extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: null,
            surname: null,
            email: null,
            password: null,
            confirmPassword: null
        }
        this.handleSubmit = this.handleSubmit.bind();
        this.handleChange = this.handleChange.bind();
    }

    handleChange = (e) =>{
        this.setState({ [e.target.id]: e.target.value });
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        const { name, surname, email, password } = this.state;
        const user = {name, surname, email, password};
        console.log('submitted', user)
        axios.post('apiaddress', {user});
    }

    render(){
        return(
            <div>
                <div className='container'>
                    <div className='card'>
                        <div id='heading'>
                            <h2>Signup</h2>
                        </div>
                        <div>
                            <form onSubmit={this.handleSubmit}>
                                <input type='text' placeholder='Name' id='name' onChange={this.handleChange} /><br/>
                                <input type='text' placeholder="Surname" id='surname' onChange={this.handleChange} /><br/>
                                <input type='email' placeholder='Email' id='email' onChange={this.handleChange} /><br/>
                                <input type='password' placeholder='Password' id='password' onChange={this.handleChange} /><br/>
                                <input type='password' placeholder='Confirm Password' id='confirm-password' onChange={this.handleChange} /><br/>
                                <button type="submit">Signup</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Signup;