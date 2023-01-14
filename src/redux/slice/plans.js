import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  os: "",
  range: "",
  imei: "",
  bill: "",
  phoneImg: [],
  plan: {
    price: "",
    duration: "",
    title: "",
    desc: ""
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
    addBill(state, action) {
      state.bill = action.payload
    },

  },
  extraReducers: () => { }
})

export const { addPhone, addPlans, addBill } = plansSlice.actions
export default plansSlice.reducer