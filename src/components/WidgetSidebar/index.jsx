import React from 'react';
import { Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  showWidgetSidebar,
  hideWidgetSidebar,
} from '../../actions';

const WidgetSidebar = (props) => {
  <div className="side-strip">
    <Icon
      className="close-widget"
      name={props.showSidebar ? 'chevron right' : 'ellipsis vertical'}
      onClick={props.showSidebar ? () => props.hideWidgetSidebar(props.id) : () => props.showWidgetSidebar(props.id)}
    />
  </div>
}

WidgetSidebar.propTypes = {
  ids: PropTypes.arrayOf(PropTypes.string).isRequired,
  id: PropTypes.number.isRequired,
  removeWidget: PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.id;
  return { id };
};

export const mapDispatchToProps = dispatch => bindActionCreators({
  showWidgetSidebar,
  hideWidgetSidebar,
},
dispatch);


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(WidgetSidebar);
