import React from "react";
import "./ProfileCart.css";

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
            <span>Twitter</span>
            <span>Linkedin</span>
            <span>Medium</span>
            <span>email</span>



        </div>
       
      </div>
    </div>
  );
};

export default ProfileCard;
