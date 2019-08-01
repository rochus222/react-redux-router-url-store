import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'
import App from './App';
import * as serviceWorker from './serviceWorker';
import { routerMiddleware, push } from 'connected-react-router'
import { createBrowserHistory } from 'history';
import createSagaMiddleware from 'redux-saga';
import { getItemPath } from './util/path-utils';

import mySaga from './saga';

export const history = createBrowserHistory()

const middleware = store => next => action => {
    if (action.type === "ADD_ITEM") {
        const state = store.getState();
        store.dispatch(push(`${state.router.location.pathname}?${getItemPath([...state.items, action.data])}`));
    }
    next(action);
}

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer(history), applyMiddleware(sagaMiddleware, middleware, routerMiddleware(history)));

sagaMiddleware.run(mySaga);

store.dispatch({ type: "INIT_APP" });

ReactDOM.render(<Provider store={store}>
    <App />
</Provider>, document.getElementById('root'));

serviceWorker.unregister();
