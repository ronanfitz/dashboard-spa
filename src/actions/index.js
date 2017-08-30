import {
  TRANSIT_WIDGET_ID,
  SLACK_WIDGET_ID,
  GITHUB_WIDGET_ID,
  ADD_WIDGET,
  SHOW_ADD_WIDGET_MODAL,
  HIDE_ADD_WIDGET_MODAL,
} from '../constants';

export function addTransitWidget(){
  return {type: ADD_WIDGET, id: TRANSIT_WIDGET_ID}
}

export function addGithubWidget(){
  return {type: ADD_WIDGET, id: GITHUB_WIDGET_ID}
}

export function addSlackWidget(){
  return {type: ADD_WIDGET, id: SLACK_WIDGET_ID}
}

export function showAddWidgetModal(){
  return {type: SHOW_ADD_WIDGET_MODAL}
}

export function hideAddWidgetModal(){
  return {type: HIDE_ADD_WIDGET_MODAL}
}
