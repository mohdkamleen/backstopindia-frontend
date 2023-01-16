import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  coustomer: {
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
    },
    profile: {
      name: "",
      phone: "",
      email: ""
    },
    payment: {
      status: "",
      paymentId: "",
      price: ""
    },
    expire : {
      status:"",
      date:""
    }
  }
}

const coustomerSlice = createSlice({
  name: 'coustomer',
  initialState,
  reducers: {
    addAll(state, action) {
      state.coustomer = action.payload
    },

  },
  extraReducers: () => { }
})

export const { addAll } = coustomerSlice.actions
export default coustomerSlice.reducer