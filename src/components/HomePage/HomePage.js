import React from 'react';

import classes from './HomePage.module.css';
import India from './India/India';
import GlobalData from './GlobalData/GlobalData';

const homePage = () => {
    return (
        <div>
            <div className={classes.Dashboard}>
                <h1 className={classes.DashboardHeading}>
                    <span className={classes.DashboardHeadingHeading}>Covid-19</span>&nbsp;
                    <span className={classes.DashboardHeadingSpan}>Dashboard</span>
                </h1>
            </div>
        
            <India />
            <GlobalData />
        </div>
    );
};

export default homePage;