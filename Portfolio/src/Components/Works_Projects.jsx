import React from 'react'
import useProjectsStore from '../Stores/useProjectsStore'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Works_Projects = ({ limit, showButton, projectPage, homePage }) => {

  const projects = useProjectsStore((state) => state.projects) // here im using selector to pick a state created in useProjectsStore and saving it in a variable to represent the sellected state, always best to use the same state selected  as the variable name.


  const displayedProjects = limit ? projects.slice(0, limit) : projects // here we are saving the array to be mapped over in a variable which is dynamic so we'll be passing over limit as a prop to our component so we can call the component and give it a value for the limit which handles slicing and it we dont do that it defaults to our full project array showing all projects

  const navigate = useNavigate()  // here we are using the useNavigate hook to navigate to the project details page when the user clicks on a project card

  return (
    <div>
      <div className='shadow-[inset_0px_8px_6px_-7px_rgba(44,43,43,0.9)] hover:bg-[#0a0a0c] transition-all duration-300 w-full h-full bg-[#0c0c0e] rounded-[20px] p-8 max-md:px-4 max-md:py-8 border border-gray-800/[0.17]'>
        {homePage &&
          <div className='flex max-md:flex-col max-md:items-start gap-4 items-center justify-between'>
            <h1 className='text-[#e8e8e8] font-medium text-[1.1rem]'>Works & Projects</h1>
            <p className='text-[11px] text-[#a0a0a0]'>Check out some of my projects, meticulously coded with love and dedication.</p>
          </div>
        }

        {projectPage &&
          <div className='flex flex-col items-center gap-2 items-center py-8'>
            <h1 className='text-[#e8e8e8] font-medium text-[1.2rem]'>Works & Projects</h1>
            <p className='text-[13px] text-[#a0a0a0]'>Check out some of my projects, meticulously coded with love and dedication.</p>
          </div>
        }

        <div className='grid grid-cols-3 gap-4 mt-6 max-lg:grid-cols-2 max-md:grid-cols-1'>
          {displayedProjects.map((el) => (
            <NavLink to={`/project-details/${el.id}`} key={el.id}>
            <div key={el.id} className='shadow-[inset_0px_-8px_6px_-7px_rgba(44,43,43,0.9)] rounded-lg bg-[#131315] p-3'>
              <img src={el.img1} alt="{el.title} website landing page" />
              <div className=' pb-3 pt-2'>
                <h2 className='leading-tight text-[#e8e8e8] font-medium text-[1.1rem]'>{el.title}</h2>
                <p className='leading-tight text-right text-[11px] text-[#a0a0a0]'>{el.date}</p>
                <p className='leading-tight text-[11px] text-[#a0a0a0]'>{el.role}</p>
              </div>
            </div>
            </NavLink>
          ))}
        </div>

        {showButton &&
          <div className='flex max-md:flex-col max-md:justify-center gap-4 items-center justify-between mt-10'>
            <p className='text-[12px] text-[#e8e8e8]'>Interested in Exploring More?</p>
            <button onClick={() => navigate('/projects')} className='bg-[#131315] hover:bg-[#1a1a1c] text-[#e8e8e8] font-medium py-2 px-4 rounded-lg border border-gray-600/[0.5] transition-all duration-300'>View More</button>
          </div>
        }

      </div>
    </div>
  )
}

export default Works_Projects


