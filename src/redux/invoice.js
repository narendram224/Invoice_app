import { createSlice } from "@reduxjs/toolkit"

export const invoiceSlice = createSlice({
  name: "invoice",
  initialState: {
    invoiceInfo: [],
    selectedInvoice: {},
    isListActive: true,
    selectedStatus: "",
    toggleView: false,
  },
  reducers: {
    saveInvoiceData: (state, action) => {
      state.invoiceInfo.push(action.payload)
    },
    saveSelectedInvoice: (state, action) => {
      state.selectedInvoice = action.payload
    },
    activeInvoiceList: (state, action) => {
      state.isListActive = action.payload
    },
    saveSelectedFilter: (state, action) => {
      state.selectedStatus = action.payload
    },
    toggleInvoice: (state, action) => {
      if (action.payload) {
        state.toggleView = action.payload
      } else {
        state.toggleView = !state.toggleView
      }
    },
  },
})

// this is for dispatch
export const {
  saveInvoiceData,
  saveSelectedInvoice,
  activeInvoiceList,
  saveSelectedFilter,
  toggleInvoice,
} = invoiceSlice.actions

// this is for configureStore
export default invoiceSlice.reducer
