import React from "react";
import ProjectCard from "../projectcard/projectcard.component";

const Projects = () => {
  const projects = [
    {
      title: "Movie Recommendation App",
      description:
        "Built a responsive movie discovery platform using React and Tailwind CSS. Integrated TMDB API, secured authentication using Node.js and MongoDB, and added content-based recommendation using TF-IDF vectorization. Deployed on AWS with Docker and handled 500+ queries during testing.",
      technologies: [
        "React",
        "Tailwind CSS",
        "Node.js",
        "MongoDB",
        "Docker",
        "AWS",
        "TF-IDF",
      ],
      githubLink: "https://github.com/VishnuDevi123",
    },
    {
      title: "Loan Default Risk Prediction Platform",
      description:
        "Built a full-stack platform using React, Node.js, and MongoDB to evaluate borrower risk. Trained predictive models on 10,000+ loan records using scikit-learn. Integrated SHAP for explainability and secured model access via JWT-authenticated Flask APIs.",
      technologies: [
        "React",
        "Node.js",
        "MongoDB",
        "Flask",
        "Python",
        "scikit-learn",
        "SHAP",
      ],
      githubLink: "https://github.com/VishnuDevi123",
    },
    {
      title: "RAG-Based WhatsApp AI Chatbot",
      description:
        "Developed an AI chatbot using Venom-Bot and WhatsApp for real-time messaging. Integrated Retrieval-Augmented Generation with FAISS and LangChain. Used LLaMA 3 via Groq API for lightweight inference.",
      technologies: [
        "Python",
        "FAISS",
        "LangChain",
        "Venom-Bot",
        "Groq API",
        "WhatsApp",
      ],
      githubLink: "https://github.com/VishnuDevi123",
    },
    {
      title: "Full-Stack Chat Application (Microservices)",
      description:
        "Desigining a scalable chat platform with Redis-based session tracking, JWT auth, and real-time messaging using Socket.IO. Built with Node.js microservices and MongoDB for persistence.",
      technologies: [
        "Node.js",
        "Redis",
        "JWT",
        "Socket.IO",
        "MongoDB",
        "Express",
      ],
      githubLink: "https://github.com/VishnuDevi123",
    },
    {
      title: "Anomaly-Based Intrusion Detection System",
      description:
        "Built a cybersecurity project using supervised and unsupervised ML to detect network anomalies. Implemented data pipelines, packet parsing, and real-time alert generation.",
      technologies: [
        "Python",
        "Snort",
        "Wireshark",
        "Scikit-learn",
        "Pandas",
        "Flask",
      ],
      githubLink: "https://github.com/VishnuDevi123",
    },
  ];

  return (
    <div className="p-8">
      <h3 className="font-customFont text-5xl text-center mb-8 text-textPrimary">
        Projects
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
