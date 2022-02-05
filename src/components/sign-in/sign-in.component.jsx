import React, { Component } from 'react';
import './sign-in.styles.scss'
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {SignInWithGoogle} from '../../firebase/firebase.utils'

class SignIn extends Component {
    constructor(props){
        super(props)
        this.state = {
            email: '',
            password:''
        }
    }
    handleChange = event => {
        const {value, name} = event.target;
        this.setState({
            [name]: value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        this.setState(
            {
                email: '',
                password:''
            }
        )
    }

    render() {
        const {email, password} = this.state;
        return (
            <div className='sign-in'>
                <h2 className=''>I already have an account</h2>
                <span className=''>Sign in with your email and password.</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput label="Email" name='email' handleChange={this.handleChange} value={email} type='email' required/>
                    
                    <FormInput label='Password' name='password' handleChange={this.handleChange} value={password} type='password' required/>
                    <div className='buttons'>
                        <CustomButton type="submit" >Sign In</CustomButton>
                        <CustomButton onClick={SignInWithGoogle} isGoogleSignedIn >Sign in with Google </CustomButton>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignIn;