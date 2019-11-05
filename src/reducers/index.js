import { combineReducers } from 'redux';
import offers from './offers';
import cart from './cart';

export default combineReducers({ offers, cart });