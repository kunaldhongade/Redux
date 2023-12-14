const redux = require('redux');
const createStore = redux.createStore
const bindActionCreators = redux.bindActionCreators
const combineReducers = redux.combineReducers
const applyMiddleware = redux.applyMiddleware


const reduxLogger = require('redux-logger');
const logger = reduxLogger.createLogger()


const CAKE_ORDERED = "CAKE_ORDERED" // action string constant
const CAKE_RESTOCKED = "CAKE_RESTOCKED" // ACTION TYPE event happened
const ICECREAM_ORDERED = "ICECREAM_ORDERED"
const ICECREAM_RESTOCKED = "ICECREAM_RESTOCKED"


// const initialState = {
//     numOfCakes: 10,
//     numOfIcecream: 10,
// }

const initialCakeState = {
    numOfCakes: 10
}
const initialIcecreamState = {
    numOfIcecream: 20
}


function orderCake() {
    return {
        type: CAKE_ORDERED, // action
    }
}

function restockCake(qty = 1) {
    return {
        type: CAKE_RESTOCKED,
        payload: qty
    }
}

const orderIcecream = (qty = 1) => {
    return {
        type: ICECREAM_ORDERED,
        payload: qty
    }
}

const restoreIcecream = (qty = 1) => {
    return {
        type: ICECREAM_RESTOCKED,
        payload: qty
    }
}


const cakeReducer = (state = initialCakeState, action) => {
    switch (action.type) {
        case CAKE_ORDERED:
            return {
                ...state,
                numOfCakes: state.numOfCakes - 1
            }
        case CAKE_RESTOCKED:
            return {
                ...state,
                numOfCakes: state.numOfCakes + action.payload
            }

        default:
            return state
    }
}



const icecreamReducer = (state = initialIcecreamState, action) => {
    switch (action.type) {
        case ICECREAM_ORDERED:
            return {
                ...state,
                numOfIcecream: state.numOfIcecream - action.payload
            }
        case ICECREAM_RESTOCKED:
            return {
                ...state,
                numOfIcecream: state.numOfIcecream + action.payload
            }

        default:
            return state
    }
}


// const reducer = (state = initialState, action) => {
//     switch (action.type) {
//         case CAKE_ORDERED:
//             return {
//                 ...state,
//                 numOfCakes: state.numOfCakes - 1
//             }
//         case CAKE_RESTOCKED:
//             return {
//                 ...state,
//                 numOfCakes: state.numOfCakes + action.payload
//             }

//         case ICECREAM_ORDERED:
//             return {
//                 ...state,
//                 numOfIcecream: state.numOfIcecream - action.payload
//             }
//         case ICECREAM_RESTOCKED:
//             return {
//                 ...state,
//                 numOfIcecream: state.numOfIcecream + action.payload
//             }

//         default:
//             return state
//     }
// }

const rootReducer = combineReducers({
    cake: cakeReducer,
    icecream: icecreamReducer,
})


const store = createStore(rootReducer, applyMiddleware(logger))

// redux store holding application state

console.log('initial State', store.getState())


const unsubscribe = store.subscribe(() => { })


// store gives dispatch method to update state
// store.dispatch(orderCake())
// store.dispatch(orderCake())
// store.dispatch(orderCake())

// store.dispatch(restockCake(3))


const actions = bindActionCreators({ orderCake, restockCake, orderIcecream, restoreIcecream }, store.dispatch)
actions.orderCake()
actions.orderCake()
actions.orderCake()
actions.orderCake()

actions.orderIcecream()
actions.orderIcecream()


actions.restoreIcecream(2)
actions.restockCake(3)

unsubscribe()
