"use client";

import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
  AiFillGithub,
  AiFillInstagram,
  AiFillPhone,
} from "react-icons/ai";
import Image from "next/image";
import animePhoto from "./img/pic.jpg";
import Code from "./img/code.png";
import Design from "./img/design.png";
import GameDev from "./img/games.png";
import { useState } from "react";
import "./styles.css";

import MyForm from "./api/myform";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <div className={darkMode ? "dark" : ""}>
      <main className="bg-white text-sm font-quicksand dark:bg-gray-900 dark:text-white">
        {/* Navbar */}
        <nav className="px-10 lg:px-32 py-5 mb-5 flex justify-between fixed bg-slate-800 w-full backdrop-filter backdrop-blur-lg bg-opacity-30">
          <h1 className="">Feyz Ibrahim</h1>
          <ul className="flex items-center">
            <li className="cursor-pointer">
              {!darkMode ? (
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="icon-style"
                />
              ) : (
                <BsFillSunFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="icon-style"
                />
              )}
            </li>
            <li>
              <a href="" className="button-style ml-4">
                Resume
              </a>
            </li>
          </ul>
        </nav>

        {/* Main Body */}

        <section className="min-h-screen px-10 lg:px-32 pt-20 lg:pt-6">
          <div className="lg:grid lg:grid-cols-3">
            <div className="lg:col-span-2 lg:mt-20">
              <h1 className="tracking-wider">Hello!</h1>
              <h2 className="text-3xl lg:text-6xl py-5 text-teal-600 font-bold">
                I&apos;m Feyz Ibrahim
              </h2>
              <h3 className="text-lg lg:text-2xl py-2">
                Full Stack Dev / Unity Game Dev
              </h3>
              <p className="py-2 leading-6 text-gray-600 max-w-lg ">
                Freelancer providing services for programming and design content
                needs. Join me down and let&apos;s get cracking!
              </p>
              <p className="text-xs lg:text-sm inline-flex my-6 tracking-wide">
                Get in touch 👉
                <span className="border-b-2 border-teal-600">
                  feyzibrahimx@gmail.com
                </span>
              </p>
              <div className="flex text-2xl justify-between lg:justify-normal lg:gap-16 text-gray-600 lg:mb-10">
                <a
                  href="https://www.linkedin.com/in/feyz-ibrahim-861883194/"
                  target="_blank"
                >
                  <AiFillLinkedin className="icon-style" />
                </a>
                <a href="https://twitter.com/fe_y_z_" target="_blank">
                  <AiFillTwitterCircle className="icon-style" />
                </a>
                <a
                  href="https://www.youtube.com/channel/UChlOfBkweCYg5QIAY9YprTw"
                  target="_blank"
                >
                  <AiFillYoutube className="icon-style" />
                </a>
                <a href="https://github.com/feyzibrahim" target="_blank">
                  <AiFillGithub className="icon-style" />
                </a>
                <a href="https://www.instagram.com/fe_y_z_" target="_blank">
                  <AiFillInstagram className="icon-style" />
                </a>
              </div>
            </div>
            <div className="flex justify-center mt-5 lg:mt-20">
              <Image
                src={animePhoto}
                alt="Anime Photo"
                className="rounded-full w-60 h-60 lg:w-96 lg:h-96"
              />
            </div>
          </div>
          <div className="my-5 text-center hidden lg:block">
            {darkMode ? (
              <div className="scroll-downs">
                <div className="mousey">
                  <div className="scroller"></div>
                </div>
              </div>
            ) : (
              <div className="scroll-downs">
                <div className="mousey-dark">
                  <div className="scroller-dark"></div>
                </div>
              </div>
            )}
            <p className="mt-5 text-gray-700">Scroll Down</p>
          </div>
        </section>

        <section className="px-10 lg:px-32">
          <div>
            <h3 className="text-2xl py-1 text-center font-semibold">
              SERVICES I OFFER
            </h3>
            <p className="text-md leading-8 text-gray-600 max-w-5xl mx-auto lg:text-center">
              Since the beginning of ny journey as a freelance developer,
              I&apos;ve done several remote works and one great college project.
            </p>
          </div>
          <div className="lg:flex lg:gap-20">
            <div className="flex flex-col items-center text-center p-10 my-10 shadow-xl rounded-xl dark:bg-gray-800">
              <Image src={Design} alt="Code" width={100} height={100} />
              <h3 className="text-lg font-bold pt-8 pb-2">Beautiful Designs</h3>
              <p className="py-2">
                Creating elegant designs for your needs following core design
                theory
              </p>
              <h4 className="text-teal-600 pb-3">Design Tools I Use</h4>
              <p className="text-gray-800 dark:text-gray-500">Photoshop</p>
              <p className="text-gray-800 dark:text-gray-500">Figma</p>
              <p className="text-gray-800 dark:text-gray-500">Illustrator</p>
            </div>
            <div className="flex flex-col items-center text-center p-10 my-10 shadow-xl rounded-xl dark:bg-gray-800">
              <Image src={Code} alt="Code" width={100} height={100} />
              <h3 className="text-lg font-bold pt-8 pb-2">Web & Mobile App</h3>
              <p className="py-2">
                Developing Custom Apps for your need. Pushing the limits using
                AI
              </p>
              <h4 className="text-teal-600 pb-3">Dev Tools</h4>
              <p className="text-gray-800 dark:text-gray-500">MERN + Native</p>
              <p className="text-gray-800 dark:text-gray-500">Flutter</p>
              <p className="text-gray-800 dark:text-gray-500">Java/Kotlin</p>
            </div>
            <div className="flex flex-col items-center text-center p-10 my-10 shadow-xl rounded-xl dark:bg-gray-800 ">
              <Image src={GameDev} alt="Code" width={100} height={100} />
              <h3 className="text-lg font-bold pt-8 pb-2">Game Development</h3>
              <p className="py-2">
                Creating games for just fun. Checkout my youtube channel for
                games
              </p>
              <h4 className="text-teal-600 pb-3">Tools I Use</h4>
              <p className="text-gray-800 dark:text-gray-500">Unity</p>
              <p className="text-gray-800 dark:text-gray-500">Blender</p>
              <p className="text-gray-800 dark:text-gray-500">
                Unreal (Upcoming)
              </p>
            </div>
          </div>
        </section>
        <section className="px-10 lg:px-32">
          <div>
            <h3 className="text-center text-2xl pb-2 pt-5 font-semibold">
              ABOUT ME
            </h3>
            <p className="text-center text-md text-gray-500 max-w-5xl lg:max-w-2xl mx-auto lg:text-center">
              Here you will find more information about me, what I do, and my
              current skills mostly in terms of programming and technology
            </p>
            <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-16">
              <div>
                <h3 className="text-xl text-gray-500 font-bold">
                  Get to know me!
                </h3>
                <p className="text-gray-600 mt-5 lg:text-lg">
                  I&apos;m a self thought{" "}
                  <span className="text-teal-600">Full Stack Developer</span>{" "}
                  building web apps as freelancer... Check out some of my work
                  in the <span className="font-bold">Projects</span> section.
                </p>
                <p className="text-gray-600 mt-5 lg:text-lg">
                  I also develop games using{" "}
                  <span className="text-teal-600">Unity</span> engine just for
                  fun. Kind of like a passion to me. Also make videos about it
                  in the{" "}
                  <span className="border-b-2 border-teal-600 font-bold">
                    <a
                      href="https://www.youtube.com/channel/UChlOfBkweCYg5QIAY9YprTw"
                      target="_blank"
                    >
                      YouTube
                    </a>
                  </span>
                  . If you got time feel free to checkout that too.
                </p>
                <p className="text-gray-600 mt-5 lg:text-lg">
                  I&apos;m open to <span className="font-bold">Job</span>{" "}
                  opportunities where I can contribute, learn and grow. If you
                  have a good opportunity that matches my skills and experience
                  then don&apos;t hesitate to{" "}
                  <span className="font-bold">contact</span> me.
                </p>
                <button className="button-style my-6">
                  <div className="flex items-center">
                    Contact Me <AiFillPhone className="ml-2" />
                  </div>
                </button>
              </div>
              <div>
                <h3 className="text-xl text-gray-500 font-bold pb-2">
                  My Skills
                </h3>
                <div className="flex flex-wrap">
                  <span className="skill-badge">React JS</span>
                  <span className="skill-badge">Next JS</span>
                  <span className="skill-badge">Tailwind</span>
                  <span className="skill-badge">Express JS</span>
                  <span className="skill-badge">MongoDB</span>
                  <span className="skill-badge">NoSQL</span>
                  <span className="skill-badge">Flutter</span>
                  <span className="skill-badge">Firebase</span>
                  <span className="skill-badge">SQL</span>
                  <span className="skill-badge">GIT</span>
                  <span className="skill-badge">Github</span>
                  <span className="skill-badge">Responsive Design</span>
                  <span className="skill-badge">Figma</span>
                  <span className="skill-badge">Photoshop</span>
                  <span className="skill-badge">Unity</span>
                  <span className="skill-badge">Blender</span>
                  <span className="skill-badge">C#</span>
                  <span className="skill-badge">HTML</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="bg-slate-800 px-10 mt-10 min-h-screen pb-10">
            <h3 className="text-center text-2xl pb-2 pt-5 font-semibold">
              CONTACT
            </h3>
            <p className="text-center text-gray-500">
              Feel free to Contact me by submitting the form below and I will
              get back to you as soon as possible
            </p>
            <MyForm />
          </div>
        </section>

        <footer className="px-10 lg:px-40 pt-20 lg:py-16">
          <div className="lg:flex lg:justify-between">
            <div>
              <h3 className="text-2xl font-bold tracking-wide">FEYZ IBRAHIM</h3>
              <p className="py-6 leading-6 text-gray-600 max-w-lg">
                Freelancer providing services for programming and design content
                needs. Web and Mobile App developer and Unity Game Developer...
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-5 tracking-wide">SOCIAL</h3>
              <div className="text-2xl flex gap-5">
                <a
                  href="https://www.linkedin.com/in/feyz-ibrahim-861883194/"
                  target="_blank"
                >
                  <AiFillLinkedin className="icon-style" />
                </a>
                <a href="https://twitter.com/fe_y_z_" target="_blank">
                  <AiFillTwitterCircle className="icon-style" />
                </a>
                <a
                  href="https://www.youtube.com/channel/UChlOfBkweCYg5QIAY9YprTw"
                  target="_blank"
                >
                  <AiFillYoutube className="icon-style" />
                </a>
                <a href="https://github.com/feyzibrahim" target="_blank">
                  <AiFillGithub className="icon-style" />
                </a>
                <a href="https://www.instagram.com/fe_y_z_" target="_blank">
                  <AiFillInstagram className="icon-style" />
                </a>
              </div>
            </div>
          </div>
          <div className="w-full border-b border-cyan-400 my-10"></div>
          <div className="text-center pb-10">
            <p>Copyright 2023</p>
            <p className="my-2">...</p>
            <p>Made with ❤️ by Feyz Ibrahim</p>
          </div>
        </footer>
      </main>
    </div>
  );
}

// <a href="https://www.flaticon.com/free-icons/code" title="code icons">Code icons created by Royyan Wijaya - Flaticon</a>
// <a href="https://www.flaticon.com/free-icons/web-design" title="web design icons">Web design icons created by Adib Sulthon - Flaticon</a>
// <a href="https://www.flaticon.com/free-icons/video-games" title="video games icons">Video games icons created by Freepik - Flaticon</a>
