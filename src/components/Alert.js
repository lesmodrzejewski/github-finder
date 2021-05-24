import React, { useContext } from 'react';
import AlertContext from '../context/alert/alertContext';


const Alert = () => {

    const alertContext = useContext(AlertContext);

    const { alert } = alertContext;

    return(
        alert !== null && (
            <div className="alert-container">
                <h1>{alert.msg}</h1> 
            </div>
        )
    )
}

export default Alert;