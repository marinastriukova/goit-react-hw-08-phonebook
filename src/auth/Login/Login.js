import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authOperations } from '../../redux/auth';
import styles from '../form.module.css';

class Login extends Component{
    state={
        email: '',
        password: '',
    }

    handleChange = ({target: {name, value}}) => {
        this.setState({[name]: value})
    }

    handleSubmit = e => {
        e.preventDefault();

        this.props.onLogin(this.state);
        this.setState({name: '', email: '', password: ''})
    }

    render(){
        const {email, password} = this.state;

        return(
            <div>
                <h1 className={styles.title}>Login</h1>

                <form onSubmit={this.handleSubmit} autoComplete='off' className={styles.form}>
                    <label className={styles.label}>
                        Email
                        <input type="email"
                            name="email"
                            value={email}
                            className={styles.input}
                            onChange={this.handleChange} />
                    </label>
                    <label className={styles.label}>
                        Password
                        <input type="password"
                            name="password"
                            value={password}
                            className={styles.input}
                            onChange={this.handleChange} />
                    </label>
                    <button className={styles.button} type='submit'>Login</button>
                </form>
            </div>
        )
    }    
}

const mapDispatchToProps = {
    onLogin: authOperations.logIn
}

export default connect(null,mapDispatchToProps)(Login)