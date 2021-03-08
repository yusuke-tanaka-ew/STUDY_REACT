import React from 'react';
import {Link} from 'react-router-dom';

export default function Error(){
    return(
        <div>
            <h2>ERROR PAGE</h2>
            <Link to='/'>BACK TO USER LIST</Link>
        </div>
    )
}