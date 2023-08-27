import "./App.css"
import Main from "./components/Main"
import Sidebar from "./components/Sidebar"

function App() {
  return (
    <>
      <div className="container">
        <div className="wrapper">
          <Sidebar />
          <Main />
        </div>
      </div>
    </>
  )
}

export default App
