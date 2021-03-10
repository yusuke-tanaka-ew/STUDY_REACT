import React from 'react';
import PropTypes from 'prop-types'

export default class Ranking extends React.Component{
    componentWillMount(){
        this.props.onMount(this.props.categoryId)
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.categoryId !== this.props.categoryId){
            this.props.onUpdate(nextProps.categoryId)
        }
    }

    render(){
        return(
            <div>
                <h2>RANKING COMPONENT</h2>
                <p>CATEGORY ID : {this.props.categoryId}</p>
            </div>
        )
    }

}


// Check type of props: if props type is not string. then make alert
Ranking.PropTypes = {
    categoryId : PropTypes.string,
    onMount : PropTypes.func.isRequired,
    onUpdate : PropTypes.func.isRequired
}
Ranking.defaultProps = {
    categoryId : '1'
}