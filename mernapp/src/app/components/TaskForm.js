import React from 'react';

const TaskForm = ({ handleChange, addTask, title, description }) => {
    return(
        <div>
            <div className="col s5">
                <div className="card">
                    <div className="card-content">
                        <form onSubmit={addTask}>
                            <div className="row">
                                <div className="input-field col s12">
                                    <input name="title" onChange={handleChange} type="text" placeholder="Task title" value={title}/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12">
                                    <textarea name="description" onChange={handleChange} className="materialize-textarea" placeholder="Description" 
                                        value={description}></textarea>
                                </div>
                            </div>
                            <button className="btn light-blue darken-4" type="submit">Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )    
}

export default TaskForm;