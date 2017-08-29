import { combineReducers } from 'redux';
import { rootReducer as transitReducer } from '@databraid/transit-widget/lib';
import { rootReducer as githubReducer } from '@databraid/github-widget/lib';
// remove eslint exception when slack widget is implemented
/* eslint-disable no-unused-vars  */
import {
  TRANSIT_WIDGET_ID,
  SLACK_WIDGET_ID,
  GITHUB_WIDGET_ID,
  ADD_WIDGET,
  SHOW_ADD_WIDGET_MODAL,
} from '../constants';

const initialState = {
  ids: [GITHUB_WIDGET_ID],
  byId: {},
  showAddWidgetModal: false,
};


const widgets = (state = initialState, action) => {

  switch(action.type){

    case ADD_WIDGET:
    console.log('state>>>>>', state);
      if(action.id === TRANSIT_WIDGET_ID && !state.ids.includes(TRANSIT_WIDGET_ID)){
        return {
          ...state,
          ids: [...state.ids, TRANSIT_WIDGET_ID],
          showAddWidgetModal: false,
        };
      }
      else if(action.id === GITHUB_WIDGET_ID && !state.ids.includes(GITHUB_WIDGET_ID)){

        return {
          ...state,
          ids: [...state.ids, GITHUB_WIDGET_ID],
          showAddWidgetModal: false,
        };
      }
      else if(action.id === SLACK_WIDGET_ID && !state.ids.includes(SLACK_WIDGET_ID)){

        return {
          ...state,
          ids: [...state.ids, SLACK_WIDGET_ID],
          showAddWidgetModal: false,
        };
      }
      else{
        return {
          ...state,
          showAddWidgetModal: false,
        };
      }

    case SHOW_ADD_WIDGET_MODAL:
      return {
        ...state,
        showAddWidgetModal: true,
      };

    default:
      return {
        ...state,
        byId: {
          [TRANSIT_WIDGET_ID]: transitReducer(state.byId[TRANSIT_WIDGET_ID], action),
          [GITHUB_WIDGET_ID]: githubReducer(state.byId[GITHUB_WIDGET_ID], action),
        }
      };
  }
}

const rootReducer = combineReducers({
  widgets,
});

export default rootReducer;
