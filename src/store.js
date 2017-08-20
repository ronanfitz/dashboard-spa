// import { createStore, applyMiddleware } from 'redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';

import thunkMiddleware from 'redux-thunk';
import { TRANSIT_API } from '@databraid/transit-widget/lib';
import { GITHUB_API } from '@databraid/github-widget/lib';
import rootReducer from './reducers';

// /* eslint-disable no-underscore-dangle */
// const store = createStore(
//   rootReducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
//   applyMiddleware(thunkMiddleware.withExtraArgument({ TRANSIT_API, GITHUB_API })),
//   // applyMiddleware(...middleware),
// );
//
// if (module.hot) {
//   console.log('HOT dashboard');
//
//   module.hot.accept();
// }
//
// export default store;
//

export default function configureStore() {
  if (module.hot) {
    console.log('HOT dashboard');

    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducers/index', () => {
      const nextRootReducer = combineReducers(require('./reducers/index'));
      store.replaceReducer(nextRootReducer);
    });
  }

  const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunkMiddleware.withExtraArgument({ TRANSIT_API, GITHUB_API })),
    // applyMiddleware(...middleware),
  );

  return store;
}
