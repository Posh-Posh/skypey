import { combineReducers } from 'redux';
import user from './user';
import contacts from './contacts';
import activeUserId from './activeUserId';
import messages from './messages';
import typing from './typing';

export default combineReducers({
    activeUserId,    
    contacts /* = object key */: contacts /* = reducer*/,  // ES6 = contacts      
    messages,
    typing,
    user /* = object key */: user /* = reducer*/, // ES6 = user 
})