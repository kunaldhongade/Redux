
// actions 

// synchronous actions
// as soon as an action was dispatched, the state was immediately updated.
// if you dispatch the CAKE_ORDERED action, the numOfCakes was right away decremented by 1.
// same with ICECREAM_ORDERED action as well


// async actions
// Asynchronous API calls to fetch data from an end point and use that data in your application
// our application fetches a list of users from an api end point and stores it in the redux store.
// state? look like
// action? different
// Reducer? works

// state of application

// first typically data fetching three property of state object
// 1. loading : true
// 2. data : []
// 3. error: ''

// loading - -Display a loading spinner in your component
// data - list of users
// error - display error to the user

// Actions
// three actions 
// 1. describe list of users requested using api endpoint
//          FETCH_USERS_REQUESTED - fetch list users
// 2. second and third dependent on first one
//          FETCH_USERS_SUCCEEDED - fetched successfully
// 3. FETCH_USERS_FAILED - failed


// Reducers

// case FETCH_USERS_REQUESTED
// loading : true

// case FETCH_USERS_SUCCEEDED
// loading : false
// users: data{from api}


// FETCH_USERS_FAILED
// loading: false
// error: error(from api)

const redux = require('redux');
const thunkMiddleware = require('redux-thunk').default

const axios = require('axios')


const applyMiddleware = redux.applyMiddleware
const createStore = redux.createStore



const initialState = {
    loading: false,
    users: [],
    error: "",
}

const FETCH_USERS_REQUESTED = "FETCH_USERS_REQUESTED"
const FETCH_USERS_SUCCEEDED = "FETCH_USERS_SUCCEEDED"
const FETCH_USERS_FAILED = "FETCH_USERS_FAILED"

const fetchUsersRequest = () => {
    return {
        type: FETCH_USERS_REQUESTED
    }
}

const fetchUsersSuccess = (users) => {
    return {
        type: FETCH_USERS_SUCCEEDED, // Corrected action type constant
        payload: users,
    }
}

const fetchUsersFailure = (err) => {
    return {
        type: FETCH_USERS_FAILED,
        payload: err
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USERS_REQUESTED:
            return {
                ...state,
                loading: true
            }

        case FETCH_USERS_SUCCEEDED:
            return {
                ...state,
                loading: false,
                users: action.payload,
                err: ''
            }
        case FETCH_USERS_FAILED:
            return {
                ...state,
                loading: false,
                users: [],
                err: action.payload
            }

        default: {
            return state
        }
    }
}

// thunkMiddleware makes action creator return a function instead of action object

const fetchUsers = () => {
    return function (dispatch) {
        dispatch(fetchUsersRequest())
        axios
            .get('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                // response.data is the users
                const users = response.data.map((user) => user.id)
                dispatch(fetchUsersSuccess(users))
            })
            .catch((err) => {
                // error.message is the error message
                dispatch(fetchUsersFailure(err.message))
            })
    }
}
const store = createStore(reducer, applyMiddleware(thunkMiddleware))

const unsubscribe = store.subscribe(() => { console.log(store.getState()) })
store.dispatch(fetchUsers())
unsubscribe()
