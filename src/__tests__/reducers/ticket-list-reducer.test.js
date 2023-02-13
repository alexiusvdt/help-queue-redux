import ticketListReducer from '../../reducers/ticket-list-reducer';

describe ('ticketListReducer', () => {
  //declare constants for all tests
  let action;
  const ticketData = {
    names: 'Garak and Bashir',
    location: 'Quarks',
    issue: 'Redux action is not working.',
    id: 1
  };
  
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
    })
  });

  test('Should return default state if no action type is passed into the reducer', ()=> {
    expect(ticketListReducer({}, { type: null })).toEqual({});
  });
});