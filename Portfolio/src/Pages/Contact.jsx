import React from 'react'
import { MailPlus, MoveUpRight, MapPin, PhoneCall, CircleQuestionMark } from "lucide-react"
import emailjs from '@emailjs/browser';
import { useRef, useState, useEffect } from 'react';


const Contact = () => {

  const formRef = useRef();

  const [status, setStatus] = useState(null); // 'success' | 'error' | null

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('sending');
    emailjs.sendForm('service_b06mkwe', 'template_x11a5ns', formRef.current, 'PSEgZCECv4UlGY-mI')
      .then(() => {
        setStatus('success');
        formRef.current.reset();
      })
      .catch((err) => {
        console.error(err);
        setStatus('error');
      });
  };

  useEffect(() => {
    if (status === 'success' || status === 'error') {
      const timer = setTimeout(() => {
        setStatus(null);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [status]);

  return (
    <div>
      <div className=' w-full h-full max-w-[1100px] mx-auto px-4 pt-50 py-8 max-md:pt-40 '>

        <div className='grid grid-cols-2 gap-4 items-center max-md:grid-cols-1'>

          <div className=' p-6'>
            <div>
              <div className='flex gap-2 items-center w-28 h-10 bg-white/10 backdrop-blur-2xl border border-white/40 rounded-[50px] pl-1 mb-4'>
                <div className='bg-[#F44C0F] flex items-center justify-center rounded-full w-7 h-7 '><CircleQuestionMark /></div>
                <h3 className='text-xs'>Contact</h3>
              </div>
              <h4 className='font-bold text-2xl pb-1'>Get in touch</h4>
              <p className='text-xs'>Have questions? Ready to build a professional <br /> website for your brand? Let's talk.</p>

              <div className='pt-5 flex gap-3 flex-col'>

                <div className='flex justify-between items-center bg-white/5 backdrop-blur-2xl border border-white/40 rounded-2xl p-3'>
                  <div className='flex gap-4 items-center '>
                    <div className='flex items-center justify-center bg-white/5 backdrop-blur-2xl border border-white/40 rounded-[8px] h-10 w-10'>
                      <MailPlus size={18} />
                    </div>

                    <div>
                      <p className='font-bold text-xs pb-1'>Email</p>
                      <p className='text-xs'>Joshuaeshiet4@gmail.com</p>
                    </div>
                  </div>
                  <a href="mailto:joshuaeshiet4@gmail.com">
                    <div className='hover:bg-gray-600 text-white flex items-center justify-center w-6 h-6 rounded-full bg-gray-500'>
                      <MoveUpRight size={10} />
                    </div>
                  </a>
                </div>

                <div className='flex justify-between items-center bg-white/5 backdrop-blur-2xl border border-white/40 rounded-2xl p-3'>
                  <div className='flex gap-4 items-center'>
                    <div className='flex items-center justify-center bg-white/5 backdrop-blur-2xl border border-white/40 rounded-[8px] h-10 w-10'>
                      <PhoneCall size={18} />
                    </div>

                    <div>
                      <p className='font-bold text-xs pb-1'>Call</p>
                      <p className='text-xs pb-1'>+234 810 181 7385</p>
                    </div>
                  </div>

                  <a href="tel:+2348101817385">
                    <div className=' hover:bg-gray-600 text-white flex items-center justify-center w-6 h-6 rounded-full bg-gray-500'>
                      <MoveUpRight size={10} />
                    </div>
                  </a>
                </div>

                <div className='flex justify-between items-center bg-white/5 backdrop-blur-2xl border border-white/40 rounded-2xl p-3'>
                  <div className='flex gap-4 items-center'>
                    <div className=' flex items-center justify-center bg-white/5 backdrop-blur-2xl border border-white/40 rounded-[8px] h-10 w-10'>
                      <MapPin size={18} />
                    </div>

                    <div>
                      <p className='font-bold text-xs pb-1'>Location</p>
                      <p className='text-xs pb-1'>Victory Dr, Ph, Nigeria</p>
                    </div>
                  </div>


                  <div className='hover:bg-gray-600 text-white flex items-center justify-center w-6 h-6 rounded-full bg-gray-500'>
                    <MoveUpRight size={10} />
                  </div>
                </div>

              </div>
            </div>
          </div>


          <div className='h-100 w-full px-6 py-10 max-md:py-4'>
            <form ref={formRef} onSubmit={sendEmail}>
              <input
                type="text"
                name="name"
                id="name"
                placeholder='Name'
                required
                className='focus:outline-none backdrop-blur-2xl border border-white/40 rounded-lg w-full h-12 mb-4 p-2' /> <br />

              <input
                type="email"
                name="email"
                id="email"
                placeholder='Email'
                required className='focus:outline-none backdrop-blur-2xl border border-white/40 rounded-lg w-full h-12 mb-4 p-2' /> <br />

              <textarea
                name="message"
                id="message"
                placeholder='Message'
                required className='h-40 w-64 resize-none focus:outline-none backdrop-blur-2xl border border-white/40  rounded-lg w-full h-12 mb-4 p-2'></textarea> <br />

              <button
                type="submit"
                disabled={status === 'sending'}
                className='hover:bg-white/90 rounded-lg w-full h-12 bg-white text-black font-bold disabled:opacity-50'
              >
                {status === 'sending' ? 'Sending...' : 'Submit'}
              </button>
            </form>

            <div>
              {status === 'success' && (
                <p className="text-green-400 text-xs mt-2">Message sent!</p>
              )}
              {status === 'error' && (
                <p className="text-red-400 text-xs mt-2">Something went wrong. Try again.</p>
              )}
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
