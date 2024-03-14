import SectionTitle from "./elements/SectionTitle";
import {introVideo} from "../Constants/constants"

const intro = () => {
 return (
        <div id="Intor" className="w-full overflow-hidden-web flex justify-center">
          <div className="w-full h-full flex flex-col xl:w-[70%]">
            <div className="w-full">
              <SectionTitle title="WHAT I AM OFFERING" subtitle="" />
            </div>
            <div className="h-full w-full flex">
                    <video className="mx-[5%]" src={introVideo} width="90%" height="300" controls="controls" />
            </div>
         </div>
        </div>
  )
}

export default intro;
