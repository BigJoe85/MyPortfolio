import React from 'react'
import NavBar from './Components/NavBar'
import Footer from './Components/Footer'
import { Outlet } from 'react-router-dom'
import { motion, useScroll } from "motion/react"

const App = () => {
  const { scrollYProgress } = useScroll()
  return (
    <div className='text-[#e8e8e8] w-full'>
      {/* w-full max-w-[1100px] mx-auto px-4 pt-60 py-8 max-md:pt-40 */}
      <div className=''>
        <motion.div
          style={{
            scaleX: scrollYProgress,
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            height: 9,
            originX: 0,
            backgroundColor: "#f54c0f",
            zIndex: 50,
          }}
        />
        <NavBar />
        <Outlet />
        <Footer />


      </div>
    </div>
  )
}

export default App
