import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import promiseMiddleware from 'redux-promise-middleware'
import createHistory from 'history/createBrowserHistory'
import { createScrollMiddleware } from 'react-redux-scroll'

import rootReducer from './reducers/index'
const history = createHistory()

let prevLocation = {};
history.listen(location => {
  const pathChanged = prevLocation.pathname !== location.pathname;
  const hashChanged = prevLocation.hash !== location.hash;
  if (pathChanged || hashChanged) window.scrollTo(0, 0);
  prevLocation = location;
});

const routerStuff = routerMiddleware(history)

export { history }

const middleware = applyMiddleware(routerStuff, promiseMiddleware(), createScrollMiddleware())

const enhancers = process.env.NODE_ENV === 'development' ?
									compose(middleware, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) :
									middleware

const store = createStore(rootReducer, {}, enhancers)

export default store
