import React, { useState, createContext, useContext } from "react";

const AppContext = createContext(null);

export const Parent = () => {
  const [userName, setUserName] = useState("PedroTech");

  return (
    <AppContext.Provider value={{ userName, setUserName }}>
      <Child1 />
      <Child2 />
    </AppContext.Provider>
  );
};

export const Child1 = () => {
  const { userName } = useContext(AppContext);

  return <h1> {userName} </h1>;
};

export const Child2 = () => {
  const { setUserName } = useContext(AppContext);
  return (
    <div>
      <button
        onClick={() => {
          setUserName("PedroTechnologies");
        }}
      >
        Change Username
      </button>
    </div>
  );
};
