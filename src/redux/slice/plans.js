import { createSlice } from '@reduxjs/toolkit' 

const initialState = { 
    os: "",
    range: "",
    imei: "",
    plan : {
      price : "",
      duration: "",
      title:"",
      desc:""
    }
}

const plansSlice = createSlice({
  name: 'plans',
  initialState,
  reducers: { 
    addPhone(state, action) { 
      state.os = action.payload.os
      state.range = action.payload.range
      state.imei = action.payload.imei
    },
    addPlans(state, action) { 
      state.plan = action.payload 
    },
    
  },
  extraReducers: () => {  }
})
 
export const { addPhone, addPlans } = plansSlice.actions
export default plansSlice.reducer