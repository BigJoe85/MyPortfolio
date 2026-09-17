import React from 'react'

const EssentialStack = () => {

    return (
        <div>
            <div className='shadow-[inset_0px_8px_6px_-7px_rgba(44,43,43,0.9)] hover:bg-[#0a0a0c] transition-all duration-300 w-full h-[195px] bg-[#0c0c0e] rounded-[20px] p-8 border border-gray-800/[0.17]'>

                <h1 className='text-[#e8e8e8] font-medium text-[1.1rem] pb-3'>Essential Stacks</h1>
                <p className='text-[11.5px] text-[#a0a0a0]'>A curated set of tools I rely on to build, ship, and maintain my projects efficiently.</p>

                <div className='w-full flex gap-2 pt-3'>
                    <div className=' w-10 h-10 rounded bg-white flex items-center justify-center'>
                        <img src="https://res.cloudinary.com/duoy2tsyc/image/upload/v1782861797/330px-Tailwind_CSS_Logo.svg_cokbp5.webp" alt="tailwind css logo" className='w-8' />
                    </div>

                    <div className=' w-10 h-10 rounded bg-white flex items-center justify-center'>
                        <img src="https://res.cloudinary.com/duoy2tsyc/image/upload/v1783259158/vecteezy_javascript-logo-png-javascript-icon-transparent-png_27127560_kpw95w.png" alt="Javascript logo" className='w-8' />
                    </div>

                    {/* <div className=' w-10 h-9 p-1 rounded bg-white flex items-center justify-center'>
                        <img src="https://res.cloudinary.com/duoy2tsyc/image/upload/v1782861797/github_ztgasq.png" alt="Github logo" className='w-8' />
                    </div> */}

                    <div className=' w-10 h-10 p-1 rounded bg-white flex items-center justify-center'>
                        <img src="https://res.cloudinary.com/duoy2tsyc/image/upload/v1782861798/structure_m9pzgj.png" alt="React logo" className='w-8' />
                    </div>

                    <div className=' w-10 h-10 p-1 rounded bg-white flex items-center justify-center'>
                        <img src="https://res.cloudinary.com/duoy2tsyc/image/upload/v1782861860/node-js-seeklogo_n9m5di.png" alt="Node.js logo" className='w-8' />
                    </div>

                    <div className=' w-10 h-10 p-1 rounded bg-white flex items-center justify-center'>
                        <img src="https://res.cloudinary.com/duoy2tsyc/image/upload/v1782861797/icons8-vercel-50_dn2zhd.png" alt="Vercel logo" className='w-8' />
                    </div>

                    <div className=' w-10 h-10 p-1 rounded bg-white flex items-center justify-center'>
                        <img src="https://res.cloudinary.com/duoy2tsyc/image/upload/v1782861797/icons8-mongodb-144_xwuulc.png" alt="MongoDB logo" className='w-8' />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default EssentialStack
