import React from "react";
import Image from "next/image";

import { FiArrowUpRight, FiFigma } from "react-icons/fi";
import { AiFillGithub } from "react-icons/ai";

import ECampus from "../img/ecampus.png";
import Recurring from "../img/recurring.png";
import FundFolio from "../img/fundfolio.png";
import Olx from "../img/olx.png";
import Netflix from "../img/netflix.png";
import Todo from "../img/todo.png";
import ExIphone from "../img/exIphone.png";

const ProjectSession: React.FC = () => {
  const list = [
    {
      title: "E-Campus",
      description:
        "E-campus is a MERN stack project I did as the college final year project. E-Campus helps colleges to manage an entire college digitally. Also built an android app for seamless working. App can be used by students for monitoring their progress",
      liveLink: "https://ecampus.onrender.com/",
      gitLink: ["https://github.com/feyzibrahim/cms-project"],
      img: ECampus,
    },
    {
      title: "FundFolio",
      description:
        "Built using plane HTML, CSS for the first week task of brocamp. Just a clone of fundfolio. Which is the company of Sharique Shamsudheen. Option Trader based in Kerala.",
      liveLink:
        "https://feyzibrahim.github.io/brototype-week1-task2-fundfolio/",
      gitLink: [
        "https://github.com/feyzibrahim/brototype-week1-task2-fundfolio",
      ],
      img: FundFolio,
    },
    {
      title: "Recurring",
      description:
        "Built using plane HTML, CSS for the first week task of brocamp. Just a clone of recurring. Which is initiative taken by SlideBean as part of their company expansion. A website for tracking all the subscriptions of a company.",
      liveLink:
        "https://feyzibrahim.github.io/brototype-week1-task1-recurring/",
      gitLink: [
        "https://github.com/feyzibrahim/brototype-week1-task1-recurring",
      ],
      img: Recurring,
    },
    {
      title: "OLX",
      description:
        "Built using React for the 12th task of brocamp. Just a clone of OLX. I have used the fakestoreapi for fetching the products in this website. Products can be dynamically loaded",
      liveLink: "https://brototype-olx-clone.onrender.com/",
      gitLink: ["https://github.com/feyzibrahim/brototype-week12-olx"],
      img: Olx,
    },
    {
      title: "Netflix",
      description:
        "Built using React for the 12th task of brocamp. Just a clone of Netflix. I have used the TMBD api for fetching the films in this website. Films can be dynamically loaded.",
      liveLink: "https://brototype-neftlix-clone.onrender.com/",
      gitLink: ["https://github.com/feyzibrahim/brototype-week12-netflix"],
      img: Netflix,
    },
    {
      title: "React Todo App",
      description:
        "Built using React for the 11th task of brocamp. A todo App inspired from figma. Great design as always. My favorite part about this is making the todo this looking. Really Proud work",
      liveLink: "https://feyzibrahim.github.io/brototype-week11-todo-app/",
      gitLink: ["https://github.com/feyzibrahim/brototype-week11-todo-app"],
      img: Todo,
    },
    {
      title: "Bloggger.com",
      description:
        " MERN App for the Task on week 9 at brocamp. Learned a lot about MERN stack development. Managing Database were the challenging part. Still managed to complete the project with in one week. Also Implemented Redux Toolkit",
      liveLink: "",
      gitLink: [
        "https://github.com/feyzibrahim/brototype-week3-mern-login-frontend",
        "https://github.com/feyzibrahim/brototype-week3-mern-login-backend",
      ],
      img: ECampus,
    },
    {
      title: "ex.iphones.shop",
      description:
        "My latest work. Completely working E-commerce website with User & Admin Side. Hosted on AWS using Nginx. MERN project built From Scratch. Also Completely Responsive",
      liveLink: "https://exiphones.shop/",
      gitLink: ["https://github.com/feyzibrahim/ex-iphone"],
      img: ExIphone,
      design:
        "https://www.figma.com/community/file/1288476919033677670/ex-iphone-e-commerce-website-template",
    },
  ];

  return (
    <>
      <h3 className="div-h1">Projects</h3>
      <p className="text-md leading-8 text-gray-600 max-w-5xl mx-auto text-center">
        Here you can find some of the projects that I created and look into the
        case study by clicking the show details button
      </p>
      {list.reverse().map((item, index) => {
        return (
          <div className="project-div" key={index}>
            <div>
              <h2 className="project-h2">
                #{index + 1} : {item.title}
              </h2>
              <p className="project-p">{item.description}</p>
              <div className="flex gap-2">
                <a
                  className="mb-5 flex w-fit button-style"
                  href={item.liveLink}
                  target="_blank"
                >
                  view live
                  <FiArrowUpRight className="ml-1" />
                </a>
                {item.gitLink.map((li, index) => {
                  return (
                    <a
                      href={li}
                      target="_blank"
                      className="project-button-no-bg"
                      key={index}
                    >
                      Github
                      <AiFillGithub className="text-lg ml-1" />
                    </a>
                  );
                })}
                {item.design && (
                  <a
                    className="mb-5 flex items-center w-fit px-4 py-2 rounded-md bg-gradient-to-r hover:bg-gradient-to-l capitalize from-red-500 to-orange-500"
                    href={item.design}
                    target="_blank"
                  >
                    design
                    <FiFigma className="ml-1" />
                  </a>
                )}
              </div>
            </div>
            <div className="relative group">
              <Image
                src={item.img}
                alt="ecampus project"
                className="project-img"
              />
              <a
                href={item.liveLink}
                target="_blank"
                className="hidden absolute top-0 group-hover:flex items-center justify-center w-full h-full bg-gray-500 rounded-md bg-opacity-25"
              >
                <div className="button-style flex">
                  View Live
                  <FiArrowUpRight className="ml-1" />
                </div>
              </a>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ProjectSession;
