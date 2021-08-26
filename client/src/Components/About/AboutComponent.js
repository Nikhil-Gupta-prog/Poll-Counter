import React from "react";
import "./AboutComponent.css";
import Image from "../../Assests/poll3.png";
import ProfileCard from "../UI/ProfileCard";

const AboutComponent = () => {
  return (
    <>
      <div className="container mt-3 parentAboutDiv">
        <div className="row childAboutDiv">
          <div className="col-12 col-md-6 col-lg-6 text-center ImageColDiv">
            <img
              src={Image}
              alt="Project logo"
              className="image_About"
              data-aos="fade-right"
            />
          </div>
          <div className="col-12 offset-md-1 offset-lg-1 col-md-5 col-lg-5 ">
            <div className="">
              <p className="about_description">About</p>
            </div>
            <div className=" d" data-aos="fade-up">
              <p className="FirstPara">
                Poll counter app allows users to present their opinions on
                various different kind of polls and topics such as Current
                affairs, politics, Controversies, Sports etc. We intend to know
                the honest opinion of people on these polls.
              </p>
              <p>
                We by no means intend to share any of your data (including your
                personal data) to any other third party application or website
                . We allow the user to see how many people think
                like them and how other majority thinks about the poll when a
                user gives his/her opinion by showing a bar chart.
              </p>
            </div>
          </div>
        </div>
        <div className="container par">
          <p className="creator_heading">Developer</p>
          <hr />
          <div className="row chi ">
            <div
              className="col-sm-9 col-sm-offset-3 col-10 col-offset-2 l col-md-6 col-xl-6"
              data-aos="zoom-in-right"
            >
              <ProfileCard
                name="Nikhil Gupta"
                profile="MERN Developer"
                github="https://github.com/Nikhil-Gupta-prog"
                email="mailto:nikhilgupta122000@gmail.com"
                linkedin="https://www.linkedin.com/in/nikhil-gupta-3a6a44183/"
              />
            </div>
            <div
              className="col-sm-9 col-sm-offset-3 col-10 col-offset-2 l col-md-6 col-xl-6"
              data-aos="zoom-in-left"
            >
              <ProfileCard
                name="Balvinder Singh"
                profile="MERN Developer"
                github="https://github.com/Balvinder471"
                email="mailto:sbalvinder471@gmail.com"
                linkedin="https://www.linkedin.com/in/singh-balvinder/"
                medium="https://sbalvinder471.medium.com/"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="foot">
        <p>Copyright &#169; Poll Counter 2021</p>
      </div>
    </>
  );
};

export default AboutComponent;
