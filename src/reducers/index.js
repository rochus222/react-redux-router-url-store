import { combineReducers } from 'redux';
import items from './items';
import { connectRouter } from 'connected-react-router';

export default history => combineReducers({ router: connectRouter(history), items });