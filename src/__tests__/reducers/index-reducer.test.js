import rootReducer from '../../reducers/index';
import { legacy_createStore as createStore } from 'redux';
// createStore is DEPRECATED! Used here for learning purposes only
import formVisibleReducer from '../../reducers/form-visible-reducer';
import ticketListReducer from '../../reducers/ticket-list-reducer';
import * as c from '../../actions/ActionTypes';

//we need this for our sanity checks
let store = createStore(rootReducer);

describe("rootReducer", () => {

  test('Should return default state if no action type is recognized', () => {
    expect(rootReducer({}, { type: null })).toEqual({
      //default state
      mainTicketList: {},
      formVisibleOnPage: false
    });
  });

  // 'sanity check' tests: did we combine our stuff correctly?
  test('Check that initial state of ticketListReducer matches root reducer', () => {
    expect(store.getState().mainTicketList).toEqual(ticketListReducer(undefined, { type: null }));
  });
  
  test('Check that initial state of formVisibleReducer matches root reducer', () => {
    expect(store.getState().formVisibleOnPage).toEqual(formVisibleReducer(undefined, { type: null }));
  });
  
  //set the action & dispatch to store
  //root reducer _should_ pass these correctly & be equal to the appropriate return
  test('Check that ADD_TICKET action works for ticketListReducer and root reducer', () => {
    const action = {
      type: c.ADD_TICKET,
      names: 'Sisko and Jadzia',
      location: 'Bajor',
      issue: 'The Dominion is messing everything up again.',
      id: 1  
    }
    store.dispatch(action);
    expect(store.getState().mainTicketList).toEqual(ticketListReducer(undefined, action));
  });
  
  test('Check that TOGGLE_FORM action works for formVisibleReducer and root reducer', () => {
    const action = {
      type: c.TOGGLE_FORM
        }
    store.dispatch(action);
    expect(store.getState().formVisibleOnPage).toEqual(formVisibleReducer(undefined, action));
  });

});