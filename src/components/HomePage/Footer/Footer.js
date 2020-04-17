import React from 'react';

import classes from './Footer.module.css';
import Navigation from '../../Layout/Navigation/Navigation';

const footer = () => (
    <div className={classes.Footer}>
        <h1 className={classes.Shah}>&copy; Developed by mohammad shahzaib</h1>
        <Navigation  />
    </div>
);

export default footer;