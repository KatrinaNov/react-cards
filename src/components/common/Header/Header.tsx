import React from 'react';
import {NavLink} from "react-router-dom";
import {PATH} from "../../../App/RoutesComponent";
import styles from './Header.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
      <nav>
        <NavLink to={PATH.LOGIN}>Log In</NavLink>
        <NavLink to={PATH.REGISTRATION}>Sign Up</NavLink>
        <NavLink to={PATH.PROFILE}>Profile</NavLink>
        <NavLink to={PATH.RECOVERY_PASS}>Recovery Password</NavLink>
        <NavLink to={PATH.NEW_PASS}>New password</NavLink>
        <NavLink to={PATH.DEMO}>Demo</NavLink>

      </nav>
    </header>
  );
};

export default Header;