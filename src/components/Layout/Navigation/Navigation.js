import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './Navigation.module.css';
import Logo from '../../../assets/img/clogo.png';

const navigation = () => (
    <nav>
        <div className={classes.NavContainer}>
            <div className={classes.LogoDiv}>
                <img className={classes.Logo} src={Logo} alt="Coronavirus Logo" />
            </div>
            <div className={classes.LinkDiv}>
                <NavLink to="/" exact className={classes.Link} activeClassName={classes.Active}>Home</NavLink>
                <NavLink to="/about-corona" className={classes.Link} activeClassName={classes.Active}>About covid-19</NavLink>
            </div>
        </div>
    </nav>
);

export default navigation;