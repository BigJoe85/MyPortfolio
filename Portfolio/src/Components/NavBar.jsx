import { React, useState } from 'react'
import { UserRound, MonitorCheck, BriefcaseBusiness, BookText, Headset } from 'lucide-react'
import { NavLink } from "react-router-dom"
import { motion } from 'framer-motion'

const NavBar = () => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className='fixed top-16 max-md:top-7 left-1/2 -translate-x-1/2 w-[26rem] max-md:w-min h-[5rem] px-2 backdrop-blur-md border border-white/2 bg-white/2 justify-center items-center flex rounded-full z-50'>

      <div className='w-[25rem] max-md:w-min h-[4rem] px-4 bg-[#0c0c0e]/85 backdrop-blur-md flex justify-center items-center rounded-full shadow-[inset_0px_8px_6px_-7px_rgba(44,43,43,0.9)]'>
        <header>
          <div>
            <div className='text-[#a0a0a0] flex gap-3 justify-between items-center ' >

              <NavLink to='/'
                className={({ isActive }) => `hover:bg-white/25 shadow-[inset_0px_8px_20px_-5px_rgba(44,43,43,0.9),0_0_2px_1px_rgba(255,255,255,0.15)] rounded-full bg-[#0c0c0e] flex items-center justify-center bg-[url('https://res.cloudinary.com/duoy2tsyc/image/upload/v1783346155/Jul_6_2026_09_48_29_AM_uqraek.png')]  bg-no-repeat bg-center bg-[length:36px_40px] h-9 w-9 ${isActive ? 'text-[#f36207] w-10 h-10' : 'text-[#a0a0a0]'}`}>

              </NavLink>

              <NavLink to='/about' className={({ isActive }) => `hover:bg-white/25 shadow-[inset_0px_8px_20px_-5px_rgba(44,43,43,0.9),0_0_2px_1px_rgba(255,255,255,0.15)] rounded-full bg-[#0c0c0e] flex items-center justify-center h-9 w-9 ${isActive ? 'text-[#f36207] w-10 h-10' : 'text-[#a0a0a0]'}`}>
                <UserRound size={18} />

              </NavLink>

              <NavLink to='/projects' className={({ isActive }) => `hover:bg-white/25 shadow-[inset_0px_8px_20px_-5px_rgba(44,43,43,0.9),0_0_2px_1px_rgba(255,255,255,0.15)] rounded-full bg-[#0c0c0e] flex items-center justify-center h-9 w-9 ${isActive ? 'text-[#f36207] w-10 h-10' : 'text-[#a0a0a0]'}`}>
                <MonitorCheck size={18} />
              </NavLink>

              <NavLink to='/contact' className={({ isActive }) => `hover:bg-white/25 shadow-[inset_0px_8px_20px_-5px_rgba(44,43,43,0.9),0_0_2px_1px_rgba(255,255,255,0.15)] rounded-full bg-[#0c0c0e] flex items-center justify-center h-9 w-9 ${isActive ? 'text-[#f36207] w-10 h-10' : 'text-[#a0a0a0]'}`}>
                {/* <BriefcaseBusiness  />  */}
                <Headset size={18} />
              </NavLink>

              <a href="https://res.cloudinary.com/duoy2tsyc/raw/upload/v1783248135/Joshua_s_CV_NEW_bthqmu.docx" target="_blank" rel="noopener noreferrer" className='hover:bg-white/25 shadow-[inset_0px_8px_20px_-5px_rgba(44,43,43,0.9),0_0_2px_1px_rgba(255,255,255,0.15)] rounded-full bg-[#0c0c0e] flex items-center justify-center h-9 w-9'>
                <BookText size={18} />
              </a>

              <div className='bg-white/30 w-[0.6px] h-8 max-md:hidden'></div>

              <div className='bg-[#f55421] rounded-full overflow-hidden relative h-11 w-25 max-md:hidden'>

                <motion.a
                  href="https://wa.me/2348101817385"
                  target="_blank"
                  rel="noopener noreferrer"
                  onHoverStart={() => setIsHovered(true)}
                  onHoverEnd={() => setIsHovered(false)}
                  animate={{ y: isHovered ? -2 : 0 }}
                  transition={{ duration: 0.3 }}
                  className='shadow-[inset_0px_5px_8px_0px_rgba(255,215,190,0.65),inset_0px_-10px_14px_-2px_rgba(80,25,6,0.85)] h-11 w-25 text-[#e8e8e8] font-medium py-2 px-4 rounded-full flex items-center justify-center bg-gradient-to-b from-[#f53c08] to-[#f36207] absolute inset-0'
                >
                  <p className='text-[#e8e8e8] text-[10px]'>Let's Talk&nbsp;&nbsp;</p>
                  <motion.span
                    className="text-lg inline-block"
                    animate={isHovered ? { rotate: [0, 20, 0, -20, 0] } : { rotate: 0 }}
                    transition={{ duration: 0.6, repeat: isHovered ? Infinity : 0 }}
                  >
                    👋
                  </motion.span>
                </motion.a>

              </div>
            </div>
          </div>
        </header>
      </div>
    </div>
  )
}

export default NavBar
