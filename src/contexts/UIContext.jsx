import { createContext, useContext, useState } from "react";

const UIContext = createContext();

export const UIProvider = ({ children }) => {
  const [isSignOutOpen, setIsSignOutOpen] = useState(false);

  const openSignOut = () => setIsSignOutOpen(true);
  const closeSignOut = () => setIsSignOutOpen(false);

  return (
    <UIContext.Provider value={{ isSignOutOpen, openSignOut, closeSignOut }}>
      {children}
    </UIContext.Provider>
  );
};

export const useUI = () => useContext(UIContext);
