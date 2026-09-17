import React from 'react'
import Works_Projects from '../Components/Works_Projects'
import Connect from '../Components/Connect'
import BehanceShots from '../Components/BehanceShots'

const Projects = () => {
  return (
    <div className='w-full max-w-[1100px] mx-auto px-4 pt-60 pt-8 py-2 max-md:pt-40'>
      <Works_Projects showButton={false} projectPage={true} />

      <div className='mt-4 grid grid-cols-[minmax(250px,1fr)_minmax(300px,2fr)] max-xl:grid-cols-1 gap-4'>
        <Connect />
        <BehanceShots />
      </div>

    </div>

  )
}

export default Projects
