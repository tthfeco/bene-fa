import { createContext, useContext, useState } from "react";

const ActiveDoorContext = createContext();

export function ActiveDoorProvider({ children }) {
  const [activeDoorId, setActiveDoorId] = useState(null);

  return (
    <ActiveDoorContext.Provider value={{ activeDoorId, setActiveDoorId }}>
      {children}
    </ActiveDoorContext.Provider>
  );
}

export function useActiveDoor() {
  return useContext(ActiveDoorContext);
}
