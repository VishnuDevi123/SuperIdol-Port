import "./App.css";
import Header from "./components/header/header.component";
import About from "./components/about/about.component";
import Projects from "./components/projects/projects.component";
import Contact from "./components/contact/contact.component";
import References from "./components/references/references.component";
import Skills from "./components/skills/skills.component";
import { motion, useScroll, useSpring } from "framer-motion";
import ParticlesI from "./components/particles/particles.component";


function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-gray-400 via-gray-600 to-gray-800 relative">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-pink-500 origin-center"
        style={{ scaleX }}
      />

      <ParticlesI
              params={{
            		particles: {
            			line_linked: {
            				shadow: {
            					enable: true,
            					color: "#FFC0CB",
            					blur: 5
            				}
            			}
            		}
            	}}
            />

      {/* Load the fancy particles effect */}

      <div className="w-full z-10">
        <Header />
        <section id="about">
          <About />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="references">
          <References />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="contact">
          <Contact />
        </section>
        <h3 className="text-2xl font-customFont  mt-6 text-center">
          VishnuDevi © 2025
        </h3>
      </div>
    </motion.div>
  );
}

export default App;
