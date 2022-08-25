import React from "react";
import { authContext, useAuth } from "./provider/auth";
import Login from "./componentes/login_teste";
import Feed from "./componentes/feed";


function App() {
  //const { user, setUser } = useAuth();
  //console.log(user);

  return (
    <>
      <Login></Login>
      <Feed></Feed>
    </>
  );
}

export default App;
