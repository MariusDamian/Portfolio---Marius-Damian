import React from "react";
import Fade from "react-reveal/Fade";
import Work from "./Work";

function Portfolio() {
     return (
          <div style={{ backgroundColor: "#212428" }} className="bg-cover">
               <div className="w-full flex flex-col items-center justify-center lg:space-y-16 lg:py-20 py-7 space-y-10 ml-5 lg:ml-0" id="home">
                    <h1 className="md:text-5xl text-3xl" style={{ fontFamily: "Bebas Neue" }}>
                         My <em className="not-italic text-rose-600">Portfolio</em>
                    </h1>
                    <Fade right cascade>
                         <div className="flex lg:flex-row flex-col lg:space-x-16 space-y-10 mt-7 lg:mt-0 lg:space-y-0 justify-start lg:justify-center w-full">
                              {/* Section Start */}
                              <Work title="CadoulIeftin.ro" image="\images\cadoulIeftin.png" type="Live website" netLink="https://cadoulieftin.ro/" gitLink="https://github.com/MariusDamian/Cadoul-Ieftin.ro" />
                              <Work title="API Weather application" image="\images\weatherApp.png" type="Application" netLink="https://weatherappdmn.netlify.app/" gitLink="https://github.com/MariusDamian/Weather-APP" />
                              <Work title="Medical equipment company" image="\images\alpha.png" type="Website" netLink="https://alphamedical.netlify.app/" gitLink="https://github.com/MariusDamian/Alpha-Medical" />
                              {/* Section End */}
                         </div>
                    </Fade>
                    <Fade left cascade>
                         <div className="flex lg:flex-row lg:space-x-16 flex-col space-y-10 lg:space-y-0 justify-start lg:justify-center w-full">
                              {/* Section Start */}
                              <Work title="Elrond price history comparator" image="\images\elrond.png" type="Application" netLink="https://elrond-hodl.netlify.app/" gitLink="https://github.com/MariusDamian/Elrond-HODL" />
                              <Work title="Crypto website" image="\images\crypto.png" type="Website" netLink="https://avchain.netlify.app/" gitLink="https://github.com/MariusDamian/Avchain-Crypto" />
                              <Work title="ToDo App + Firebase" image="\images\todo.png" type="Application" netLink="https://tododmn.netlify.com/" gitLink="https://github.com/MariusDamian/Todo-App" />
                              {/* Section End */}
                         </div>
                    </Fade>
                    <Fade left cascade>
                         <div className="flex lg:flex-row flex-col lg:space-x-16 space-y-10 mt-7 lg:mt-0 lg:space-y-0 justify-start lg:justify-center w-full">
                              {/* Section Start */}
                              <Work title="Vote bar with color change based on votes" image="\images\votebar.png" type="Application" netLink="https://votedmn.netlify.app/" gitLink="https://github.com/MariusDamian/VoteBar" />
                              <Work title="Text editor - increment, color change" image="\images\texteditor.png" type="Application" netLink="https://texteditordmn.netlify.app/" gitLink="https://github.com/MariusDamian/Text-Increment" />
                              {/* Section End */}
                         </div>
                    </Fade>
               </div>
          </div>
     );
}

export default Portfolio;
