import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icons } from "../Constants/constants";

const SocialLinks = () => {
  return (
    <div className="w-full h-[100px] bg-grayscale-950 flex justify-center items-center gap-3 p-6">
      <a href="https://github.com/yahyakamran" target="_blank">
        <FontAwesomeIcon
          className="text-3xl text-grayscale-50 transition-all duration-75"
          icon={icons.faUpwork}
        />
      </a>
<a href="https://github.com/yahyakamran" target="_blank">
        <FontAwesomeIcon
          className="text-3xl text-grayscale-50 transition-all duration-75"
          icon={icons.faInstagram}
        />
      </a>
<a href="https://github.com/yahyakamran" target="_blank">
        <FontAwesomeIcon
          className="text-3xl text-grayscale-50 transition-all duration-75"
          icon={icons.faDiscord}
        />
      </a>
<a href="https://github.com/yahyakamran" target="_blank">
        <FontAwesomeIcon
          className="text-3xl text-grayscale-50 transition-all duration-75"
          icon={icons.faFacebook}
        />
      </a>
      <a
        href="https://www.linkedin.com/in/yahya-kamran-36bb9b270/"
        target="_blank"
      >
        <FontAwesomeIcon
          className="text-3xl text-grayscale-50 transition-all duration-75"
          icon={icons.faLinkedin}
        />
      </a>
    </div>
  );
};

export default SocialLinks;
