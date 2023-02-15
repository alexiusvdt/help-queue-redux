## Implementing Redux

# In this repo:
  * review testing
  * implement reducers/state mgmt
  * adding Redux/ReactRedux bindings to a project

# package info

`$ npm install redux@4.2.0 react-redux@8.0.2`

# Adding Redux Store 
*view commit history to see the app changes!

  Begin
  * in `src/index.js` entrypoint
  * import `{createStore}` from redux and `reducer`
  * create the `store` const
  * import `{ Provider }` from react-redux
  * wrap `<App />` inside of `<Provider>`
  * pass `store` into `<Provider>` as a prop
  * add `connect()` to components that need access to `store` (in this case, ticketControl)
  Reducers
  * build reducers & combine into rootReducer
  Implement reducers
  * pass the root reducer into store in src/index.js entrypoint
  * update any mapping functions to handle new state slices
  * remove functions from Controller state as Redux will handle that
  * refactor any actions as needed
  * ensure Control rcvs info from this.props (as props are now mapped from the store instead of this.state (ie the component state))

## Action Creators/Constants
  * action creators DRY up code. Instead of:
  ```const action = {
    type: 'DELETE_TICKET`,
    id: id
  }```
  We can instead make a function to handle the del action:
  ``` const deleteTicket = id => ({
    type: 'DELETE_TICKET',
    id
  })```


## Coursework links

This project contains all the code from the LearnHowToProgram.com [Section 2: React Fundamentals](https://www.learnhowtoprogram.com/react/react-fundamentals) coursework in which we created a Help Queue application in [React.js](https://reactjs.org/). 

It is meant to be used as a starter repo to continue the Help Queue project in three separate learning sections of [the _React_ course](https://www.learnhowtoprogram.com/react) on LearnHowToProgram.com: 

* Section 3 "React with Redux", starting in the lesson titled ["Setting up Our First Redux Project"](https://www.learnhowtoprogram.com/react/react-with-redux/setting-up-our-first-project). 


* Section 4 "React with NoSQL", starting in the lessons titled ["Refactoring Help Queue to Use Hooks"](https://www.learnhowtoprogram.com/react/react-with-nosql/refactoring-help-queue-to-use-hooks).
* Section 5 "React with APIs", starting in the lesson title ["React Context"](https://www.learnhowtoprogram.com/react/react-with-apis/react-context)

---

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
