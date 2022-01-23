import { React, useState } from "react";
import Fade from "react-reveal/Fade";
import { GoPerson } from "react-icons/go";
import { BsBriefcaseFill } from "react-icons/bs";
import { BiNetworkChart } from "react-icons/bi";
import { GoMailRead } from "react-icons/go";
import { Link, NavLink } from "react-router-dom";

function ButtonsMenu() {
     return (
          <Fade>
               <div className="w-full flex justify-end z-50 absolute">
                    <div className="h-screen w-auto fixed z-30 flex items-end justify-center flex-col space-y-6 text-xl pr-4">
                         <Link to="/">
                              <img src="images/Logo - Alb.png" alt="" className="w-10 hover:scale-110 transform" />
                         </Link>
                         <NavLink to="/about">
                              <button>
                                   <div className="group flex flex-row items-center hover:bg-rose-600 rounded-3xl duration-150 transition-all ease-linear z-50">
                                        <p className="opacity-0 group-hover:opacity-100 duration-150 transition-all ease-linear text-base pl-4 hidden lg:block">About Me</p>
                                        <NavLink to="/about" className={({ isActive }) => (isActive ? "p-3 rounded-3xl bg-rose-600 group-hover:bg-opacity-0 duration-150 transition-all ease-linear" : "p-3 rounded-3xl bg-zinc-800 group-hover:bg-opacity-0 duration-150 transition-all ease-linear border-zinc-600 border")}>
                                             <GoPerson />
                                        </NavLink>
                                   </div>
                              </button>
                         </NavLink>
                         <NavLink to="/skills">
                              <button>
                                   <div className="group flex flex-row items-center hover:bg-rose-600 rounded-3xl duration-150 transition-all ease-linear">
                                        <p className="opacity-0 group-hover:opacity-100 duration-150 transition-all ease-linear text-base pl-4 hidden lg:block">Skills</p>
                                        <NavLink to="/skills" className={({ isActive }) => (isActive ? "p-3 rounded-3xl bg-rose-600 group-hover:bg-opacity-0 duration-150 transition-all ease-linear" : "p-3 rounded-3xl bg-zinc-800 group-hover:bg-opacity-0 duration-150 transition-all ease-linear border-zinc-600 border")}>
                                             <BiNetworkChart />
                                        </NavLink>
                                   </div>
                              </button>
                         </NavLink>
                         <NavLink to="/portfolio">
                              <button>
                                   <div className="group flex flex-row items-center hover:bg-rose-600 rounded-3xl duration-150 transition-all ease-linear">
                                        <p className="opacity-0 group-hover:opacity-100 duration-150 transition-all ease-linear text-base pl-4 hidden lg:block">Portfolio</p>
                                        <NavLink to="/portfolio" className={({ isActive }) => (isActive ? "p-3 rounded-3xl bg-rose-600 group-hover:bg-opacity-0 duration-150 transition-all ease-linear" : "p-3 rounded-3xl bg-zinc-800 group-hover:bg-opacity-0 duration-150 transition-all ease-linear border-zinc-600 border")}>
                                             <BsBriefcaseFill />
                                        </NavLink>
                                   </div>
                              </button>
                         </NavLink>
                         <NavLink to="/contact">
                              <button>
                                   <div className="group flex flex-row items-center hover:bg-rose-600 rounded-3xl duration-150 transition-all ease-linear">
                                        <p className="opacity-0 group-hover:opacity-100 duration-150 transition-all ease-linear text-base pl-4 hidden lg:block">Contact Me</p>
                                        <NavLink to="/contact" className={({ isActive }) => (isActive ? "p-3 rounded-3xl bg-rose-600 group-hover:bg-opacity-0 duration-150 transition-all ease-linear" : "p-3 rounded-3xl bg-zinc-800 group-hover:bg-opacity-0 duration-150 transition-all ease-linear border-zinc-600 border")}>
                                             <GoMailRead />
                                        </NavLink>
                                   </div>
                              </button>
                         </NavLink>
                    </div>
               </div>
          </Fade>
     );
}

export default ButtonsMenu;
