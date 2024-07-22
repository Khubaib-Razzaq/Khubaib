import { skills } from "../../Constants/constants";

const SkillsCards = () => {
  return (
    <div className="flex flex-row w-full gap-4 m-4 flex-wrap items-center justify-center">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="overflow-hidden card w-1/2 lg:w-1/4 sm:w-1/2 hover:bg-primary-700  h-[350px] flex flex-col items-center  bg-white rounded-xl border-4  cursor-pointer"
          >
            <div className="w-full h-[60px] flex items-center gap-2 p-1 flex-col">
              <img
                className="h-[70px] flex justify-center items-center w-[50px]  bg-white  p-1 object-contain"
                src={skill.image}
                alt={skill.name}
              />
              <span
                className="text-xl"
                style={{
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: "bold",
                    textAlign: "center",
                }}
              >
                {skill.name}
              </span>
              <span
                className="text-center bg-white text-grayscale-950 rounded-xl text-sm p-4"
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: "400",
                }}
              >
                {skill.description}
              </span>
            </div>
          </div>
        ))}
    </div>
  );
};

export default SkillsCards;
