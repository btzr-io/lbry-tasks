import React from 'react';
import Card from '@app/components/card'


function LeftPanel () {
  return (
    <div className="panel panel--side panel--left">
     <div className="panel_items">
       <div className="panel_item">Item 1</div>
       <div className="panel_item">Item 2</div>
     </div>
    </div>
  )
}

function App () {
    return (
        <div className="app">
          <LeftPanel />
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
