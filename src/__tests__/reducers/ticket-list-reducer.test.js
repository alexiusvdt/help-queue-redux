import ticketListReducer from '../../reducers/ticket-list-reducer';

describe ('ticketListReducer', () => {
  //declare constants for all tests
  let action;
  const currentState = {
    1: {
    names: 'Garak and Bashir',
    location: 'Quarks',
    issue: 'Redux action is not working.',
    id: 1
  }, 2: {
    names: 'Sisko and Jadzia',
    location: 'Bajor',
    issue: 'The Dominion is messing everything up again.',
    id: 2    
    }
  }

  const ticketData = {
    names: 'Garak and Bashir',
    location: 'Quarks',
    issue: 'Redux action is not working.',
    id: 1
  };

  test('Should successfully delete a ticket', () => {
    action = {
      type: 'DELETE_TICKET',
      id: 1
    };
    expect(ticketListReducer(currentState, action)).toEqual({
      2: {
        names: 'Sisko and Jadzia',
        location: 'Bajor',
        issue: 'The Dominion is messing everything up again.',
        id: 2  
      }
    });
  });


  test('Should successfully add new ticket data to mainTicketList', () => {
    const {names, location, issue, id} = ticketData;
    action = {
      type: 'ADD_TICKET',
      names: names,
      location: location,
      issue: issue,
      id: id
    };
  
    expect(ticketListReducer({}, action)).toEqual({
      [id] : {
        names: names,
        location: location,
        issue: issue,
        id: id
      }
    });
  });

  test('Should return default state if no action type is passed into the reducer', ()=> {
    expect(ticketListReducer({}, { type: null })).toEqual({});
  });
});