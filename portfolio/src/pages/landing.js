import React from 'react';
import NavbarLanding from './navbarlanding';
// import Team from './teampage';
import Footer from './footer';
import Features from './features';
import Title from './about';
import Project from './Projects'
// import Review from './review';
// import Contacts from './contact'

export default function Landing() {
  return (
    <div className="overflow-x-hidden">
      {/* LandpageNavBar */}
      <NavbarLanding />

      {/* Title */}
      <Title />

      {/* Features */}
      <h1 className="titles" id="skills">Skills</h1>
      <Features />

      {/* App Screenshots */}

      <h1 className="titles" id="projects">Projects</h1>
      <Project />
      {/* Review */}
      {/* <Review /> */}
      {/* Team */}
      {/* <Contacts /> */}

      {/* footer */}
      <Footer />
    </div>
  );
}
