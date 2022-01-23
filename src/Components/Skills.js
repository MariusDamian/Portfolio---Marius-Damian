import React from "react";
import Fade from "react-reveal/Fade";
import "./styles.css";

function Skills() {
     return (
          <div style={{ backgroundColor: "#212428" }} className="bg-cover">
               <div className="hidden lg:block">
                    <div className="w-full flex flex-col items-center justify-start bg-cover lg:py-20 pt-7" id="home">
                         <h1 className="md:text-5xl text-3xl" style={{ fontFamily: "Bebas Neue" }}>
                              My <em className="not-italic text-rose-600">skills</em>
                         </h1>
                         <div className="flex lg:flex-row flex-col lg:space-x-40 lg:mt-24 mt-7 lg:w-auto w-full space-y-6 lg:space-y-0">
                              <Fade>
                                   <div className="space-y-3">
                                        <p className="text-2xl mb-5" style={{ fontFamily: "poppins" }}>
                                             Currently <em className="not-italic text-rose-600">using</em>
                                        </p>
                                        <div className="flex flex-row items-center justify-start w-full">
                                             <img src="./images/html.png" alt="" className="w-12 mr-5" />
                                             <p>HTML</p>
                                        </div>
                                        <div className="flex flex-row items-center justify-start w-full">
                                             <img src="./images/css.png" alt="" className="w-12 mr-5" />
                                             <p>CSS</p>
                                        </div>
                                        <div className="flex flex-row items-center justify-start w-full">
                                             <img src="./images/js.png" alt="" className="w-12 mr-5" />
                                             <p>Javascript</p>
                                        </div>
                                        <div className="flex flex-row items-center justify-start w-full">
                                             <img src="./images/react.png" alt="" className="w-12 mr-5" />
                                             <p>React</p>
                                        </div>
                                        <div className="flex flex-row items-center justify-start w-full">
                                             <img src="./images/tw.png" alt="" className="w-12 mr-5" />
                                             <p>Tailwind CSS</p>
                                        </div>
                                   </div>
                              </Fade>
                              <Fade>
                                   <div className="space-y-3">
                                        <p className="text-2xl mb-5" style={{ fontFamily: "poppins" }}>
                                             Learn & <em className="not-italic text-rose-600">practice</em>
                                        </p>
                                        <div className="flex flex-row items-center justify-start w-full">
                                             <img src="./images/firebase.png" alt="" className="w-12 mr-5" />
                                             <p>Firebase</p>
                                        </div>
                                        <div className="flex flex-row items-center justify-start w-full">
                                             <img src="./images/figma.png" alt="" className="w-12 mr-5" />
                                             <p>Figma</p>
                                        </div>
                                        <div className="flex flex-row items-center justify-start w-full">
                                             <img src="./images/next.png" alt="" className="w-12 mr-5" />
                                             <p>Next JS</p>
                                        </div>
                                   </div>
                              </Fade>
                              <Fade>
                                   <div className="space-y-3">
                                        <p className="text-2xl mb-5" style={{ fontFamily: "poppins" }}>
                                             Other <em className="not-italic text-rose-600">skills</em>
                                        </p>
                                        <div className="flex flex-row items-center justify-start w-full">
                                             <img src="./images/english.png" alt="" className="w-12 mr-5" />
                                             <p>English C1/C2</p>
                                        </div>
                                        <div className="flex flex-row items-center justify-start w-full">
                                             <img src="./images/ppl.png" alt="" className="w-12 mr-5" />
                                             <p>People management</p>
                                        </div>
                                   </div>
                              </Fade>
                         </div>
                    </div>
               </div>
               {/* Mobile */}
               <div className="block lg:hidden">
                    <div className="min-h-screen flex flex-col items-center w-full py-7 ml-5">
                         <h1 className="md:text-5xl text-3xl" style={{ fontFamily: "Bebas Neue" }}>
                              My <em className="not-italic text-rose-600">skills</em>
                         </h1>
                         <div className="flex lg:flex-row flex-col lg:space-x-40 lg:mt-24 mt-7 lg:w-auto w-full space-y-6 lg:space-y-0">
                              <div className="space-y-3">
                                   <p className="text-2xl mb-5" style={{ fontFamily: "poppins" }}>
                                        Currently <em className="not-italic text-rose-600">using</em>
                                   </p>
                                   <div className="flex flex-row items-center justify-start w-full">
                                        <img src="./images/html.png" alt="" className="w-12 mr-5" />
                                        <p>HTML</p>
                                   </div>
                                   <div className="flex flex-row items-center justify-start w-full">
                                        <img src="./images/css.png" alt="" className="w-12 mr-5" />
                                        <p>CSS</p>
                                   </div>
                                   <div className="flex flex-row items-center justify-start w-full">
                                        <img src="./images/js.png" alt="" className="w-12 mr-5" />
                                        <p>Javascript</p>
                                   </div>
                                   <div className="flex flex-row items-center justify-start w-full">
                                        <img src="./images/react.png" alt="" className="w-12 mr-5" />
                                        <p>React</p>
                                   </div>
                                   <div className="flex flex-row items-center justify-start w-full">
                                        <img src="./images/tw.png" alt="" className="w-12 mr-5" />
                                        <p>Tailwind CSS</p>
                                   </div>
                              </div>
                              <div className="space-y-3">
                                   <p className="text-2xl mb-5" style={{ fontFamily: "poppins" }}>
                                        Learn & <em className="not-italic text-rose-600">practice</em>
                                   </p>
                                   <div className="flex flex-row items-center justify-start w-full">
                                        <img src="./images/firebase.png" alt="" className="w-12 mr-5" />
                                        <p>Firebase</p>
                                   </div>
                                   <div className="flex flex-row items-center justify-start w-full">
                                        <img src="./images/node.png" alt="" className="w-12 mr-5" />
                                        <p>Node JS</p>
                                   </div>
                                   <div className="flex flex-row items-center justify-start w-full">
                                        <img src="./images/figma.png" alt="" className="w-12 mr-5" />
                                        <p>Figma</p>
                                   </div>
                                   <div className="flex flex-row items-center justify-start w-full">
                                        <img src="./images/three.png" alt="" className="w-12 mr-5" />
                                        <p>Three JS</p>
                                   </div>
                              </div>
                              <div className="space-y-3">
                                   <p className="text-2xl mb-5" style={{ fontFamily: "poppins" }}>
                                        Other <em className="not-italic text-rose-600">skills</em>
                                   </p>
                                   <div className="flex flex-row items-center justify-start w-full">
                                        <img src="./images/english.png" alt="" className="w-12 mr-5" />
                                        <p>English C1/C2</p>
                                   </div>
                                   <div className="flex flex-row items-center justify-start w-full">
                                        <img src="./images/ppl.png" alt="" className="w-12 mr-5" />
                                        <p>People management</p>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
}

export default Skills;
