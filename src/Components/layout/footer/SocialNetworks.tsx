import facebookIcon from "../../../assets/facebookIcon.svg";
import twitterIcon from "../../../assets/twitterIcon.svg";
import instagramIcon from "../../../assets/instagramIcon.svg";

function SocialNetworks() {
  return (
    <div className="flex gap-8 ">
      <button>
        <a href="https://www.facebook.com/" target="_blank">
          <img src={facebookIcon} alt="Facebook icon" />
        </a>
      </button>
      <button className="bg-primary rounded-full p-1.5">
        <a href="https://www.twitter.com/" target="_blank">
          <img src={twitterIcon} alt="Twitter icon" />
        </a>
      </button>
      <button className="bg-primary rounded-full p-2">
        <a href="https://www.instagram.com/" target="_blank">
          <img src={instagramIcon} alt="Instagram icon" />
        </a>
      </button>
    </div>
  );
}

export default SocialNetworks;
