  
import './App.css'
import { Route, Routes } from "react-router-dom"
// import Layout from "./layout/layout"
import Landing from "./landing"

function App() {

  return (
    <>
      <Routes>
       
        <Route path="/" element={<Landing />} />
         
      </Routes>
    </>
  )
}

export default App
