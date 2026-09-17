import React from 'react'

const Resume = () => {
    return (
        <div>
            <div className="shadow-[inset_0px_8px_6px_-7px_rgba(44,43,43,0.9)] hover:bg-[#0a0a0c] transition-all duration-300 w-full h-[400px] bg-[#0c0c0e] rounded-[20px] p-8 border border-gray-800/[0.17] flex flex-col bg-[url('https://res.cloudinary.com/duoy2tsyc/image/upload/v1783296894/1Y5qz8KmlUAAEPSvzOim6BoOI_zz8a1u.avif')]  bg-no-repeat bg-center bg-[length:250px_250px]">

                <h1 className='text-[#e8e8e8] font-medium text-[1.1rem]'>Resume</h1>

                <a href="https://res.cloudinary.com/duoy2tsyc/raw/upload/v1783248135/Joshua_s_CV_NEW_bthqmu.docx" target="_blank" rel="noopener noreferrer" className='text-center mt-auto w-50 bg-[#131315] hover:bg-[#1a1a1c] text-[#e8e8e8] font-medium py-2 px-4 rounded-2xl border border-gray-600/[0.5] transition-all duration-300'>
                    Download Resume
                </a>

            </div>

        </div>
    )
}

export default Resume
