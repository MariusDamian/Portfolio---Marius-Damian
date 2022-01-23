import React from "react";
import Fade from "react-reveal/Fade";
import "./styles.css";
import { FcFolder } from "react-icons/fc";

function About() {
     return (
          <div className="z-10">
               <div className="hidden sm:block">
                    <div className="w-full flex flex-col items-center justify-start bg-cover pt-5 lg:py-20" id="home">
                         <h1 className="md:text-5xl text-3xl" style={{ fontFamily: "Bebas Neue" }}>
                              About <em className="not-italic text-rose-600">me</em>
                         </h1>
                         <div className="flex flex-row items-center justify-center lg:pt-20 pt-10 space-x-10">
                              <Fade>
                                   <div className="w-1/2 hidden sm:flex flex-row justify-end">
                                        <img src="./images/profile.png" alt="" className="border-2 border-rose-600 rounded-3xl xl:w-96 lg:w-80 md:w-72 sm:w-60" />
                                   </div>
                              </Fade>
                              <Fade>
                                   <div className="w-1/2 pr-40 sm:text-sm lg:text-lg">
                                        <p>
                                             My name is <em className="font-semibold not-italic text-rose-600">Marius Damian</em>. I am from Bucharest, Romania. I've always been passionate about everything digital and related to the internet.
                                        </p>
                                        <br />
                                        <p>
                                             Being a cryptocurrency enthusiast, I wanted to make a website related to crypto so I started to study the programming languages and the differences between them in order to hire a programmer.
                                             <br />
                                             <br />
                                             From that moment on, my interest in web development arose and I began to study the basics, HTML and CSS and to practice in Visual Studio Code.
                                             <br />
                                             Gradually I started learning Javascript and began using Github, Stackoverflow, Tailwind CSS, Firebase and React.
                                        </p>
                                        <br />
                                        <a href="https://www.dropbox.com/s/m5uaj3swdowlb77/Marius%20Damian.pdf?dl=1">
                                             <button className="bg-rose-600 px-2 py-2 rounded-xl shadow-lg shadow-gray-600/40 hover:bg-rose-800">Curriculum Vitae</button>
                                        </a>
                                   </div>
                              </Fade>
                         </div>
                    </div>
               </div>
               {/* Mobile */}
               <div className="block sm:hidden">
                    <div className="min-h-screen flex flex-col items-center w-full py-7">
                         <h1 className="md:text-5xl text-3xl" style={{ fontFamily: "Bebas Neue" }}>
                              About <em className="not-italic text-rose-600">me</em>
                         </h1>
                         <div className="pr-28 pl-4 pt-12">
                              <p>
                                   My name is <em className="font-semibold not-italic text-rose-600">Marius Damian</em>, from Bucharest, Romania. I've always been passionate about everything that's digital and related to the internet.
                              </p>
                              <br />
                              <p>Because of that, I felt the need to learn how the things I interact with and use daily are working.</p>
                              <br />
                              <p>From that moment, I discovered that my passion stretches beyond the point where I'm just a user.</p>
                              <br />
                              <a href="https://www.dropbox.com/s/m5uaj3swdowlb77/Marius%20Damian.pdf?dl=1">
                                   <button className="bg-rose-600 px-2 py-2 rounded-xl hover:bg-rose-800">Curriculum Vitae</button>
                              </a>
                         </div>
                         <div className="flex items-start justify-start w-full mt-8 pl-4">
                              <img src="" alt="" src="./images/profile.png" alt="" className="border-2 border-rose-600 rounded-3xl w-60" />
                         </div>
                    </div>
               </div>
          </div>
     );
}

export default About;
