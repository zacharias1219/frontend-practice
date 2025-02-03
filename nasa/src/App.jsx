import Footer from "./components/Footer"
import Main from "./components/Main"
import SideBar from "./components/SideBar"
import { useState } from 'react'

function App() {
  const [showModal, setShowModal] = useState(false)
  return (
    <>
      <Main />
      {showModal && (
      <SideBar/>)
      }
      <Footer />
    </>
  )
}

export default App
