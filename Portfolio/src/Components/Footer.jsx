import { React, useState } from 'react'
import { motion } from 'framer-motion'
import { IoSparklesSharp } from "react-icons/io5";


const Footer = () => {
  const [isHovered, setIsHovered] = useState(false)
  return (
    <div className='w-full max-w-[1100px] mx-auto px-4 py-10 max-md:py-6'>
      <div className='shadow-[inset_0px_8px_6px_-7px_rgba(44,43,43,0.9)] hover:bg-[#0a0a0c] transition-all duration-300 w-full h-full bg-[#0c0c0e] rounded-[20px] py-8 px-12 max-md:px-4 max-md:py-4 border border-gray-800/[0.17] mt-4'>

        <div className='flex max-xl:flex-col max-md:items-start gap-4 items-center justify-between'>

          <div className="relative bg-[url('https://res.cloudinary.com/duoy2tsyc/image/upload/v1783262889/magic_grid_lines_transparent_1_x91ibz.png')] bg-cover bg-center bg-no-repeat h-full w-full flex items-center justify-center py-23 max-md:py-15">
            <IoSparklesSharp size={17} className='absolute -translate-x-1 -translate-y-6' />
            <IoSparklesSharp size={13} className='absolute translate-x-33 translate-y-5 text-white' />
            <p className='text-xl'> i do <span className="text-2xl" style={{ fontFamily: "'Aclonica', sans-serif" }}>MAGIC</span> in codes..</p>
          </div>

          <div className='flex flex-col text-xs w-full h-full p-2 max-xl:items-center'>
            <div className='pb-4 max-md:text-center'>
              <h1 className='leading-tight text-3xl font-semibold pb-3'>Ready to kickstart your project with a touch of magic?</h1>
              <p className='text-[11px] text-[#e8e8e8]'><span className='text-[#a0a0a0]'>Reach out and let's make it happen ✨.</span>  I'm also available for full-time or Part-time opportunities to build robust apps and write clean, scalable code.</p>
            </div>

            <div className='bg-[#f55421] rounded-full overflow-hidden relative h-11 w-30'>

              <motion.a
                href="https://wa.me/2348101817385"
                target="_blank"
                rel="noopener noreferrer"
                onHoverStart={() => setIsHovered(true)}
                onHoverEnd={() => setIsHovered(false)}
                animate={{ y: isHovered ? -2 : 0 }}
                transition={{ duration: 0.3 }}
                className='shadow-[inset_0px_5px_8px_0px_rgba(255,215,190,0.65),inset_0px_-10px_14px_-2px_rgba(80,25,6,0.85)] h-11 w-[120px] text-[#e8e8e8] font-medium py-2 px-4 rounded-full flex items-center justify-center bg-gradient-to-b from-[#f53c08] to-[#f36207] absolute inset-0'
              >
                <p className='text-[#e8e8e8]'>Let's Talk&nbsp;&nbsp;</p>

                <motion.span
                  className="text-lg inline-block"
                  animate={isHovered ? { rotate: [0, 20, 0, -20, 0] } : { rotate: 0 }}
                  transition={{ duration: 0.6, repeat: isHovered ? Infinity : 0 }}
                >
                  🤩
                </motion.span>
              </motion.a>
            </div>
          </div>
        </div>
      </div>

      <div className='text-xs text-[#a0a0a0] flex justify-between w-full pt-10 px-10 max-xl:flex-col max-xl:items-center max-xl:gap-2'>
        <p>&copy; 2026 Joshua Eshiet</p>
        <p>Coded with ❤️ and dedication</p>
      </div>
    </div>
  )
}

export default Footer
