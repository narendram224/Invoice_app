import { combineReducers } from "redux"
import invoiceReducer from "./invoice"
export default combineReducers({
  invoice: invoiceReducer,
})
