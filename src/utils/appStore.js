import { configureStore } from '@reduxjs/toolkit'

const Appstore = configureStore({ 
    reducer: {},
 })
// The store now has redux-thunk added and the Redux DevTools Extension is turned on

export default Appstore;