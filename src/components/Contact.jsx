import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icons } from "../Constants/constants";

const SocialLinks = () => {
  return (
    <div className="flex-col w-full h-[200px] bg-grayscale-950 flex justify-center items-center p-6">
      <div className="w-full bg-grayscale-950 flex justify-center gap-3 p-6">
	<a href="https://www.upwork.com/freelancers/khubaibr" target="_blank">
     	   <FontAwesomeIcon
     	     className="text-3xl text-grayscale-50 transition-all duration-75"
     	     icon={icons.faUpwork}
     	   />
     	</a>
     	<a
     	   href="https://www.facebook.com/profile.php?id=100078945803270"
     	   target="_blank"
     	 >
     	   <FontAwesomeIcon
     	     className="text-3xl text-grayscale-50 transition-all duration-75"
     	     icon={icons.faFacebook}
     	   />
     	 </a>
     	<a
     	   href="https://wa.me/923094757751"
     	   target="_blank"
     	 >
     	   <FontAwesomeIcon
     	     className="text-3xl text-grayscale-50 transition-all duration-75"
     	     icon={icons.faWhatsapp}
     	   />
     	 </a>
    </div>
    <div className="flex justify-center items-center flex-col gap-2">
      <div>
	<FontAwesomeIcon
    	   	  className="mr-2 text-sm text-grayscale-50 transition-all duration-75"
    	   	  icon={icons.faPhone}
    	   	/>
    	    <span
		style={{
		color : "white",
	    }}
	    > +923094757751</span>
    	</div>
	<div>
	    <FontAwesomeIcon
       	      className="mr-2 text-sm text-grayscale-50 transition-all duration-75"
       	      icon={icons.faEnvelope}
       	    />
       	    <span
		style={{
		color : "white",
	    }}
	    >   khubaibrazzaqisi@gmail.com</span>
	</div>
       </div>
   </div>
  );
};

export default SocialLinks;
