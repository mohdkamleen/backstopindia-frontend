import { createSlice } from '@reduxjs/toolkit' 

const initialState = { 
    os: "",
    range: "",
    imei: "" 
}

const plansSlice = createSlice({
  name: 'plans',
  initialState,
  reducers: { 
    addPlans(state, action) { 
      state.os = action.payload.os
      state.range = action.payload.range
      state.imei = action.payload.imei
    }
  },
  extraReducers: () => {  }
})
 
export const { addPlans } = plansSlice.actions
export default plansSlice.reducer