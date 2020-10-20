import React from 'react';
import Grid from '@app/components/grid'
import Card from '@app/components/card'

const GRID_SPACING = 40
const GRID_DOT_SIZE = 2

function App () {
    return (
        <div className="app">
          <Grid gridSpacing={GRID_SPACING} gridDotSize={GRID_DOT_SIZE}/>
          <Card />
        </div>
    );
}

export default App;
