import { workData } from "@/assets/assets"

const Work = () => {
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
            <div>
                {workData.map(({bgImage, description, title}) => (
                    <div key={title} className='' style={{backgroundImage: `url(${bgImage})`}}>

                    </div>
                ))}
            </div>
        </div>
    )
}

export default Work
