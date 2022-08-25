import React from "react";
import { useState } from "react";

export const authContext = React.createContext({});

export const AutoProvider = (props) => {
  const [user, setUser] = useState({ name: "" });

  return (
    <authContext.Provider value={{ user, setUser }}>
      {props.children}
    </authContext.Provider>
  );
};

export const useAuth = () => React.useContext(authContext);
