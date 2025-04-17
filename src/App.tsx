import { Outlet } from 'react-router-dom'
import './App.css'

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

// const arrayOfNaruto = [
//   {
//     id: "1344",
//     name: "Naruto Uzumaki",
//     images: "https://static.wikia.nocookie.net/naruto/images/d/d6/Naruto_Part_I.png"
//   },
//   {
//     id: "1307",
//     name: "Sasuke Uchiha",
//     images: "https://static.wikia.nocookie.net/naruto/images/2/21/Sasuke_Part_1.png"
//   }
// ]

function App() {

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
    )
}

export default App
