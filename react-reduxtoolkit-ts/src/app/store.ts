import { configureStore } from "@reduxjs/toolkit";
// import reduxLogger from 'redux-logger'
import cakeReducer from "../features/cake/cakeSlice.ts";
import icecreamReducer from "../features/icecream/icecreamSlice.ts";
import userReducer from "../features/user/userSlice.ts";

// const logger = reduxLogger.createLogger()

const store = configureStore({
  reducer: {
    cake: cakeReducer,
    icecream: icecreamReducer,
    user: userReducer,
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
  // by default configureStore function add some middleware
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
// we are going to use this type to selector and dispatch hooks
