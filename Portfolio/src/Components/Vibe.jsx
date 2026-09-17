import React from 'react'
import Workplace from './Workplace'

const SpotifyEmbed = ({ type = "album", id, si }) => (
    <iframe
        style={{ borderRadius: 12 }}
        src={`https://open.spotify.com/embed/${type}/${id}?utm_source=generator&si=${si}`}
        width="100%"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        className="h-[400px] max-xl:h-[352px]"
    />
)

const Vibe = () => {
    // grid grid-cols-[minmax(600px,2fr)_minmax(280px,1fr)]
    return (
        <div className='grid grid-cols-[minmax(600px,2fr)_minmax(280px,1fr)] max-xl:grid-cols-1 gap-4 items-center h-full'>
            <div
                className=' shadow-[inset_0px_8px_6px_-7px_rgba(44,43,43,0.9)] hover:bg-[#0a0a0c] transition-all duration-300 w-full h-full bg-[#0c0c0e] rounded-[20px] p-8 border border-gray-800/[0.17]'>

                <h1 className='text-[#e8e8e8] font-medium text-[1.1rem] pb-6'>Vibe while Hustling 🎧</h1>

                <div className='flex justify-around gap-1 max-xl:flex-col max-xl:gap-2 '>
                    <div>
                        <SpotifyEmbed type="album" id="2fXaK76zsSLaAMwCyCqKQL" si="59e684563a784856" />
                    </div>
                    <div className='max-xl:hidden'>
                        <SpotifyEmbed type="album" id="2O9VJaLSnwjZ2HPpMaVoPU" si="894105eabdef4608" />
                    </div>
                </div>

            </div>

            <Workplace />

        </div>

    )
}

export default Vibe