import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'


const initialState = {
    loading: false,
    users: [],
    error: "",
}

// Generate pending, fulfilled and rejected action type
export const fetchUsers = createAsyncThunk('user/fetchUsers', async () => { // created async thunk dispaches lifecycle methods of promise as actions
    const response = await axios
        .get('https://jsonplaceholder.typicode.com/users')
    return response.data
})

// we have successfully handle redux toolkit
// to create async action we need to create async thunk function the callback function will contain async login and return logic
// the function returns action type

const userSlice = createSlice({
    name: "user",
    initialState,
    extraReducers: builder => { // using builder we can add cases to promise life cycle methods

        builder.addCase(fetchUsers.pending, state => {
            state.loading = true
        });

        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.loading = false
            state.users = action.payload
            state.error = ""
        })

        builder.addCase(fetchUsers.rejected, (state, action) => {
            state.loading = false
            state.users = []
            state.error = action.error.message
        })
    }
})

// export default userSlice.reducer
export default userSlice.reducer;