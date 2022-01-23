import React from "react";
import { BsFillEnvelopeFill, BsGithub, BsLinkedin } from "react-icons/bs";
import Fade from "react-reveal/Fade";
import "./styles.css";
import Typed from "react-typed";

function HomePage() {
     return (
          <div style={{ backgroundImage: "url('/images/bg2.jpg')" }} className="lg:bg-cover bg-left-top">
               <div className="bg-black bg-opacity-40">
                    <div className="h-screen w-full flex flex-col items-center justify-center" id="home">
                         <Fade bottom cascade>
                              <div className="lg:w-2/4 flex items-center flex-col justify-center md:space-y-5 space-y-2 text-center w-full mb-96 -mt-16 md:m-0">
                                   <h3 className="md:text-9xl text-6xl" style={{ fontFamily: "Bebas Neue" }}>
                                        Marius Damian
                                   </h3>
                                   <Typed strings={["Front End Developer"]} typeSpeed={100} backSpeed={10} backDelay={1000} className="lg:text-5xl text-2xl text-gray-300" />
                                   {/* <h1 className="lg:text-5xl text-2xl text-gray-300">Front End Developer</h1> */}
                                   <div className="lg:text-4xl space-x-5 flex flex-row text-2xl text-gray-300">
                                        <a href="https://github.com/MariusDamian" target="_blank">
                                             <i className=" hover:text-rose-600">
                                                  <BsGithub />
                                             </i>
                                        </a>
                                        <a href="https://www.linkedin.com/in/damianmarius/" target="_blank">
                                             <i className="hover:text-rose-600">
                                                  <BsLinkedin />
                                             </i>
                                        </a>
                                        <a href="mailto:marius.damian.stefan@gmail.com" target="_blank">
                                             <i className=" hover:text-rose-600">
                                                  <BsFillEnvelopeFill />
                                             </i>
                                        </a>
                                   </div>
                              </div>
                         </Fade>
                    </div>
               </div>
          </div>
     );
}

export default HomePage;
