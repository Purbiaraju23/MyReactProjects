import React, { useState } from "react";
import UserContext from "./UserContext";

function UserContextPRovider({ children }) {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserContextPRovider;
