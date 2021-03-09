import React from 'react';
import PropTypes from 'prop-types'

export default function Ranking({categoryId}){
    return(
        <div>
            <h2>Ranking Component</h2>
            <p>Category id : {categoryId}</p>
        </div>
    )
}

// Check type of props: if props type is not string. then make alert
Ranking.PropTypes = {
    categoryId : PropTypes.string
}
Ranking.defaultProps = {
    categoryId : '1'
}