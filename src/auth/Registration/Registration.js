import React, { Component } from 'react';
import { connect } from 'react-redux';
import {authOperations} from '../../redux/auth'
import styles from '../form.module.css';

class Registration extends Component{
    state={
        name: '',
        email: '',
        password: '',
    }

    handleChange = ({target: {name, value}}) => {
        this.setState({[name]: value})
    }


    handleSubmit = e => {
        e.preventDefault();

        this.props.onRegister(this.state);

        this.setState({name: '', email: '', password: ''})
    }


    render(){
        const {name, email, password} = this.state;

        return(
            <div>
                <h1 className={styles.title}>Registration</h1>

                <form className={styles.form}
                onSubmit={this.handleSubmit}
                autoComplete='off'
                >
                <label className={styles.label}>
                    Name
                    <input
                    className={styles.input}
                    type='text'
                    name="name"
                    value={name}
                    onChange={this.handleChange}>
                    </input>
                </label>

                <label className={styles.label}>
                    Email
                    <input
                    className={styles.input}
                    type='email'
                    name="email"
                    value={email}
                    onChange={this.handleChange}>
                    </input>
                </label>

                <label className={styles.label}>
                    Password
                    <input
                    className={styles.input}
                    type='password'
                    name="password"
                    value={password}
                    onChange={this.handleChange}>
                    </input>
                </label>

                <button className={styles.button}type='submit'>Register</button>
                </form>
            </div>
        )
    }  
}

const mapDispatchToProps = {
    onRegister: authOperations.register
}

export default connect(null, mapDispatchToProps)(Registration)