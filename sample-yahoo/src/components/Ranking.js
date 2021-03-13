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
        const {category,ranking,error} = this.props
        return(
            <div>
                <h2>
                    {
                        typeof category !== 'undefined'
                            ? `Ranking of {category.name}`
                            : ''
                    }
                </h2>
                    {
                        (()=> {
                            if(error){
                                return <p>Error occured. Please reload again</p>
                            }else if (typeof ranking ==='undefined') {
                                return <p>Now loading data. Please wait.</p>
                            }else{
                                return(
                                    <ol>
                                        {ranking.map(item => (
                                            <li key = {`ranking-item-${item.code}`}>
                                                <img alt={item.name} src = {item.imageUrl}/>
                                                <a href={item.url} target='_blank'>{item.name}</a>
                                            </li>
                                        ))}
                                    </ol>
                                )
                            }
                        })()
                    }
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