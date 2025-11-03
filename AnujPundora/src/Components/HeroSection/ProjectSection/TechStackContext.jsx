import { createContext, useContext } from "react";

const TechStackContext = createContext();

export const TechStackProvider = ({ children }) => {
  const stacks = {
    summarizer: ["JavaScript", "Gemini API", "Chrome Extension", "AI/ML"],
    temp: ["React", "TailwindCSS", "Node.js"],
  };

  return (
    <TechStackContext.Provider value={stacks}>
      {children}
    </TechStackContext.Provider>
  );
};

export const useTechStack = () => useContext(TechStackContext);