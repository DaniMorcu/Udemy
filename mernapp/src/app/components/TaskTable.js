import React from 'react';
import PropTypes from 'prop-types';

const TaskTable = ({tasks, editTask, deleteTask}) =>  {
    return (
        <div>
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
                            tasks && 
                            tasks.map(task => {
                                return(
                                    <tr key={task._id}>
                                        <td>{task.title}</td>
                                        <td>{task.description}</td>
                                        <td>
                                            <button className="btn light-blue darken-4" onClick={ () => editTask(task._id)} >
                                                <i className="material-icons">edit</i>
                                            </button>
                                            <button className="btn light-blue darken-4" onClick={ () => deleteTask(task._id)} style={{margin: '4px'}}>
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
    );
}

TaskTable.propTypes = {

};

export default TaskTable;