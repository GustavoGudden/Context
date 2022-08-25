import React from "react";
import { useAuth } from "../provider/auth";

function Feed() {
  const { user } = useAuth();

  return (
    <>
      <h1 className="text-slate-900">feed</h1>
      <div>
        <p>{user.name}</p>
      </div>
    </>
  );
}
export default Feed;
