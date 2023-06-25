import React, { useEffect, useState } from "react";
import "./LOGIN.css";

import axios from "axios";
import { useCookies } from "react-cookie";
export default function LOGIN() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [_, setCookies] = useCookies(["access_token"]);

  const LoginNow = async (e) => {
    e.preventDefault();
    const response = await axios.post("http://localhost:3001/login", {
      username,
      password,
    });
    setCookies("access_token", response.data.token);
    window.localStorage.setItem("userID", response.data.adminId);
    window.location.reload(false);
  };
  return (
    <div className="container con">
      <h1> Welcome to Herfa</h1>
      <div className="h-Line"></div>
      <div className=" form-container login-form">
        <form className="signProviderForm " onSubmit={LoginNow}>
          <div class="col-md-4 login-input">
            <div className="mb-3">
              <label for="user name" className="form-label">
                user name
              </label>

              <input
                type="text"
                className="form-control "
                placeholder="@"
                id="user name"
                value={username}
                aria-label="Username"
                aria-describedby="basic-addon1"
                style={{ width: "270px" }}
                required
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
          </div>

          {/* كلمة المرور */}
          <div class="col-md-4 login-input">
            <div className="mb-3">
              <label for="Password1" className="form-label">
                password
              </label>
              <input
                type="password"
                className="form-control "
                id="Password1"
                style={{ width: "270px" }}
                value={password}
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <button type="submit" className="btn btn-login ">
            Login
          </button>
          {/* <div class="d-grid gap-2 col-6 mx-auto">
            <button class="btn  btn-login" type="button">
              {t("Login")}
            </button>
          </div> */}
        </form>
      </div>
    </div>
  );
}
