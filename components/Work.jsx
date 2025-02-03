import { assets, workData } from '@/assets/assets'
import Image from 'next/image'

const Work = ({ isDarkMode }) => {
    return (
        <div id="work" className="w-full px-[12%] py-10 scroll-mt-20">
            <h4 className="text-center mb-2 text-lg font-Ovo">My Portfolio</h4>
            <h2 className="text-center text-5xl font-Ovo">My Latest Work</h2>
            <p className="text-center max-w-2xl mx-auto font-Ovo mt-5 mb-12">
                I am a full-stack developer with experience in working with
                various technologies like React, Node, Express, MongoDB, etc. I
                have done an internship at a startup where I worked on a project
                from scratch and developed a full-fledged application.
            </p>
            <div className="grid grid-cols-auto my-10 gap-5">
                {workData.map(({ bgImage, description, title }) => (
                    <div
                        key={title}
                        className="aspect-square bg-no-repeat bg-center rounded-lg relative cursor-pointer group dark:text-black"
                        style={{ backgroundImage: `url(${bgImage})` }}
                    >
                        <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
                            <div>
                                <h2 className="font-semibold">{title}</h2>
                                <p className="text-sm text-gray-700">
                                    {description}
                                </p>
                            </div>
                            <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
                                <Image
                                    src={assets.send_icon}
                                    alt={'send icon'}
                                    className="w-5"
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <a
                href=""
                className="w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full px-10 py-3 mx-auto my-20 hover:bg-lightHover duration-500 dark:text-white dark:border-white dark:hover:bg-darkHover"
            >
                Show More{' '}
                <Image
                    src={
                        isDarkMode
                            ? assets.right_arrow_bold_dark
                            : assets.right_arrow_bold
                    }
                    alt="right arrow"
                    className="w-4"
                />
            </a>
        </div>
    )
}

export default Work
