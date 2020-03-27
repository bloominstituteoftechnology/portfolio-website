import React from "react";
// import Button from '../components/button';

export default function NavBarLanding() {
  return (
    <section class="antialiased bg-gray-200">
      <div class="lg:px-16 px-2 bg-white flex flex-wrap items-center lg:py-0 py-2 mx-auto">
        <div class="flex-1 flex justify-between items-center mx-auto"></div>

        <div class="navone" id="menu">
          <nav>
            <ul class="nav">
              <a class="nav4" href="#about">
                About
              </a>
              <a class="nav4" href="#skills">
                Skills
              </a>

              <a class="nav4" href="#projects">
                Projects
              </a>

              <a class="nav4" href="#contact">
                Contact
              </a>
              <a class="nav4" href="https://onedrive.live.com/view.aspx?resid=128C0D475125B54D!2663&ithint=file%2cdocx&wdLOR=c8C6EA985-7C8E-477A-A82E-6ECCF17AD781&authkey=!AMcbfNK4taF8t5w">
                Resume
              </a>

              <div>
                <div className="lg:p-12 py-3 px-0 flex justify-center"></div>
              </div>
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
}
