import React from "react";
import "./ProfileCart.css";
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';
import LinkedInIcon from '@material-ui/icons/LinkedIn';


const ProfileCard = (props) => {
  return (
    <div class="card cardBorderCorners darkCard">
      <div class="card-body">
        <img
          class="proPic proDark card-img rounded-circle"
          src="https://res.cloudinary.com/vivekiscoding/image/upload/v1589372809/lego.jpg"
          alt="Profile Pic"
        />
        <h5 class="darkTitle card-title">{props.name}</h5>
        <h6 class="darkSubTitle card-subtitle">{props.profile}</h6>

        <div className="social">
          <span className="social_media_icon">
            <a  href={props.github}>
            <GitHubIcon className="icon" />
            </a>
          </span>
          <span className="social_media_icon">
            <a href={props.email}>
            <EmailIcon className="icon" />
            </a>
          </span>
          <span className="social_media_icon">
            <a href={props.linkedin}>
            <LinkedInIcon  className="icon" />
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
