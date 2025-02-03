'use client'

import { assets, serviceData } from '@/assets/assets'
import Image from 'next/image'

const Services = () => {
    return (
        <div id="services" className="w-full px-[12%] py-10 scroll-mt-20">
            <h4 className="text-center mb-2 text-lg font-Ovo">What I Offer</h4>
            <h2 className="text-center text-5xl font-Ovo">My Services </h2>
            <p className="text-center max-w-2xl mx-auto font-Ovo mt-5 mb-12">
                I am a full-stack developer with experience in working with
                various technologies like React, Node, Express, MongoDB, etc. I
                have done an internship at a startup where I worked on a project
                from scratch and developed a full-fledged application.
            </p>
            <div className="grid grid-cols-auto gap-6 my-10">
                {serviceData.map(
                    ({ description, icon, title, link }, index) => (
                        <div
                            key={title}
                            className="border border-gray-400 rounded-lg px-8 py-12 hover:-translate-y-1 duration-500 hover:shadow-black cursor-pointer hover:bg-lightHover dark:hover:bg-darkHover dark:hover:shadow-white"
                        >
                            <Image src={icon} alt={title} className="w-10" />
                            <h3 className="text-lg my-4 text-gray-700 dark:text-white">
                                {title}
                            </h3>
                            <p className="text-sm text-gray-600 leading-5 dark:text-white/80">
                                {description}
                            </p>
                            <a
                                href={link}
                                className="flex items-center gap-2 text-sm mt-5"
                            >
                                Read more{' '}
                                <Image
                                    src={assets.right_arrow}
                                    className="w-4 mt-1"
                                    alt=""
                                />
                            </a>
                        </div>
                    )
                )}
            </div>
        </div>
    )
}

export default Services
