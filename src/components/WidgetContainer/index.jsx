import React from 'react';
import {
  Button,
  Header,
  Icon,
  Modal,
  Sidebar,
  Segment,
  Menu
} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TransitComponent from '@databraid/transit-widget/lib';
import SlackComponent from '@databraid/slack-widget/lib';
import GithubComponent from '@databraid/github-widget/lib';
import {
  TRANSIT_WIDGET_ID,
  SLACK_WIDGET_ID,
  GITHUB_WIDGET_ID,
} from '../../constants';
import {
  removeWidget,
  showWidgetSidebar,
  hideWidgetSidebar,
} from '../../actions';

const WidgetContainer = (props) => {
  if (props.id === TRANSIT_WIDGET_ID) {
    return (
      <div className="widget-container">
      
        <div className="side-strip" id="">
          <Icon
            className="close-widget"
            name={props.showSidebar ? 'chevron right' : 'ellipsis vertical'}
            onClick={props.showSidebar ? () => props.hideWidgetSidebar(props.id) : () => props.showWidgetSidebar(props.id)}
          />
        </div>



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
            <Menu.Item name="delete-widget" onClick={() => props.removeWidget(props.id)}>
              <Icon name="remove" />
              Delete Widget
            </Menu.Item>
            <Menu.Item name="settings" disabled>
              <Icon name="tasks" />
              Configs
            </Menu.Item>
          </Sidebar>
          <Sidebar.Pusher>
            <Segment basic>

              <TransitComponent widgetId={props.id} />

            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>

      </div>
    );
  }
  if (props.id === GITHUB_WIDGET_ID) {
    return (
      <div className="widget-container">
      <div className="side-strip">
        <Icon className="close-widget" name="remove" onClick={() => props.removeWidget(props.id)}/>
      </div>
        <GithubComponent widgetId={props.id} />
      </div>
    );
  }
  if (props.id === SLACK_WIDGET_ID) {
    return (
      <div className="widget-container">
      <div className="side-strip">
        <Icon className="close-widget" name="remove" onClick={() => props.removeWidget(props.id)}/>
      </div>
        <SlackComponent widgetId={props.id} />
      </div>
    );
  }
  return (
    <div key={props.id} />
  );
}

WidgetContainer.propTypes = {
  ids: PropTypes.arrayOf(PropTypes.string).isRequired,
  id: PropTypes.number.isRequired,
  removeWidget: PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => {
  const ids = state.widgets.ids;
  const id = ownProps.id;
  const showSidebar = state.widgets.metadata.transit.showSidebar;//TODO - un-hardcode
  return { ids, id, showSidebar };
};

export const mapDispatchToProps = dispatch => bindActionCreators({
  removeWidget,
  showWidgetSidebar,
  hideWidgetSidebar,
},
dispatch);


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(WidgetContainer);
