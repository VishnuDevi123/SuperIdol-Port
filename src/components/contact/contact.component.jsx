import linkedIn from "../../assets/linkedin.svg";
import gitHubI from "../../assets/github.svg";

const Contact = () => {
  return (
    <div className="p-10 text-center mt-20">
      <h3 className="text-center font-customFont text-5xl text-textPrimary mb-6">
        Let's Connect!
      </h3>
      <div className="flex justify-center space-x-10 p-8">
        <a
          href="https://www.linkedin.com/in/vishnuvardhana-devi-reddy"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn Profile"
        >
          <img src={linkedIn} alt="LinkedIn" className="w-10 h-10 hover:scale-110 transition-transform duration-300" />
        </a>
        <a
          href="https://github.com/VishnuDevi123"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub Profile"
        >
          <img src={gitHubI} alt="GitHub" className="w-10 h-10 hover:scale-110 transition-transform duration-300" />
        </a>
      </div>
    </div>
  );
};

export default Contact;
