import React, { Component } from 'react';

class App extends Component {

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
        return(
            <div>
                {/* NAVIGATION */}
                <nav className="light-blue darken-4">
                    <div className="container">
                        <a className="brand-logo" href="/">Task Example</a>
                    </div>
                </nav>

                <div className="container">
                    <div className="row">
                        <div className="col s5">
                            <div className="card">
                                <div className="card-content">
                                    <form onSubmit={this.addTask}>
                                        <div className="row">
                                            <div className="input-field col s12">
                                                <input name="title" onChange={this.handleChange} type="text" placeholder="Task title" value={this.state.title}/>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="input-field col s12">
                                                <textarea name="description" onChange={this.handleChange} className="materialize-textarea" placeholder="Description" value={this.state.description}></textarea>
                                            </div>
                                        </div>
                                        <button className="btn light-blue darken-4" type="submit">Send</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col s7">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Title</th>
                                        <th>Description</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.tasks && 
                                        this.state.tasks.map(task => {
                                            return(

                                                <tr key={task._id}>
                                                    <td>{task.title}</td>
                                                    <td>{task.description}</td>
                                                    <td>
                                                        <button className="btn light-blue darken-4" onClick={ () => this.editTask(task._id)} >
                                                            <i className="material-icons">edit</i>
                                                        </button>
                                                        <button className="btn light-blue darken-4" onClick={ () => this.deleteTask(task._id)} style={{margin: '4px'}}>
                                                            <i className="material-icons">delete</i>
                                                        </button>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>             
                    </div>  
                </div>
            </div>            
        )
    }
}

export default App;