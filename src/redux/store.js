import { configureStore } from '@reduxjs/toolkit' 
import plans from './slice/plans'
import userReducer from './slice/user'

const store = configureStore({
  reducer : {
    user: userReducer,
    plans : plans
  }
})

export default store