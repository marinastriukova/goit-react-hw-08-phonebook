import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { authSelectors } from '../redux/auth';
import styles from './AppBar.module.css'

const Navigation = ({isAuthenticated}) =>(
    <nav>
        <NavLink to='/' className={styles.link} >
            Home
        </NavLink>
        
        {isAuthenticated && (
            <NavLink to='/phonebook' className={styles.link} >
                Phonebook
            </NavLink>
        )}
    </nav>
)

const mapStateToProps = state => ({
        isAuthenticated: authSelectors.getIsAuthenticated(state)
})

export default connect(mapStateToProps)(Navigation)