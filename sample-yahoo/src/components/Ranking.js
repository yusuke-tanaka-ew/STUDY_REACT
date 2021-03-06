import React from 'react';
import PropTypes from 'prop-types';

export default function Ranking({categoryId}){
    return(
        <div>
            <h2>Component of Rankig</h2>
            <p>
                CategoryID:{categoryId}
            </p>
        </div>
    )
}
Ranking.propTypes = {
    categoryId: PropTypes.string
};
Ranking.defaultProps = {
    categoryId:'1'
};