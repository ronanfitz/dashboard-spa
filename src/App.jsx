import React from 'react';
import ReactGridLayout from 'react-grid-layout';
import TransitComponent from '@databraid/transit-widget/lib';
import './App.css';
// import { Root as ExapleComponent } from  '@databraid/example-widget/lib';

const App = () => {
  // layout is an array of objects, see the demo for more complete usage
  const layout = [
    {
      i: 'a',
      x: 0,
      y: 0,
      w: 5,
      h: 2.4,
      minH: 2.4,
    },
    { i: 'b', x: 0, y: 0, w: 12, h: 2.5 },
    { i: 'c', x: 0, y: 0, w: 2.5, h: 2.5 },
  ];
  return (
    <ReactGridLayout
      className="layout"
      layout={layout}
      cols={12}
      rowHeight={30}
      width={1200}
    >
      <div className="transit" key={'a'}>
        <TransitComponent />
      </div>

      <div key={'b'}>b</div>
      <div key={'c'}>c</div>
    </ReactGridLayout>
  );
};

export default App;
