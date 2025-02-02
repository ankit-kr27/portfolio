'use client'

import { assets } from '@/assets/assets'
import Image from 'next/image'

const Header = () => {
    return (
        <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col justify-center items-center gap-4'>
            <div>
                <Image
                    src={assets.profile_img}
                    alt=""
                    className="rounded-full w-32"
                />
            </div>
            <h3 className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo">
                Hi! I am Ankit Kumar{' '}
                <Image alt="" src={assets.hand_icon} className="w-6" />
            </h3>
            <h1 className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo">FullStack Developer based in India.</h1>
            <p className="max-w-2xl mx-auto font-Ovo">
                I am a fullStack Developer based in India. I have been working
                in the field of web development for the past 2 years. I have
                experience in working with various technologies like React,
                Node, Express, MongoDB, etc.
            </p>

            <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
                <a href="#contact" className='px-10 py-3 border rounded-full border-white bg-black text-white flex items-center gap-2'>
                    contact me{' '}
                    <Image
                        alt=""
                        src={assets.right_arrow_white}
                        className="w-4 mt-1"
                    />
                </a>
                <a
                    href="/sample-resume.pdf"
                    download
                    className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2"
                >
                    my resume{' '}
                    <Image alt="" src={assets.download_icon} className="w-4" />
                </a>
            </div>
        </div>
    )
}

export default Header
