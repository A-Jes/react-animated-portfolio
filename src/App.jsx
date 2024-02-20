import "./app.scss";
import Contact from "./components/Contact/Contact";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Parallax from "./components/Parallax/Parallax";
import Portfolio from "./components/Portfolio/Portfolio";
import Services from "./components/Services/Services";


const App = () => {
  return <div className="app">
    <section id="Homepage" >
      <Navbar />
      <Hero/>
    </section>
    <section >
      <Parallax type="services"/>
    </section>
    <section id="Services"> 
      <Services/>
      </section>
    <section id="Portfolio">
      <Parallax type="portfolio"/>
    </section>
      <Portfolio/>
    <section id="Contact" >
      <Contact />
    </section>
    {/* <Test/>
    <Test/> */}
  </div>;
};

export default App;
