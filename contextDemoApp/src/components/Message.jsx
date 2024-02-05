import React, { useContext } from "react";
import UserContext from "../context/UserContext";

function Message() {
  const { user } = useContext(UserContext);
  return <div>Welcome: {user.password}</div>;
}

export default Message;
