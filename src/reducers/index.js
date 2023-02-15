import formVisibleReducer from './form-visible-reducer';
import ticketListReducer from './ticket-list-reducer';
import { combineReducers } from 'redux';
//import  needed reducers & unpack combineReducers (core Redux function)

//declare rootReducer and set keys/values
const rootReducer = combineReducers({
  //key represents our state slice & value represents the reducer that handles actions related to that slice
  formVisibleOnPage: formVisibleReducer,
  mainTicketList: ticketListReducer
});

export default rootReducer;