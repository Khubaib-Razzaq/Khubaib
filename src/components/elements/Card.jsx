import { projects } from "../../Constants/constants";
import {useState} from "react"
import FsLightbox from "fslightbox-react";

const ProjectCard = ({
    name,
    description,
    image,
  }) => {
    const [toggleImageViewer , setToggleImageViewer] = useState(false);
    return (
    <>
        <FsLightbox
            toggler={toggleImageViewer}
            sources={image}
        />
        <div className="text-grayscale-300 m-6 p-5 border-4 hover:bg-primary-700 rounded-lg lg:w-[45%] sm:w-[95%] border-primary-400">
        <div
            onClick={()=>setToggleImageViewer(!toggleImageViewer)}
            className="relative w-full  h-[240px] cursor-pointer">
            <img
                src={image[0]}
                alt={name}
                className="w-full h-full rounded-lg absolute inset-0  bg-cover bg-center z-0"
            />
              <div class="opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-2xl text-white font-semibold">Click to View</div>
        </div>

        <div className="mt-3">
          <h3 className="text-black font-bold text-[20px]">{name}</h3>
          <p className="mt-2 text-black-600 text-[14px] leading-[18px]">
            {description}
          </p>
        </div>
        <div className="mt-2 flex flex-wrap gap-1"></div>
        </div>
    </>
    );
};

const Works = () => {
    return (
      <>
        <div className="mt-20 flex justify-center flex-wrap">
          {projects.map((project, index) => (
            <ProjectCard key={`project-${index}`} index={index} {...project} />
          ))}
        </div>
      </>
    );
};

export default Works;
