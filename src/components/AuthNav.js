import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './AppBar.module.css';

const AuthNav = () => (
    <div>
        <NavLink to='/register' className={styles.link}  activeClassName={styles.activeLink}>
            Register
        </NavLink>
        <NavLink to='/login' className={styles.link}  activeClassName={styles.activeLink}>
            Login
        </NavLink>
    </div>
)

export default AuthNav