import React from "react";

const useAuth = () => {
  let authState = {
    name: "Kelvin",
  };
  const setAuthState = (newState) => {
    authState = newState;
  };

  return [authState, setAuthState];
};

export default useAuth;
