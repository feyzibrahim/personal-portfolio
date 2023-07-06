import React from "react";
import Image from "next/image";
import ECampus from "../img/ecampus.png";
import Recurring from "../img/recurring.png";
import FundFolio from "../img/fundfolio.png";

const ProjectSession: React.FC = () => {
  return (
    <>
      <h3 className="div-h1">Projects</h3>
      <p className="text-md leading-8 text-gray-600 max-w-5xl mx-auto text-center">
        Here you can find some of the projects that I created and look into the
        case study by clicking the show details button
      </p>
      <div className="project-div">
        <div>
          <h2 className="project-h2">#1 : E-Campus</h2>
          <p className="project-p">
            E-campus is a MERN stack project I did as the college final year
            project. E-Campus helps colleges to manage an entire college
            digitally. Also built an android app for seamless working. App can
            be used by students for monitoring their progress
          </p>
          <button className="mb-5 button-style">show case study</button>
        </div>
        <div>
          <Image src={ECampus} alt="ecampus project" className="project-img" />
        </div>
      </div>
      <div className="project-div">
        <div>
          <h2 className="project-h2">#2 : FundFolio</h2>
          <p className="project-p">
            Built using plane HTML, CSS for the first week task of brocamp. Just
            a clone of fundfolio. Which is the company of Sharique Shamsudheen.
            Option Trader based in Kerala.
          </p>
          <button className="mb-5 button-style">show case study</button>
        </div>
        <div>
          <Image
            src={FundFolio}
            alt="FundFolio Clone"
            className="project-img"
          />
        </div>
      </div>
      <div className="project-div">
        <div>
          <h2 className="project-h2">#3 : Recurring</h2>
          <p className="project-p">
            Built using plane HTML, CSS for the first week task of brocamp. Just
            a clone of recurring. Which is initiative taken by SlideBean as part
            of their company expansion. A website for tracking all the subscrgit
            add .iptions of a company.
          </p>
          <button className="mb-5 button-style">show case study</button>
        </div>
        <div>
          <Image
            src={Recurring}
            alt="Recurring Clone"
            className="project-img"
          />
        </div>
      </div>
    </>
  );
};

export default ProjectSession;
