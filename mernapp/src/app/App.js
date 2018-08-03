import React, { Component } from 'react';
import { throws } from 'assert';
import TaskContainer from './containers/TaskContainer';

class App extends Component {
    render() {
        return(
            <div>
                <TaskContainer></TaskContainer>
            </div>          
        )
    }
}

export default App;