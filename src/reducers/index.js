import { combineReducers } from 'redux';
import { rootReducer as transitReducer } from '@databraid/transit-widget/lib';

console.log(transitReducer);
export default combineReducers({
  transit_widget: transitReducer,
});
