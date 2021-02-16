import React, {Component} from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

class App extends Component {
    render(){
        const tasks = [
            {title : 'Todo01',id : 0},
            {title : 'Todo02',id : 1},
        ];

        return(
            <div>
                <h1>TODO APP</h1>
                <TodoInput />
                <TodoList {tasks} />
            </div>
        );
    }
}


export default App;