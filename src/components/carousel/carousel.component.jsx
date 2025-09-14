
import { motion, AnimatePresence } from "framer-motion"
import './carousel.css'
import { useState } from 'react'
import linkedIn from "../../assets/linkedin.svg"

const references = [
  {
    note: "Working with Vishnu has been an incredible experience. His attention to detail and dedication to solving complex problems made a huge difference in our project outcomes.",
    name: "Rohit Chintakindi",
    role: "Colleague",
    linkedinLink: "https://www.linkedin.com/in/rohit-chintakindi/",
  },
  {
    note: "Vishnu is an exceptionally driven team member. He always brings fresh ideas to the table and follows through with well-executed solutions. A valuable contributor to any tech team.",
    name: "Rudresh Bhandari",
    role: "Colleague",
    linkedinLink: "https://www.linkedin.com/in/rudresh-bhandari-0817481aa/",
  },
  {
    note: "Vishnu consistently impressed me with his proactive attitude and technical sharpness. His ability to quickly learn new tools and apply them effectively was critical to our success.",
    name: "Anuj Buch",
    role: "Colleague",
    linkedinLink: "https://www.linkedin.com/in/anuj-buch-059078262/",
  },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % references.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + references.length) % references.length);
  };

  return (
    <div className="carousel-container relative flex justify-center items-center mt-6">
      <button onClick={handlePrev} className="absolute left-0 ml-4 text-3xl z-10 text-black">
        &lt;
      </button>
      <div className="carousel-inner flex space-x-8 ">
        <AnimatePresence>
          {references.map((reference, index) =>
            index === currentIndex ? (
              <motion.div
                key={index}
                className="reference-card  text-black rounded-lg p-6 shadow-lg transform transition-transform duration-300 font-customFont"
                initial={{ opacity: 0, rotateY: 90 }}
                animate={{ opacity: 1, rotateY: 0 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.8, type: 'spring', stiffness: 60 }}
              >
                <p className="text-lg mb-4">{reference.note}</p>
                <h2 className="text-2xl font-bold">{reference.name}</h2>
                <p className="text-black-400">{reference.role}</p>
                <a href={reference.linkedinLink} target="_blank" rel="noopener noreferrer" >
                  <img src={linkedIn} alt="linkedin" className="w-6 h-6" />
                </a>
              </motion.div>
            ) : null
          )}
        </AnimatePresence>
      </div>
      <button onClick={handleNext} className="absolute right-0 mr-4 text-3xl z-10 text-black">
        &gt;
      </button>
    </div>
  );
};

export default Carousel;