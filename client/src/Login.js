import React, { useState } from "react";
import Form from "./Form";
import axios from "axios";
import { useCookies } from "react-cookie";
export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [_, setCookies] = useCookies(["access_token"]);

  const onSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post("http://localhost:3005/login", {
      username,
      password,
    });
    setCookies("access_token", response.data.token);
    window.localStorage.setItem("userID", response.data.adminId);
    window.location.reload(false);
  };

  return (
    <div>
      <Form
        label="Login"
        username={username}
        password={password}
        setUsername={setUsername}
        setPassword={setPassword}
        onSubmit={onSubmit}
      />
    </div>
  );
}
