import { configureStore } from '@reduxjs/toolkit' 
import plans from './slice/plans'
import userReducer from './slice/user'
import coustomerReducer from './slice/coustomer'
import adminReducer from './slice/admin'

const store = configureStore({
  reducer : {
    user: userReducer,
    plans : plans,
    coustomer: coustomerReducer,
    admin:adminReducer
  }
})

export default store