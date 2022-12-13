import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./page/HomePage"
import store from "./redux/store"
import { Provider } from "react-redux"

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>
  )
}

export default App
