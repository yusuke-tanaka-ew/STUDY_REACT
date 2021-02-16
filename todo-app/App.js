import React, {Component} from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

class App extends Component {
    
    
    constructor(props){
        super(props);
        this.state = {
            tasks : [
                {title : 'DefaultTodo01',id : 0,},
            ],
            uniqueId : 1,
        };
        this.addTodo = this.addTodo.bind(this);
        this.resetTodo = this.resetTodo.bind(this);
    }

    resetTodo(){
        this.setState({
            tasks:[],
        });
    }

    addTodo(title){
        const {
            tasks,
            uniqueId,
        } = this.state;

        tasks.push({
            title,
            id : uniqueId,
        });

        this.setState({
            tasks,
            uniqueId:uniqueId+1,
        });
    }
    
    render(){
        /*
        const tasks = [
            {title : 'sampletaskl01',id : 0},
            {title : 'sampletaskl02',id : 1},
        ];
        */
        return(
            /*
            <div>
                <h1>TODO APP</h1>
                <TodoInput />
                <TodoList tasks = {tasks} />
            </div>  
            */
            <div className='App'>
                <h1>TODO APP</h1>
                <TodoInput addTodo={this.addTodo} />
                <TodoList tasks = {this.state.tasks} />
                <button onClick={this.resetTodo}>RESET!!!</button>
            </div>
            
        );
    }
}


export default App;