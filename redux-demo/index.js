console.log("from index .js")


// three core concepts 
// store that holds the state of your application
// action that describes what happened in the application
// reducer which handles the action and decides how to update the state.

// three principle

// first principle
// the global state of your application is stored as an object inside a single store
// Maintain our application state in a single object which would be managed by the redux store.


// second principle 
// the only way to change the state is to dispatch an action, an object that describes what happened.
// to update the state of your application. you need to let redux know about that with an action
// not allowed to directly update the state object

// third principle
// to specify how the state tree is updated based on actions, you write pure reducers
// reducer = (previous state, action) => newState


// Actions


// actions are the only way your application can interact with the store
// carry some info from your app tho the redux store
// plain javascript object
// Have a 'type' property that describes something that happened in the application
// type property id defined as a string constant




const CAKE_ORDERED = "CAKE_ORDERED" // action string constant

// action with type property

{
    type: CAKE_ORDERED,
        quantity: 1,
}

// action creator create an action a function with action  type property
// a function that return action
// action with type property


function orderCake() {
    return {
        type: CAKE_ORDERED,
        quantity: 1,
    }
}


// reducers
// specify how the apps state changes in response to actions sent to the store
// function that accepts state and action as arguments , and returns the next state of the application

// (previousState , action) => newState

const initialState = {
    numOfCakes: 10,
    anotherProperty: 0,
}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case CAKE_ORDERED:
            return {
                ...state,
                numOfCakes: state.numOfCakes - 1
            }
        default:
            return state
    }
}



// redux store

// one store for entire application

// responsibilities

// Holds application state
// allows access to state via getState()
// allows state to be updated via dispatch(action)
// it gives dispatch method to update
// registers listeners via subscribe(listener)
//          subscribe method register listener the store also allows our application to register listeners through subscribe method
// subscribe method accepts function as argument it execute anytime change in state redux
// we can unsubscribe to the store it with returned function by subscribe method
/// Handles unresisting of listeners via the function returned by subscribe(listener)


// the store has to hold application state

// middleware

// is the suggested way to extend redux with functionally

// provides a third party extension point between dispatching an action, and the moment it reaches the reducer
// use middleware for logging, crash reporting, performing asynchronous tasks etc.