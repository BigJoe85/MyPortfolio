import React from 'react'
import { motion } from 'framer-motion'

const Experience = () => {

    const experiences = [
        {
            company: "WebCapz",
            role: "Fullstack Developer",
            type: "Full-time",
            period: "2024-Present",
            active: true,
        },
        {
            company: "Trace Network Labs",
            role: "Product Designer",
            type: "Full-time",
            period: "2022-24",
        },
        {
            company: "BrandSpar.ng",
            role: "Creative Motion Designer",
            type: "Full-time",
            period: "2019-2024",
        },
        {
            company: "Seofied",
            role: "Visual Designer",
            type: "Full-time",
            period: "2019-21",
        },
    ];

    return (
        <div>
            <div className='shadow-[inset_0px_8px_6px_-7px_rgba(44,43,43,0.9)] hover:bg-[#0a0a0c] transition-all duration-300 w-full h-[400px] bg-[#0c0c0e] rounded-[20px] p-8 border border-gray-800/[0.17]'>

                <div className='flex gap-2 items-center '>
                    <h1 className='text-[#e8e8e8] font-medium text-[1.1rem]'>Experience</h1>
                    <div className='bg-[#0a0a0c] border border-gray-800/[0.40] rounded-full text-[10px] py-1 px-2 text-[#a0a0a0]'>
                        <p>02 Years</p>
                    </div>
                </div>
                <div className='absolute translate-y-10 translate-x-1 w-[0.5px] h-60 bg-white/20'></div>
                <div className='relative'>
                    <div className='text-[#a0a0a0] text-sm  flex gap-6 flex-col relative pt-8'>
                        {experiences.map((experience, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.2 }}
                                className='flex gap-2 items-center '
                            >


                                <div className='flex flex-col gap-1 w-full'>
                                    <div className='flex flex-row items-center justify-between gap-2 w-full'>
                                        <div className='flex gap-3 items-center'>
                                            <div className={`w-[0.6rem] h-[0.6rem] rounded-full border-[1.5px]  ${experience.active ? 'bg-[#00ff00] border-[#192d1f]' : 'bg-[#a0a0a0] border-[#202021]'}`}></div>
                                            <p className='text-[#e8e8e8] font-medium'>{experience.company}</p>
                                        </div>
                                        <p className='text-[#a0a0a0] text-[12px]'>{experience.period}</p>
                                    </div>
                                    <p className='pl-[21px] text-[#a0a0a0] text-[10px]'>{experience.role} - {experience.type}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>



            </div>
        </div>
    )
}

export default Experience
