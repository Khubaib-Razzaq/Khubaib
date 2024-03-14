import SectionTitle from "./elements/SectionTitle";
import SkillsCard from "./elements/SkillsCard"

const Skills = () => {
  return (
    <div id="skills" className="w-full overflow-hidden-web flex justify-center">
      <div className="w-full h-full flex flex-col xl:w-[70%]">
        <div className="w-full">
          <SectionTitle title="SKILLS" subtitle="MY SKILL SET" />
        </div>
        <div className="h-full w-full">
            <SkillsCard/>
        </div>
     </div>
    </div>
  );
};

export default Skills;
