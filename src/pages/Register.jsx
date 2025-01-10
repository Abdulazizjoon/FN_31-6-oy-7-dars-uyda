import React, { useState } from "react";

function Register() {
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [confirm, setConfirm] = useState("");
  return (
    <div>
      <form>
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <input
          type="password"
          value={confirm}
          onChange={(e) => {
            setConfirm(e.target.value);
          }}
        />
      </form>
    </div>
  );
}

export default Register;
