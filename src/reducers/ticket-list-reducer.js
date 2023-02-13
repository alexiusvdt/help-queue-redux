const reducer = (state = {}, action) => {
  //ES6 object destructuring to take properties from action object into vars
  const { names, location, issue, id } = action;
  switch (action.type) {
    case 'ADD_TICKET':
      // object.assign clones the state obj, requiring 3 args: empty obj {} (to prevent mutating state of original),
      // object to be cloned, here ticketlist state, and returning value from object.assign(). 
      // this basically makes a copy of the state we passed in, changes the copy, then returns the altered version.
      return Object.assign({}, state, {
        [id]: {
        names: names,
        location: location,
        issue: issue,
        id: id
      }
    });
    default:
      return state;  
  }
};

export default reducer;