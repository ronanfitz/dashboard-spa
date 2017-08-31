import React from 'react';
import { Button, Header, Icon, Modal } from 'semantic-ui-react';
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
// import {
//   removeWidget,
// } from '../../actions';

const WidgetContainer = (props) => {



  if (props.id === TRANSIT_WIDGET_ID) {
    return <TransitComponent widgetId={props.id} />;
  }
  if (props.id === GITHUB_WIDGET_ID) {
    return <GithubComponent widgetId={props.id} />;
  }
  if (props.id === SLACK_WIDGET_ID) {
    return <SlackComponent widgetId={props.id} />;
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
  return { ids, id };
};

export const mapDispatchToProps = dispatch => bindActionCreators({
  // removeWidget,
},
dispatch);


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(WidgetContainer);
