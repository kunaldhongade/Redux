const createSlice = require('@reduxjs/toolkit').createSlice

const initialState = {
    numOfCakes: 10,
}
// create slice function automatically generate action creators
const cakeSlice = createSlice({ // create slice uses under the hood immer library
    name: 'cake',
    initialState: initialState,
    reducers: {
        // individual state transitions
        ordered: (state) => { // state and action as argument
            // we specify individual state transition
            // now we don't explicitly return the new state
            // we can directly mutate the state

            state.numOfCakes--
        },
        restocked: (state, action) => {
            state.numOfCakes += action.payload
        }
    },
})

// it also return main reducer function to redux store

module.exports = cakeSlice.reducer
module.exports.cakeActions = cakeSlice.actions

// this slice takes care of defining action type constant and action object and action creator switch statement in reducer and handling immutable update in reducer!

// redux toolkit abstract away all of that