import { configureStore } from "@reduxjs/toolkit"
import invoiceReducer from "./invoice"

export default configureStore({
  reducer: { invoice: invoiceReducer },
  devTools: process.env.NODE_ENV !== "production",
})
