import { createContext, useContext } from "react";

const TechStackContext = createContext();

export const TechStackProvider = ({ children }) => {
  const stacks = {
    summarizer: ["JavaScript", "Gemini API","API Handling", "Chrome Extension", "AI/ML"],
    ecomify: ["Java", "Springboot", "JPA Repository","REST API","MVC Architecture","CRUD Operations"],
    portfolio:["React.js", "Tailwind CSS", "Responsive Web Design", "Portfolio Website", "Frontend Development", "Single Page Application (SPA)"]
  };

  return (
    <TechStackContext.Provider value={stacks}>
      {children}
    </TechStackContext.Provider>
  );
};

export const useTechStack = () => useContext(TechStackContext);