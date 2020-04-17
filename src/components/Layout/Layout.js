import React from 'react';

import classes from './Layout.module.css';
import Navigation from './Navigation/Navigation';
import Footer from '../HomePage/Footer/Footer';

const layout = (props) => (
    <div className={classes.Layout}>
        <div>
            <Navigation />
        </div>
        <main>
            {props.children}
        </main>
        <Footer />
    </div>
);

export default layout;