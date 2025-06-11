import { createContext, useContext, useState } from "react";

const ActiveDoorColorContext = createContext();

export function ActiveDoorColorProvider({ children }) {
  const [activeColorId, setActiveColorId] = useState("2");

  return (
    <ActiveDoorColorContext.Provider value={{ activeColorId, setActiveColorId }}>
      {children}
    </ActiveDoorColorContext.Provider>
  );
}

export function useActiveDoorColor() {
  return useContext(ActiveDoorColorContext);
}
