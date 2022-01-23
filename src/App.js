import HomePage from "./Components/HomePage";
import About from "./Components/About";
import ButtonsMenu from "./Components/ButtonsMenu";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { ContactUs } from "./Components/ContactForm";
import Skills from "./Components/Skills";
import Portfolio from "./Components/Portfolio";
import { createBrowserHistory } from "history";

function App() {
     const customHistory = createBrowserHistory();
     return (
          <BrowserRouter history={customHistory}>
               <ButtonsMenu />
               <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="about" element={<About />} />
                    <Route path="skills" element={<Skills />} />
                    <Route path="portfolio" element={<Portfolio />} />
                    <Route path="contact" element={<ContactUs />} />
               </Routes>
          </BrowserRouter>
     );
}

export default App;
