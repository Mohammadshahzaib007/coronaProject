import React from 'react';

import classes from './Loader.module.css';

const loader = () => (
    <div className={classes.LdsSpinner}><div></div><div></div><div></div><div></div></div>
);

export default loader;