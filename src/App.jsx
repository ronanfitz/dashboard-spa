import React, { Component } from 'react';
import ReactGridLayout from 'react-grid-layout';
import './App.css';
//import { Root as ExapleComponent } from  '@databraid/example-widget/lib';

class MyFirstGrid extends Component {
  render() {
    // layout is an array of objects, see the demo for more complete usage
    var layout = [
      {i: 'a', x: 0, y: 0, w: 4, h: 2, static: true},
    ];
    return (
      <ReactGridLayout className="layout" layout={layout} cols={12} rowHeight={30} width={1200}>
        <div key={'a'}> the imported component as exapleComponent here</div>
      </ReactGridLayout>
    )
  }
}

export default MyFirstGrid
