import React from "react";
 
export default function Form({
  label,
  username,
  password,
  setPassword,
  setUsername,
  onSubmit,
}) {
  return (
    <div
      className="container"
      style={{ width: "700px", backgroundColor: "#ededed", padding: "3rem" }}
    >
      <form onSubmit={onSubmit}>
        <h2 className="text-white">{label}</h2>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <br />
          <input
            className="form-control"
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          ></input>
          <br />
          <input
            className="form-control"
            type="text"
            id="username"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <br />
          <button className="btn bg-success form-control" type="submit">
            {label}
          </button>
        </div>
      </form>
    </div>
  );
}
