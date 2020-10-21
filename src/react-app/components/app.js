import React from 'react';
import Card from '@app/components/card'

function App () {
    return (
        <div className="app">
          <div className="panel panel--side panel--left" />
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
