import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ReactGridLayout from 'react-grid-layout';
import { Icon, Sidebar, Segment, Menu } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import TransitComponent from '@databraid/transit-widget/lib';
import SlackComponent from '@databraid/slack-widget/lib';
import GithubComponent from '@databraid/github-widget/lib';
import { TRANSIT_WIDGET_ID, SLACK_WIDGET_ID, GITHUB_WIDGET_ID } from './constants';
import './App.css';
import {
  showAddWidgetModal,
  showDashboardSidebar,
  hideDashboardSidebar,
} from './actions';
import ModalAddWidget from './components/ModalAddWidget/index.jsx';
import WidgetContainer from './components/WidgetContainer/index.jsx';

const Grid = ReactGridLayout.WidthProvider(ReactGridLayout);

const App = (props) => {
  const components = (props.ids).map((component) => {
    return (
      <div key={component}>
        <WidgetContainer id={component} />
      </div>
    )
  });

  return (
    <div className="page-container">
      <div
        role="link"
        tabIndex="-1"
        className="sideStrip"
        onClick={props.showSidebar ? props.hideDashboardSidebar : props.showDashboardSidebar}
      >
        <Icon name={props.showSidebar ? 'chevron right' : 'chevron left'} />
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
            <Menu.Item name="Add_Widget" onClick={props.showAddWidgetModal}>
              <Icon name="add circle" />
              Add Widget
            </Menu.Item>
            <Menu.Item name="Settings" disabled>
              <Icon name="cogs" />
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
  showAddWidgetModal: PropTypes.func.isRequired,
  showDashboardSidebar: PropTypes.func.isRequired,
  hideDashboardSidebar: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  const ids = state.widgets.ids;
  const layout = state.widgets.grid.layout;
  const showSidebar = state.widgets.showSidebar;
  return { ids, layout, showSidebar };
};

export const mapDispatchToProps = dispatch => bindActionCreators({
  showAddWidgetModal,
  showDashboardSidebar,
  hideDashboardSidebar,
},
dispatch);


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
