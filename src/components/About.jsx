import SectionTitle from "./elements/SectionTitle.jsx";
import { memoji } from "../Constants/constants";
import { introduction } from "../Constants/constants";

const About = () => {
  return (
    <div id="about" className="w-full flex justify-center overflow-hidden-web">
      <div className="w-full xl:w-[70%] flex flex-col pb-16">
        <div className="w-full">
          <SectionTitle title="ABOUT ME" subtitle="Introduction" />
        </div>
        <div className="w-full flex flex-col-reverse sm:flex-row">
          <div className="w-full md:w-[50%] md:h-full flex items-center mt-10">
            <div
                className="text-grayscale-50 p-6 text-center flex flex-col gap-6"
                style={{
                     color : "#141414",
                }}>
                <span className="text-primary-400">{introduction.text[0]}</span>
                <span>{introduction.text[1]}</span>
                <span>{introduction.text[2]}</span>
                <span>{introduction.text[3]}</span>
            </div>
          </div>
          <div className="w-full md:w-[50%] flex h-full items-center justify-center bg-black">
            <div style={{backgroundColor:"grey"}}
                className="w-[80%] lg:w-[50%] h-[350px] flex justify-center items-center overflow-hidden rounded-full">
                <img className="h-full w-full" src={memoji.image}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
