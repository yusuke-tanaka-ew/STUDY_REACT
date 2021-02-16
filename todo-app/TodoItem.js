import React from 'react';
import { checkPropTypes } from 'prop-types';

function TodoItem(props){
    return(
        <li>
            {checkPropTypes.title}
        </li>
    );
}

export default TodoItem