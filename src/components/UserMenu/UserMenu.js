import React from 'react';
import { connect } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';


const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  name: {
    fontWeight: 700,
    marginRight: 12,
  },
  button:{
    padding: 3,
    backgroundColor: 'rgb(151, 155, 208)',
  }
};

function UserMenu ({ name, onLogout }) {
  return (
    <div style={styles.container}>
      <span style={styles.name}>Welcome, {name}</span>
      <button style={styles.button} type="button" onClick={onLogout}>
        Logout
      </button>
    </div>
  )
}

const mapStateToProps = state => ({
  name: authSelectors.getUsername(state)
});

const mapDispatchToProps = {
  onLogout: authOperations.logOut,
};


export default connect(mapStateToProps, mapDispatchToProps)(UserMenu)