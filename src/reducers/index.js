import { combineReducers } from 'redux';
import offers from './offers';
import cart from './cart';
import purchases from './purchases';

export default combineReducers({ offers, cart, purchases });