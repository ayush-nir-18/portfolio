import Hero from "./main/Hero";
import Projects from "./main/Projects";
import Testimonial from "./main/Testimonial";
import Skills from "./main/Skills";
import Work from "./main/Work";
import Education from "./main/Education";
import Articles from "./main/Articles";
import Contact from "./main/Contact";

const MainContainer = () => {
  return (
    <>
      <main id="content">
        <div className="w-full max-w-2xl mx-auto pt-10 px-4 sm:px-6 lg:px-8">
          <Hero />
          <Projects />
          <Testimonial />
          <Skills />
          <Work />
          <Education />
          <Articles />
          <Contact />
        </div>
      </main>
    </>
  );
};

export default MainContainer;
