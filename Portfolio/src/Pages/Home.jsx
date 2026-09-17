import React from 'react'
import Connect from '../Components/Connect'
import EssentialStack from '../Components/EssentialStack'
import Experience from '../Components/Experience'
import Skills_Expertise from '../Components/Skills_Expertise'
import Workers_Projects from '../Components/Works_Projects'
import { motion } from 'framer-motion'
import { useState } from 'react'


const Home = () => {
  const [isHovered, setIsHovered] = useState(false)
  return (
    <div className='text-[#e8e8e8] w-full'>
      <div className='w-full max-w-[1100px] mx-auto px-4 pt-60 pb-2 max-md:pt-40'>
        <div className=' flex justify-between max-sm:items-center gap-10 max-xl:flex-col'>
          <div>
            <div className=' max-sm:hidden'>
              <h1 className='text-sm text-[#a0a0a0]'>Hey there!</h1>
              <h1 className=' leading-relaxed text-3xl font-bold'>I'm Joshua, a fullstack web developer <br /> crafting user-centric design with <br /> pixel-perfect precision.</h1>
            </div>

            <div className='hidden pt-8 text-center  max-sm:block'>
              <div className='flex flex-col gap-2 items-center'>
                <h1 className='text-sm text-[#a0a0a0]'>Hey there! I'am Joshua</h1>
                <h1 className='leading-relaxed text-3xl font-bold pb-4'>Fullstack developer engineering cool digital experiences.</h1>

                <a href="https://wa.me/2348101817385" target="_blank" rel="noopener noreferrer" className='max-w-max  shadow-[inset_0px_5px_8px_0px_rgba(255,215,190,0.65),inset_0px_-10px_14px_-2px_rgba(80,25,6,0.85)] text-[#e8e8e8] py-2 px-4 rounded-full flex items-center justify-center bg-gradient-to-b from-[#f53c08] to-[#f36207]'>Say Hello! 👋</a>
              </div>
            </div>

            <div className='pt-8 flex gap-3 items-center max-sm:justify-center'>
              <div className='flex gap-2 items-center'>
                <div className='flex items-center justify-center bg-[#f54408] h-[7px] w-[7px] rounded-full'></div>
                <p className='text-[11px] text-[#a0a0a0]'>Available for Freelancing</p>
              </div>
              <p className='text-[11px] text-[#a0a0a0]'>Port Harcourt, NGA • UTC/GMT +1:00</p>
            </div>
          </div>

          <div className='grid place-items-center max-xl:shadow-[inset_0px_8px_6px_-7px_rgba(44,43,43,0.9)] max-xl:w-full max-xl:hover:bg-[#0a0a0c] transition-all duration-300 max-xl:bg-[#0c0c0e] rounded-[20px] p-8 border border-gray-800/[0.17]'>
            <img src="https://res.cloudinary.com/duoy2tsyc/image/upload/v1789596406/josh2_meox4p.png" alt="profile picture" className='w-80' />
          </div>
        </div>


        <div className='grid grid-cols-[minmax(300px,1.1fr)_minmax(280px,1fr)_minmax(250px,0.9fr)] gap-3 mt-10 mb-5 max-xl:grid-cols-1 items-center'>
          <Experience />
          <div className='grid grid-cols-1 gap-2 max-xl:grid-cols-1'>
            <Skills_Expertise />
            <EssentialStack />
          </div>
          <Connect />
        </div>

        <Workers_Projects limit={6} showButton={true} homePage={true} /> {/* Recieving our limit prop as splicing the project array to show only 6 products, also recieving button as a prop to show the botton when calling the component using conditional rendering */}

      </div>

    </div>
  )
}

export default Home
