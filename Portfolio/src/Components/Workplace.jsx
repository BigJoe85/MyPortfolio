import React from 'react'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const images = [
    "https://res.cloudinary.com/duoy2tsyc/image/upload/v1783377300/WhatsApp_Image_2026-07-06_at_18.28.37_mckhyp.jpg",
    "https://res.cloudinary.com/duoy2tsyc/image/upload/v1783407471/1a308e1729ac92c92fe29467d7dfde59_qm8env.jpg",
    "https://res.cloudinary.com/duoy2tsyc/image/upload/v1783377300/WhatsApp_Image_2026-07-06_at_18.28.37_mckhyp.jpg",
    "https://res.cloudinary.com/duoy2tsyc/image/upload/v1783407471/1a308e1729ac92c92fe29467d7dfde59_qm8env.jpg"
]

const Workplace = () => {
    const [index, setIndex] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length)
        }, 4000)

        return () => clearInterval(timer)
    }, [index])

    return (
        <div className='shadow-[inset_0px_8px_6px_-7px_rgba(44,43,43,0.9)] hover:bg-[#0a0a0c] transition-all duration-300 w-full h-full bg-[#0c0c0e] rounded-[20px] p-8 border border-gray-800/[0.17]'>

            <h1 className='text-[#e8e8e8] font-medium text-[1.1rem] pb-4'>Workplace Snap 📸</h1>

            <div className='relative rounded-2xl overflow-hidden'>
                <AnimatePresence mode="wait">
                    <motion.img
                        key={index}
                        src={images[index]}
                        alt={`Workplace photo ${index + 1}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className='w-full h-[400px] object-cover'
                    />
                </AnimatePresence>

                {/* dot indicators */}
                <div className='absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2'>
                    {images.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setIndex(i)}
                            aria-label={`Go to slide ${i + 1}`}
                            className={`h-2 rounded-full transition-all duration-300 ${i === index ? 'w-6 bg-white' : 'w-2 bg-white/40'
                                }`}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Workplace
