import React, { useRef, useState } from 'react'
import { TiLocationArrow } from 'react-icons/ti'

const BentoTilt = ({ children, className = "" }) => {

    const [transformStyle, setTransformStyle] = useState();
    const itemRef = useRef()

    const handleMousemove = (e) => {
        if (!itemRef.current) return;
        const { left, top, width, height } = itemRef.current.getBoundingClientRect()
        const relativeX = (e.clientX - left) / width;
        const relativeY = (e.clientY - top) / height;
        const tiltX = (relativeY - 0.5) * 5;
        const tiltY = (relativeX - 0.5) * -5;

        const newTransform = `perspective(700px) rotateX(${tiltX}deg) scale3d(0.95,0.95,0.95)`

        setTransformStyle(newTransform)
    }

    const handleMouseLeave = (e) => {

    }

    return (
        <div ref={itemRef} onMouseMove={handleMousemove} onMouseLeave={handleMouseLeave} className={className} style={{ transform: transformStyle }} >
            {children}
        </div>
    )
}

const BentoCard = ({ src, title, description }) => {
    return (
        <div className='relative size-full'>
            <video className='absolute top-0 left-0 size-full object-cover object-center' src={src} loop muted autoPlay ></video>
            <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50">
                <div>
                    <h1 className='bento-title special-font'>{title}</h1>
                    {description && <p className='mt-3 max-w-64 text-xs md:text-base'>{description}</p>}
                </div>

            </div>
        </div>
    )
}

export default function Features() {
    return (
        <section className='bg-black pb-52'>
            <div className='container mx-auto px-3 md:px-10'>
                <div className='px-5 py-32 '>
                    <p className='font-circular-web text-xl text-blue-50'>Into The Metagame Layer </p>
                    <p className="max-w-md font-circular-web text-lg text-blue-50 opacity-50">
                        Immerse yourself in a rich and ever-expanding universe where a vibrant
                        array of products converge into an interconnected overlay experience
                        on your world.
                    </p>
                </div>
                <BentoTilt className='border-hsla relative mb-7 h-96 w-full overflow rounded-md md:h-[65vh]'>
                    <BentoCard
                        src="videos/feature-1.mp4"
                        title={<>radi<b>n</b>t</>}
                        description="Experience the beauty of the universe in the most immersive way."
                    />
                </BentoTilt>
                <div className='grid h-[135vh] grid-cols-2 grid-rows-3 gap-7'>

                    <BentoTilt className='bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2'>
                        <BentoCard
                            src="videos/feature-2.mp4"
                            title={<>Zig<b>m</b>a</>}
                            description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut pariatur sunt vitae delectus veritatis quae nostrum commodi in soluta!"
                        />
                    </BentoTilt>
                    <BentoTilt className='bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0'>
                        <BentoCard
                            src="videos/feature-3.mp4"
                            title={<>n<b>e</b>xus</>}
                            description="Experience the wonders of the universe through the lens of a fantastical adventure."
                        />
                    </BentoTilt>
                    <BentoTilt className='bento-tilt_1 me-14 md:col-span-1 md:me-0'>
                        <BentoCard
                            src="videos/feature-4.mp4"
                            title={<>az<b>u</b>l</>}
                            description="Experience the wonders of the universe through the lens of a fantastical adventure."
                        />
                    </BentoTilt>

                    <BentoTilt className='bento-tilt_2'>
                        <div className='flex size-full flex-col justify-between bg-violet-900 p-5'>
                            <h1 className='bento-title special-font max-w-64 text-black' >
                                <b>M</b>ore Comming Soon
                            </h1>
                            <TiLocationArrow className='self-end m-5 scale-[5] ' />
                        </div>
                    </BentoTilt>
                    <BentoTilt className='bento-tilt_2'>
                        <video className='absolute top-0 left-0 size-full object-cover object-center' src="videos/feature-5.mp4" loop muted autoPlay ></video>
                    </BentoTilt>
                </div>
            </div>

        </section>
    )
}
