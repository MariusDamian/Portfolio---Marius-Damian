import React from "react";
import { BsFillEnvelopeFill, BsGithub, BsFillArrowUpRightCircleFill } from "react-icons/bs";

function Work(props) {
     return (
          <div className="flex flex-col p-5 items-center rounded-3xl group border border-gray-700 shadow-lg shadow-rose-600/30 lg:h-[420px] lg:w-[350px] w-64 h-80" style={{ backgroundColor: "#1e2024" }}>
               <div className="overflow-hidden rounded-3xl">
                    <a href={props.netLink} target="_blank">
                         <img src={props.image} alt="" className="rounded-3xl hover:scale-110 transform transition-all duration-1000 overflow-hidden" style={{ height: "280px", width: "300px" }} />
                    </a>
               </div>

               <div className="flex flex-col items-start justify-center group-hover:text-rose-600 transition-all duration-500 mt-3 ml-3 w-full">
                    <p className="text-left text-rose-600 text-base">
                         {props.type}
                         {"   "}
                         <em className="inline-block text-white transform hover:scale-125 transition-all duration-500">
                              <a href={props.gitLink} target="_blank">
                                   <BsGithub />
                              </a>
                         </em>
                    </p>
                    <a href={props.netLink} target="_blank">
                         <h1 className="lg:text-2xl text-base">
                              {props.title}
                              <em className="inline-block ml-2 text-base group-hover:opacity-100 opacity-0 transition-all duration-300 ease-linear text-rose-600">
                                   <BsFillArrowUpRightCircleFill />
                              </em>
                         </h1>
                    </a>
               </div>
          </div>
     );
}

export default Work;
