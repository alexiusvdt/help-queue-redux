// REDUCER — this is the same code we wrote in our previous app.

const ticketListReducer = (state = {}, action) => {
  const { names, location, issue, id } = action;
  switch (action.type) {
  case 'ADD_TICKET':
    return Object.assign({}, state, {
      [id]: {
        names: names,
        location: location,
        issue: issue,
        id: id
      }
    });
  case 'DELETE_TICKET':
    const newState = { ...state };
    delete newState[id];
    return newState;
  default:
    return state;
  }
};

// REDUX STORE — Everything below this line is new code!
//destructure createstore func
const { createStore } = Redux;

//create the store, taking the reducer as arg
//always call it a const, let redux worry about mutability details
const store = createStore(ticketListReducer);

//no ui, so lets peek at store for the initial state
console.log(store.getState());

//we subscribe to the store via subscribe() and store that in a const called unsubscribe.
//pass an anon func to store.subscribe(). every time there's a change in store, our sub will trigger causing console.log to trigger
const unsubscribe = store.subscribe(() => console.log(store.getState()));


store.dispatch({
  type: 'ADD_TICKET',
  names: 'Quark and Brunt',
  location: '2a',
  issue: 'the workers want "fair" wages.',
  id: 1
});

store.dispatch({
  type: 'ADD_TICKET',
  names: 'Odo and The Dominion',
  location: '3b',
  issue: 'Odo doesnt like us any more :( ).',
  id: 2
});

store.dispatch({
  type: 'DELETE_TICKET',
  id: 2
});

// now that we're subbed, every dispatch will trigger our sub and log result of store.getState() in console

// now we actually unsub to stop listening for updates
unsubscribe();

//note that combining redux and react we typically dont use subscribe()
// R & Rdux handle optimizing the process, generally speaking