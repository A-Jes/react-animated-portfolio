import "./app.scss";
import Navbar from "./components/Navbar/Navbar";
import Parallax from "./components/Parallax/Parallax";
import Contact from "./components/contact/contact";
import Hero from "./components/hero/Hero";
import Portfolio from "./components/portfolio/Portfolio";
import Services from "./components/services/Services";

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
