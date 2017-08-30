import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ReactGridLayout from 'react-grid-layout';
import { Button, Icon, Sidebar, Segment, Menu, Image, Header } from 'semantic-ui-react'
import TransitComponent from '@databraid/transit-widget/lib';
import SlackComponent from '@databraid/slack-widget/lib';
import GithubComponent from '@databraid/github-widget/lib';
import { TRANSIT_WIDGET_ID, SLACK_WIDGET_ID, GITHUB_WIDGET_ID } from './constants';
import './App.css';
import {
  showAddWidgetModal,
  showDashboardSidebar,
  hideDashboardSidebar
} from './actions';
import ModalAddWidget from './components/ModalAddWidget';


const Grid = ReactGridLayout.WidthProvider(ReactGridLayout);




const App = (props) => {

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
    <div className='page-container'>



      <div className='grid-container'>
        <Sidebar.Pushable as={Segment}>
          <Sidebar as={Menu} animation='overlay' width='thin' direction='right' visible={props.showSidebar} icon='labeled' vertical inverted >
            <Menu.Item name='Add_Widget' onClick={props.showAddWidgetModal}>
              <Icon name='add circle' />
              Add Widget
            </Menu.Item>
            <Menu.Item name='Settings' disabled>
              <Icon name='cogs' />
              Settings
            </Menu.Item>
          </Sidebar>
          <Sidebar.Pusher>
            <Segment basic>


              <Grid verticalCompact={false} className="layout" layout={props.grid.layout} cols={12} rowHeight={30} width={1200}>
                {components}
              </Grid>

            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
      <div className='sideStrip' onClick={props.showSidebar?props.hideDashboardSidebar:props.showDashboardSidebar}><Icon name={props.showSidebar?'chevron right':'chevron left'}/></div>

      <ModalAddWidget />


    </div>
  );
};


const mapStateToProps = (state, ownProps) => {
  const ids  = state.widgets.ids;
  const byId  = state.widgets.byId;
  const grid = state.widgets.grid;
  const showSidebar  = state.widgets.showSidebar;
  return { ids, byId, grid, showSidebar };
};

export const mapDispatchToProps = dispatch => bindActionCreators({
  showAddWidgetModal,
  showDashboardSidebar,
  hideDashboardSidebar,
},
dispatch);


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
