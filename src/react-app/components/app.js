import React from 'react';
import Icon from "@mdi/react";
import Card from '@app/components/card'
import TasksManager from '@app/components/tasksManager'

function App () {
    return (
        <div className="app">
          <TasksManager />
          <div className="panel graph-view">
            <Card type="EVENT" />
            <Card type="WAIT" />
            <Card type="CYCLE" />
          </div>
          <div className="panel panel--side panel--right" />
        </div>
    );
}

export default App;
