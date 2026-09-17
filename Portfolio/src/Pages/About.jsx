import React from 'react'
import Experience from '../Components/Experience'
import Resume from '../Components/Resume'
import Education from '../Components/Education'
import Vibe from '../Components/Vibe'

const About = () => {
  const row1 = [
    "https://res.cloudinary.com/duoy2tsyc/image/upload/v1789603674/WhatsApp_Image_2026-09-16_at_20.07.24_kcj577.jpg",
    "https://res.cloudinary.com/duoy2tsyc/image/upload/v1783346728/WhatsApp_Image_2026-07-06_at_09.48.57_uulk28.jpg",
    "https://res.cloudinary.com/duoy2tsyc/image/upload/v1789603174/WhatsApp_Image_2026-09-16_at_15.59.05_jgzq05.jpg",
  ]
  const row2 = [
   "https://res.cloudinary.com/duoy2tsyc/image/upload/v1789603174/WhatsApp_Image_2026-09-16_at_15.59.05_jgzq05.jpg",
    "https://res.cloudinary.com/duoy2tsyc/image/upload/v1783346728/WhatsApp_Image_2026-07-06_at_09.48.57_uulk28.jpg",
     "https://res.cloudinary.com/duoy2tsyc/image/upload/v1789603674/WhatsApp_Image_2026-09-16_at_20.07.24_kcj577.jpg",
    
  ]
  const row3 = [
    "https://res.cloudinary.com/duoy2tsyc/image/upload/v1783346728/WhatsApp_Image_2026-07-06_at_09.48.57_uulk28.jpg",
     "https://res.cloudinary.com/duoy2tsyc/image/upload/v1789603674/WhatsApp_Image_2026-09-16_at_20.07.24_kcj577.jpg",
    
    "https://res.cloudinary.com/duoy2tsyc/image/upload/v1789603174/WhatsApp_Image_2026-09-16_at_15.59.05_jgzq05.jpg",
  ]

  return (
    <div className='w-full max-w-[1100px] mx-auto px-4 pt-60 pt-8 pb-2 max-md:pt-40'>
      <h1 className='leading-normal text-[#e8e8e8] text-4xl max-sm:text-[1.4rem] font-bold text-center pb-6'>Hey there! I'm Eshiet Joshua, a full-stack web developer from Nigeria. Passionate about building fast, scalable web apps, with a good eye for clean, user-friendly design.</h1>

      <p className='text-[#a0a0a0] text-center text-xl max-sm:text-sm pb-6'>As a seasoned full-stack developer, I specialize in building fast, reliable web apps, with a focus on fintech products. I thrive on solving complex problems and enjoy every technical challenge along the way.</p>


      <div className='w-full h-[40rem] grid grid-cols-3 max-md:grid-cols-1  gap-2 py-18'>

        <div className="h-full overflow-hidden max-md:hidden">
          <div className="flex flex-col gap-2 h-max animate-about-up">
            {[...row1, ...row1].map((item, i) => (
              <img key={i} src={item} alt="" className="rounded-lg" />
            ))}
          </div>
        </div>

        <div className="h-full overflow-hidden">
          <div className="flex flex-col gap-2 h-max animate-about-down">
            {[...row2, ...row2].map((item, i) => (
              <img key={i} src={item} alt="" className="rounded-xl" />
            ))}
          </div>
        </div>

        <div className="h-full overflow-hidden max-md:hidden">
          <div className="flex flex-col gap-2 h-max animate-about-up">
            {[...row3, ...row3].map((item, i) => (
              <img key={i} src={item} alt="" className="rounded-xl" />
            ))}
          </div>
        </div>

      </div>

      <h1 className='leading-normal text-[#e8e8e8] text-4xl max-sm:text-[1.4rem] font-bold text-center pb-6'>I got my start in graphic design during university, working with an several companies remotely on client projects. Then I started coding, building real web apps just made more sense to me. Been hooked ever since.</h1>

      <p className='text-[#a0a0a0] text-center text-xl max-sm:text-sm pb-12'>I do more than write code – I dabble in event management and audio systems. When I'm not busy, I'm working on interior/exterior decor or lost in a playlist.</p>

      <div className='grid grid-cols-[minmax(300px,1.2fr)_minmax(280px,0.9fr)_minmax(250px,0.9fr)] gap-4 mt-10 mb-5 max-xl:grid-cols-1 items-center'>
        <Experience />
        <Education />
        <Resume />
      </div>

      <Vibe />

    </div>
  )
}

export default About
