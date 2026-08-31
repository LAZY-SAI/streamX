import Loading from "./loading"
import './App.css'
import { Route, Routes } from "react-router-dom"
// import Layout from "./layout/layout"
import Landing from "./landing"

function App() {

  return (
    <>
      <Routes>
       
        <Route path="/landing" element={<Landing />} />
         <Route path="/" element={<Loading />} />
      </Routes>
    </>
  )
}

export default App
