import * as actions from './../../actions';

describe('Help Queue actions', () => {
  it('deleteTicket should create DELETE_TICKET action', () => {
    expect(actions.deleteTicket(1)).toEqual({
      type: 'DELETE_TICKET',
      id: 1
    });
  });
  
  it('toggleForm should create TOGGLE_FORM action', () => {
    expect(actions.toggleForm()).toEqual({
      type: 'TOGGLE_FORM'
    });
  });
  it('addTicket should create ADD_TICKET action', () => {
    expect(actions.addTicket({
      type: 'ADD_TICKET',
      names: 'Sisko and Jadzia',
      location: 'Bajor',
      issue: 'The Dominion is messing everything up again.',
      id: 1 
    })).toEqual({
      names: 'Garak and Bashir',
      location: 'Quarks',
      issue: 'Redux action is not working.',
      id: 2
    });
  });
});