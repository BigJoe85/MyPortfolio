import React from 'react'
import { FaTelegramPlane } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import { FaHandshakeAngle } from "react-icons/fa6";

const Connect = () => {

    return (
        <div >
            <div className='shadow-[inset_0px_8px_6px_-7px_rgba(44,43,43,0.9)] hover:bg-[#0a0a0c] transition-all duration-300 w-full h-[400px] bg-[#0c0c0e] rounded-[20px] p-8 border border-gray-800/[0.17] flex flex-col'>

                <h1 className='text-[#e8e8e8] font-medium text-[1.1rem]'>Connect</h1>

                <div className='text-[#a0a0a0] text-sm text-sm pl-4 pt-6 pb-10 flex gap-6 flex-col'>
                    <div className='flex gap-2 items-center'>
                        <FaLinkedin />
                         <a href="https://linkedin.com/in/joshua-eshiet" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    </div>

                    <div className='flex gap-2 items-center'>
                        <FaXTwitter />
                         <a href="https://x.com/BuildsByBigJoe" target="_blank" rel="noopener noreferrer">X Previously Twitter</a>
                    </div>

                    <div className='flex gap-2 items-center'>
                        <FaTelegramPlane />
                        <a href="https://t.me/bigjoe_dev" target="_blank" rel="noopener noreferrer">Telegram</a>
                    </div>

                    <div className='flex gap-2 items-center'>
                        <FaWhatsapp />
                        <a href="https://wa.me/2348101817385" target="_blank" rel="noopener noreferrer">Whatsapp</a>
                    </div>
                </div>
        
                <div className='text-[#a0a0a0] flex gap-4 items-center pt-6 mt-auto border-t border-white/10'>
                    <div className='h-10 w-10 bg-[#161617] rounded flex items-center justify-center'>
                        <FaHandshakeAngle size={25} className='text-[#e8e8e8]'/>
                    </div>

                    <div className='text-xs flex flex-col gap-2'>
                        <p>Let's Work Together!</p>
                        <div className='text-[0.75rem] flex gap-1 items-center'>
                      
                            <FaArrowRight className='text-[#e8e8e8]'/>
                            <a href="mailto:Joshuaeshiet4@gmail.com" target='_blank' className='text-[#e8e8e8'>Joshuaeshiet4@gmail.com</a>
                        </div>
                    </div>

                    
                </div>

            </div>
        </div>
    )
}

export default Connect