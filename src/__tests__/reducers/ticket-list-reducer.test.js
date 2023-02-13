import ticketListReducer from '../../reducers/ticket-list-reducer';

describe ('ticketListReducer', () => {
  TextDecoderStream('Should return default state if no action type is passed into the reducer', ()=> {
    expect(ticketListReducer({}, { type: null })).toEqual({});
  });
});