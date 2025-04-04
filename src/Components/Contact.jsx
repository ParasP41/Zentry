import React from 'react'
import Button from './Button'
const ImageClipBox = ({ src, clipClass }) =>
(
    <div className={clipClass}>
        <img src={src} alt="" />
    </div>
)

export default function Contact() {
    return (
        <div id='contact' className='my-20 min-h-96 w-screen px-10'>
            <div className='relative rounded-lg bg-black py-24 text-blue-50 sm:overflow-hidden'>
                <div className='absolute -left-20 top-0 hidden h-full w-72 overflow-hidden sm:block lg:left-20 lg:w-96'>
                    <ImageClipBox src='img/contact-1.webp' clipClass='contact-clip-path-1' />
                    <ImageClipBox src='img/contact-2.webp' clipClass='contact-clip-path-1 lg:translate-y-40 translate-y-60' />
                </div>
                <div className='absolute -top-40 left-20 w-60 sm:top-1/2 md:left-auto md:right-10 lg:top-20 lg:w-80'>
                    <ImageClipBox src='img/swordman-partial.webp' clipClass='absolute md:scale-125' />
                    <ImageClipBox src='img/swordman.webp' clipClass='sword-man-clip-path md:scale-125' />
                </div>
                <div className='flex flex-col items-center text-center'>
                    <p className='font-genenal text-[20px] uppercase'>
                        join, Zentry 
                    </p>
                    <p className='special-font mt-10 w-full font-zentry text-5xl leading-[0.9] md:text-[6rem]'>lets built Lore<b>m</b> <br/> ipsum dolor sit amet <br/> consectetur</p>

                    <Button 
                    title ="Contact us"
                    containerClass="mt-10 bg-white cursor-pointer"
                    />
                </div>
            </div>
        </div>
    )
}
