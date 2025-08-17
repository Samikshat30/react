import React from 'react'
import Navbar from './componets/Navbar'
import Footer from './componets/footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <main className='display'></main>
      <Footer/>
    </div>
  )
}

export default App