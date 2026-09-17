import React from 'react'
import { useParams } from 'react-router-dom'
import useProjectsStore from '../Stores/useProjectsStore.js'


const ProjectDetails = () => {
    const { id } = useParams()




    const projects = useProjectsStore((state) => state.projects) // here im using selector to pick a state created in useProjectsStore and saving it in a variable to represent the sellected state, always best to use the same state selected  as the variable name.



    const pro = projects.find(el => el.id.toString() === id)

    // console.log('projects:', projects, 'id param:', id)
    return (
        <div className='text-white w-full'>
            {pro ?
                <div className='pt-10'>
                    <div
                        style={{ backgroundImage: `url(${pro.img2})` }}
                        className="w-full h-[27rem] max-md:h-[15rem] max-w-[95%] mx-auto bg-no-repeat bg-center bg-cover rounded-4xl">

                    </div>

                    <div className='w-full max-w-[1100px] mx-auto px-4 pt-15 py-8 max-md:pt-40'>
                        <div className='flex items-center justify-between pb-3'>
                            <h1 className='font-bold text-[clamp(1.25rem,4vw,1.875rem)]'>{pro.title}</h1>
                            <h1 className='text-[#a0a0a0]'>{pro.date}</h1>
                        </div>
                        <h1 className='pb-14 text-[#a0a0a0]'>{pro.role}</h1>
                        <p className='text-[#a0a0a0] text-[clamp(1rem,3vw,1.25rem)] leading-normal pb-10'>{pro.des}</p>

                        <div className='flex flex-col gap-3'>
                            <img src={pro.img2} alt="" className='rounded-2xl' />
                            <img src={pro.img3} alt="" className='rounded-2xl' />
                            <img src={pro.img4} alt="" className='rounded-2xl' />
                            <img src={pro.img5} alt="" className='rounded-2xl' />
                        </div>

                        <p className='text-[#a0a0a0] text-[clamp(1rem,3vw,1.25rem)] leading-normal py-10'>{pro.des2}</p>

                        <img src={pro.img1} alt="" className='pb-6' />

                        <p className='text-[#a0a0a0] text-[clamp(1rem,3vw,1.25rem)] leading-normal pb-10'>{pro.des3}</p>
                        {/* <a href={pro.link} key={pro.id} target="_blank" rel="noopener noreferrer" className='bg-[#131315] hover:bg-[#1a1a1c] text-[#e8e8e8] font-medium py-2 px-4 rounded-lg border border-gray-600/[0.5] transition-all duration-300'>View Project</a> */}
                        <a href="https://wa.me/2348101817385" target="_blank" rel="noopener noreferrer" className='max-w-max  shadow-[inset_0px_5px_8px_0px_rgba(255,215,190,0.65),inset_0px_-10px_14px_-2px_rgba(80,25,6,0.85)] text-[#e8e8e8] py-2 px-4 rounded-full flex items-center justify-center bg-gradient-to-b from-[#f53c08] to-[#f36207]'>View Project</a>
                    </div>
                </div>
                : <p className='text-green-600'>Not Found</p>
            }

        </div>
    )
}

export default ProjectDetails
