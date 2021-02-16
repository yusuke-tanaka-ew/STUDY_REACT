import React, {Component} from 'react';

class TodoInput extends Component {
    render(){
        return(
            <div>
                <input placeholder='Enter Todo !' />
                <button>Submit!</button>
            </div>
        );
    }
}


export default TodoInput;