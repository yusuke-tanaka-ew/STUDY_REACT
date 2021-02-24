import React from 'react';
import { Button,AppBar,Toolbar,Typography,Input,List,ListItem,ListItemText } from '@material-ui/core';
import { TransitionGroup,CSSTransition } from 'react-transition-group';
import './TodoApp.css'


export default function TodoApp({task,tasks,inputTask,addTask}){
    return(
        <div>

            <AppBar position='static'>
                <Toolbar>
                    <Typography type='title' color='inherit'>
                        TODO
                    </Typography>
                </Toolbar>
            </AppBar>
            <div style={{'padding':'16px'}}>
                <Input onChange={(e)=>inputTask(e.target.value)} />
                <Button raised color='accent' onClick={()=>addTask(task)} >Add</Button>
                <List>
                    <TransitionGroup transisionName='example' transitionEnterTimeout={300}>
                        
                        {
                            tasks.map(function(item,i){
                                return(
                                    <CSSTransition timeout={300}>
                                    <ListItem key={i}>
                                        <ListItemText primary={`- ${item}`} />
                                    </ListItem>
                                    </CSSTransition>
                                );
                            })
                        }

                    </TransitionGroup>
                </List>
            </div>
        </div>
    );

}