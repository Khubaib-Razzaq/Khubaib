import Cards from "./elements/Card";
import SectionTitle from "./elements/SectionTitle";

const Skills = () => {
  return (
    <div id="skills" className="w-full overflow-hidden-web flex justify-center">
      <div className="w-full min-h-[800px] flex flex-col xl:w-[70%]">
        <div className="w-full">
          <SectionTitle title="EXPERIENCE" subtitle="WHAT I HAVE DONE SO FAR" />
        </div>
        <div className="h-full">
             <Cards/>
        </div>
     </div>
    </div>
  );
};

export default Skills;
