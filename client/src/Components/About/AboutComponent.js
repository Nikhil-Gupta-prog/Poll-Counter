import React from "react";
import "./AboutComponent.css";
import Image from "../../Assests/Poll.png";
import ProfileCard from "../UI/ProfileCard";

const AboutComponent = () => {
  return (
    <>
    <div className="container mt-3 parentAboutDiv">
      <div className="row childAboutDiv">
        <div className="col-12 col-md-6 col-lg-6 ImageColDiv">
          <img src={Image} alt="Project logo" className="image_About" />
        </div>
        <div className="col-12 offset-md-1 offset-lg-1 col-md-5 col-lg-5 ">
          <div className="">
            <p className="about_description">About</p>
          </div>
          <div className=" d">
            <p className="FirstPara">
              Poll the run-up to the 2020 presidential election, some of the most
              popular social media platforms have introduced new measures to
              curb misinformation, increase transparency and try to bolster the
              integrity of the democratic process this time around.
            </p>
            <p>
              In the run-up to the 2020 presidential election, some of the most
              popular social media platforms have introduced new measures to
              curb misinformation, increase transparency and try to bolster the
              integrity of the democratic process this time around.
            </p>
          </div>
        </div>
      </div>
      <div className="container par">
        <p className="creator_heading">Creator</p>
        <hr />
        <div className="row chi ">
          <div className="col-12 l col-md-6 col-xl-6">
              <ProfileCard 
              name="Nikhil Gupta"
              profile="MERN Developer"
              email="nikhilgupta122000@gmail.com"
              linkedin="https://www.linkedin.com/in/nikhil-gupta-3a6a44183/"
              
              />
          </div>
          <div className="col-12l col-md-6 col-xl-6">
          <ProfileCard 
          name="Balvinder Singh"
          profile="MERN Developer"
          email=""
          linkedin="https://www.linkedin.com/in/singh-balvinder/"
          medium="https://sbalvinder471.medium.com/"
          
          />
        </div>
        </div>

      </div>
    </div>
    </>
  );
};

export default AboutComponent;
