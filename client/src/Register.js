import React, { useState } from "react";
import Form from "./Form";
import axios from "axios";
export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:3005/register", { username, password });
    alert("Admin created");
  };
  return (
    <div>
      <Form
        label="Register"
        username={username}
        password={password}
        setUsername={setUsername}
        setPassword={setPassword}
        onSubmit={onSubmit}
      />
    </div>
  );
}
