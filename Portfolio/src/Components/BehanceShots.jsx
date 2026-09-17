import React from 'react'

const BehanceShots = () => {

    const row1 = [
        "https://res.cloudinary.com/duoy2tsyc/image/upload/v1783339620/4d6a75146269085_62ad0f321d3c3_yzoytl.jpg",
        "https://res.cloudinary.com/duoy2tsyc/image/upload/v1783339620/a1d99c143215945_627649561b964_fzuzyo.jpg",
        "https://res.cloudinary.com/duoy2tsyc/image/upload/v1783339627/35eef8146256311_62acca05c481a_q3snri.jpg",
        "https://res.cloudinary.com/duoy2tsyc/image/upload/v1783339625/ac3479145688207_62a2707f3a2cd_dsps0w.jpg",
        "https://res.cloudinary.com/duoy2tsyc/image/upload/v1783339621/e0065e142294075_62641810d4c88_wakjow.jpg",
    ]

    return (
        <div>
            <div className='shadow-[inset_0px_8px_6px_-7px_rgba(44,43,43,0.9)] hover:bg-[#0a0a0c] transition-all duration-300 w-full max-h-[400px] bg-[#0c0c0e] rounded-[20px] p-8 border border-gray-800/[0.17] flex flex-col gap-2'>

                <div className='flex items-center  justify-between'>
                    <h1 className='text-[#e8e8e8] font-medium text-[1.1rem] max-xl:text-[0.8rem]'>Selected <a href="https://www.behance.net/BigJoe85" target='_blank' rel="noopener noreferrer" className='hover:text-blue-600 hover:underline' >Behance</a> Shots</h1>

                    <a href="https://www.behance.net/BigJoe85" rel="noopener noreferrer" target='_blank' className='bg-[#131315] hover:bg-[#1a1a1c] text-[#e8e8e8] font-medium py-2 px-4 rounded-lg border border-gray-600/[0.5] transition-all duration-300 w-30 text-center'>View More</a>
                </div>

                <div className="w-full overflow-hidden">
                    <div className="flex gap-1 w-[350rem] max-xl:w-[200rem] animate-behance-left">
                        {[...row1, ...row1].map((item, i) => (
                            <div key={i} className="text-[#c9c9c9] text-sm p-3 whitespace-nowrap">
                                <img src={item} alt="" />
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default BehanceShots
