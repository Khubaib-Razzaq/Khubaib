import { projects } from "./src/Constants/constants";
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
        <div className="text-grayscale-300 p-5 rounded-lg lg:w-1/4 sm:w-1/2">
        <div
          onClick={()=>setToggleImageViewer(!toggleImageViewer)}
          className="relative w-full h-[180px]">
          <img
              src={image[0]}
              alt={name}
              className="w-full h-full rounded-lg"
          />
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
