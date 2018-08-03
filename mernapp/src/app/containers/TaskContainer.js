import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Navbar from './../components/Navbar';
import TaskForm from './../components/TaskForm';
import TaskTable from './../components/TaskTable';


class TaskContainer extends Component {
    
    constructor(){
        super();
        this.state = {
            title: '',
            description: '',
            _id: ''
        };
    }
    
    addTask = e => {
        console.log(this.state);
        const {_id }  = this.state;

        if(_id){
            fetch(`/api/task/${_id}`, {
                method: 'PUT',
                body: JSON.stringify(this.state),
                headers:{
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }})
                .then(res => res.json())
                .then(data => {
                    M.toast({html: data.status});
                    this.setState({
                        title: '',
                        description: '',
                        _id: ''
                    });
                    this.fetchTasks();
                })
                .catch(err => console.error(err));
        }else{
            fetch('/api/task', {
                method: 'POST',
                body: JSON.stringify(this.state),
                headers:{
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }})
                .then(res => res.json())
                .then(data => {
                    M.toast({html: data.status});
                    this.setState({
                        title: '',
                        description: '',
                        _id: ''
                    });
                    this.fetchTasks();
                })
                .catch(err => console.error(err));
        }

        e.preventDefault();
    }

    fetchTasks = () => {
        fetch('/api/task/')
            .then(res => res.json())
            .then(data => this.setState({tasks: data}));
    }

    deleteTask = id => {
        if(confirm('Are you sure?')){
            fetch(`/api/task/${id}`, {
                method: 'DELETE',
                headers:{
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }})
                .then(res => res.json())
                .then(data => {
                    M.toast({html: data.status});
                    this.fetchTasks();
                })
        }
    }

    editTask = id => {
        fetch(`/api/task/${id}`)
        .then(res => res.json())
        .then(data => {
            this.setState({
                title: data.title,
                description: data.description,
                _id: id            
            });
        })
    }

    handleChange = e => {
        const {name , value} = e.target;
        this.setState({
            [name]: value
        });
    }

    componentDidMount = () => {
        this.fetchTasks();
    }

    render() {
        return (
            <div>
                <Navbar title="My App"></Navbar>
                <div className="container">
                    <div className="row">
                        <TaskForm 
                            title={this.state.title} 
                            description={this.state.description} 
                            handleChange={this.handleChange} 
                            addTask={this.addTask} >
                        </TaskForm>

                        <TaskTable
                            tasks={this.state.tasks}
                            editTask={this.editTask}
                            deleteTask={this.deleteTask}>
                        </TaskTable>            
                    </div>  
                </div>
            </div>
        );
    }
}

TaskContainer.propTypes = {

};

export default TaskContainer;