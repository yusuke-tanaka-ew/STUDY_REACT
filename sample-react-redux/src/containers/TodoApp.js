import { connect } from 'react-redux';
import TodoApp from '../components/TodoApp';
import { inputTask,addTask } from '../actions/tasks';


/*
function mapStateToProps({ task, tasks }){
    return {
        task,
        tasks
    };
}
*/


function mapStateToProps(state){
    return  {
        task : state.task,
        tasks : state.tasks,
    }
};


function mapDispatchToProps(dispatch){
    return {
        addTask(task){
            dispatch(addTask(task));
        },
        inputTask(task){
            dispatch(inputTask(task))
        }
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(TodoApp);