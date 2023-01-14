import { useState } from "react"
import { Provider } from "react-redux"
import store from "./store/store"

function App() {
  return (
    <Provider store={store}>
      {/* <ApiProvider api={todoApi}> */}
      {/* </ApiProvider> */}
    </Provider>
  )
}

export default App
