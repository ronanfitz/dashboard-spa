import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ReactGridLayout from 'react-grid-layout';
import { Button, Icon, Sidebar } from 'semantic-ui-react'
import TransitComponent from '@databraid/transit-widget/lib';
import SlackComponent from '@databraid/slack-widget/lib';
import GithubComponent from '@databraid/github-widget/lib';
import { TRANSIT_WIDGET_ID, SLACK_WIDGET_ID, GITHUB_WIDGET_ID } from './constants';
import './App.css';
import { showAddWidgetModal } from './actions';
import ModalAddWidget from './components/ModalAddWidget';

const Grid = ReactGridLayout.WidthProvider(ReactGridLayout);




const App = (props) => {
  // layout is an array of objects, see the demo for more complete usage
  const layout = [
    { i: TRANSIT_WIDGET_ID, x: 6, y: 0, w: 12, h: 10, minH: 6.5, minW: 7},
    { i: GITHUB_WIDGET_ID, x: 3, y: 0, w: 6, h: 12 },
    { i: SLACK_WIDGET_ID, x: 0, y: 0, w: 6, h: 10 },
  ];

  var components = props.ids.map((component) => {
    if(component === TRANSIT_WIDGET_ID){
      return (
        <div key={component}>
          <TransitComponent widgetId={component} />
        </div>
      )
    }
    if(component === GITHUB_WIDGET_ID){
      return (
        <div key={component}>
          <GithubComponent widgetId={component} />
        </div>
      )
    }
    if(component === SLACK_WIDGET_ID){
      return (
        <div key={component}>
          <SlackComponent widgetId={component} />
        </div>
      )
    }

  });

  return (
    <div className='container'>
      <ModalAddWidget />
      <Button primary fluid onClick={props.showAddWidgetModal}><Icon name='add circle' />Add widget</Button>
      <Grid verticalCompact={false} autclassName="layout" layout={layout} cols={12} rowHeight={30}>
        {components}
      </Grid>
    </div>
  );
};


const mapStateToProps = (state, ownProps) => {
  const ids  = state.widgets.ids;
  const byId  = state.widgets.byId;

  return { ids, byId };
};

export const mapDispatchToProps = dispatch => bindActionCreators({
  showAddWidgetModal,
},
dispatch);


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
