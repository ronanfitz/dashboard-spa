import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ReactGridLayout from 'react-grid-layout';
import { Icon, Sidebar, Segment, Menu } from 'semantic-ui-react';
import PropTypes from 'prop-types';
<<<<<<< HEAD
=======
import TransitComponent from '@databraid/transit-widget/lib';
import SlackComponent from '@databraid/slack-widget/lib/App';
import GithubComponent from '@databraid/github-widget/lib';
import { TRANSIT_WIDGET_ID, SLACK_WIDGET_ID, GITHUB_WIDGET_ID } from './constants';
>>>>>>> 663311781cf149309b66a65ebace11b9412f7687
import './App.css';
import {
  showAddWidgetModal,
  showDashboardSidebar,
  hideDashboardSidebar,
  lockDashboard,
  unlockDashboard,
} from './actions';
import ModalAddWidget from './components/ModalAddWidget/';
import WidgetContainer from './components/WidgetContainer/';

const Grid = ReactGridLayout.WidthProvider(ReactGridLayout);

const App = (props) => {
<<<<<<< HEAD
  const components = (props.ids).map(widgetId => (
    <div key={widgetId} className="widget-container">
      <WidgetContainer id={widgetId} />
    </div>
  ));
=======
  const components = (props.ids).map((widgetId) => {
    if (widgetId === TRANSIT_WIDGET_ID) {
      return (
        <div key={widgetId}>
          <TransitComponent widgetId={widgetId} />
        </div>
      );
    }
    if (widgetId === GITHUB_WIDGET_ID) {
      return (
        <div key={widgetId}>
          <GithubComponent widgetId={widgetId} />
        </div>
      );
    }
    if (widgetId === SLACK_WIDGET_ID) {
      return (
        <div key={widgetId}>
          <SlackComponent widgetId={widgetId} />
        </div>
      );
    }
    return (
      <div key={widgetId} />
    );
  });
>>>>>>> 663311781cf149309b66a65ebace11b9412f7687

  return (
    <div className="page-container">
      <div
        role="link"
        tabIndex="-1"
        className="side-strip"
        onClick={props.showSidebar ? props.hideDashboardSidebar : props.showDashboardSidebar}
      >
        <Icon name={props.showSidebar ? 'chevron right' : 'ellipsis vertical'} />
      </div>
      <div className="grid-container">
        <Sidebar.Pushable as={Segment}>
          <Sidebar
            as={Menu}
            animation="overlay"
            width="thin"
            direction="right"
            visible={props.showSidebar}
            icon="labeled"
            vertical
            inverted
          >
            <Menu.Item name="add_widget" onClick={props.showAddWidgetModal}>
              <Icon name="add circle" />
              Add Widget
            </Menu.Item>
            {props.ids.length ?
              <Menu.Item
                name="lock-unlock-dashboard"
                onClick={props.locked ? props.unlockDashboard : props.lockDashboard}
              >
                <Icon name={props.locked ? 'unlock' : 'lock'} />
                {props.locked ? 'Unlock' : 'Lock'}
              </Menu.Item>
              : null }
            <Menu.Item name="settings" disabled>
              <Icon name="setting" />
              Settings
            </Menu.Item>
          </Sidebar>
          <Sidebar.Pusher>
            <Segment basic>

              <Grid
                verticalCompact={false}
                className="layout"
                layout={props.layout}
                cols={12}
                rowHeight={30}
                width={1200}
              >
                {components}
              </Grid>

            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>


      <ModalAddWidget />
    </div>
  );
};

App.propTypes = {
  ids: PropTypes.arrayOf(PropTypes.string).isRequired,
  layout: PropTypes.arrayOf(PropTypes.shape({
    i: PropTypes.string.isRequired,
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    w: PropTypes.number.isRequired,
    h: PropTypes.number.isRequired,
    static: PropTypes.bool,
  })).isRequired,
  showSidebar: PropTypes.bool.isRequired,
  locked: PropTypes.bool.isRequired,
  showAddWidgetModal: PropTypes.func.isRequired,
  showDashboardSidebar: PropTypes.func.isRequired,
  hideDashboardSidebar: PropTypes.func.isRequired,
  lockDashboard: PropTypes.func.isRequired,
  unlockDashboard: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  const ids = state.widgets.ids;
  const layout = state.widgets.grid.layout;
  const showSidebar = state.widgets.showSidebar;
  const locked = state.widgets.locked;
  return { ids, layout, showSidebar, locked };
};

export const mapDispatchToProps = dispatch => bindActionCreators({
  showAddWidgetModal,
  showDashboardSidebar,
  hideDashboardSidebar,
  lockDashboard,
  unlockDashboard,
},
dispatch);


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
