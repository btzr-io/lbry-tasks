import React from 'react';
import Grid from '@/components/grid'
import Card from '@/components/card'
function App () {
    return (
        <div className="app">
          <Grid gridSpacing={40} gridDotSize={2}/>
          <Card />
        </div>
    );
}

export default App;
