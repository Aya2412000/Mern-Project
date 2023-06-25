import React from "react";
import Form from "./Form";
import Register from "./Register";
import Login from "./Login";
import { useCookies } from "react-cookie";

export default function Auth() {
  const [cookies, setCookies] = useCookies(["access_token"]);

  const removeCookies = () => {
    setCookies("access_token", "");
    window.localStorage.removeItem("adminId");
    window.location.reload(false);
  };

  return (
    <div>
      {cookies.access_token ? (
        <button className="btn bg-danger" onClick={removeCookies}>
          Logout
        </button>
      ) : (
        <>
          <Register />
          <Login />
        </>
      )}
    </div>
  );
}
