import SectionTitle from "./elements/SectionTitle";
import { certificate } from "../assets";

const Certificate = () => {
 return (
        <div id="Intor" className="w-full overflow-hidden-web flex justify-center">
          <div className="w-full h-full flex flex-col xl:w-[70%]">
            <div className="w-full">
              <SectionTitle title="Amazon Certificate" subtitle="" />
            </div>
            <div className="h-full w-full justify-center items-center flex flex-row">
                <img className="w-[90%] aspect-video" src={certificate} alt="certificate"/>
            </div>
         </div>
        </div>
  )
}

export default Certificate;
