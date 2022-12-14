import React from 'react';
import classes from './ErrorPage.module.css'
import {useNavigate} from "react-router-dom";

const ErrorPage = () => {
    const navigate = useNavigate()
     return (
        <div className={classes.top}>
            <div className={classes.notfound}>
                <div className={classes.notfound404}>
                    <h3>Oops! Page not found</h3>
                    <h1>
                        <span>4</span>
                        <span>0</span>
                        <span>4</span>
                    </h1>
                </div>
                <h2>we are sorry, but the page you requested was not found</h2>
            </div>
        </div>
    );
};

export default ErrorPage;