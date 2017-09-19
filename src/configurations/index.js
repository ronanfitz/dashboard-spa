import {
  TRANSIT_WIDGET,
  SLACK_WIDGET,
  GITHUB_WIDGET,
  SHEET_WIDGET,
} from '../constants';

export default [
  {
    type: 'transit',
    initHeight: 8,
    initWidth: 6,
    minHeight: 4,
    minWidth: 3,
  },
  {
    type: 'github',
    initHeight: 8,
    initWidth: 6,
    minHeight: 4,
    minWidth: 3,
  },
  {
    type: 'slack',
    initHeight: 6,
    initWidth: 4,
    minHeight: 4,
    minWidth: 3,
  },
  {
    type: 'sheets',
    initHeight: 8,
    initWidth: 8,
    minHeight: 4,
    minWidth: 3,
  },
];
