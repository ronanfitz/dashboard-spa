import React from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import ReactGridLayout from 'react-grid-layout';
import TransitComponent from '@databraid/transit-widget/lib';
import SlackComponent from '@databraid/slack-widget/lib';
import GithubComponent from '@databraid/github-widget/lib';
import { TRANSIT_WIDGET_ID, SLACK_WIDGET_ID, GITHUB_WIDGET_ID } from './constants';
import './App.css';
const Grid = ReactGridLayout.WidthProvider(ReactGridLayout);

const App = (props) => {
  // layout is an array of objects, see the demo for more complete usage
  const layout = [
    { i: TRANSIT_WIDGET_ID, x: 6, y: 0, w: 12, h: 10, minH: 6.5, minW: 7},
    { i: GITHUB_WIDGET_ID, x: 3, y: 0, w: 6, h: 12 },
    { i: SLACK_WIDGET_ID, x: 0, y: 0, w: 6, h: 10 },
  ];

  var components = props.ids.map((component, i) => {
    if(component === TRANSIT_WIDGET_ID){
      return (
        <div key={TRANSIT_WIDGET_ID}>
          <TransitComponent widgetId={TRANSIT_WIDGET_ID} />
        </div>
      )
    }
    if(component === GITHUB_WIDGET_ID){
      return (
        <div key={GITHUB_WIDGET_ID}>
          <GithubComponent widgetId={GITHUB_WIDGET_ID} />
        </div>
      )
    }
    if(component === SLACK_WIDGET_ID){
      return (
        <div key={SLACK_WIDGET_ID}>
          <SlackComponent widgetId={SLACK_WIDGET_ID} />
        </div>
      )
    }

  });

  return (
    <Grid verticalCompact={false} autclassName="layout" layout={layout} cols={12} rowHeight={30}>
      {components}
    </Grid>
  );
};


// <div key={TRANSIT_WIDGET_ID}>
//   <TransitComponent widgetId={TRANSIT_WIDGET_ID} />
// </div>
//
// <div key={GITHUB_WIDGET_ID}>
//   <GithubComponent widgetId={GITHUB_WIDGET_ID} />
// </div>
//
// <div key={SLACK_WIDGET_ID}>
//   <SlackComponent widgetId={SLACK_WIDGET_ID} />
// </div>

const mapStateToProps = (state, ownProps) => {
  const ids  = state.widgets.ids;
  const byIds  = state.widgets.byIds;

  return { ids, byIds };
};


export default connect(
  mapStateToProps
)(App);
