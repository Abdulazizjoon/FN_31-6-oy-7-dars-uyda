import React, { useState } from "react";
import "./css/register.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Login() {
  let navigate = useNavigate();
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [confirm, setConfirm] = useState("");
  function valid() {
    if (name.length < 2) {
      alert("bunday ism bolishi munkun emas");
      return;
    }
    if (email.length < 3) {
      alert("bunday email bolishi munkun emas");
      return;
    }
    if (password.length < 3) {
      alert("parol kamida 3ta belgidan iborat bolishi shart");
      return;
    }
    if (password != confirm) {
      alert("parolni togri kiriting");
      return;
    }
    return true;
  }
  function submit(e) {
    e.preventDefault();
    let isvalid = valid();
    if (!isvalid) {
      return;
    }
    let user = {
      username: name,
      email: email,
      password: password,
    };
    axios
      .post(`https://auth-rg69.onrender.com/api/auth/signup`, user, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log(response);
        alert(response.data.message);
        navigate("/login");
      })
      .catch((err) => {
        console.log(err);
        if (err.response.status == 400) {
          alert(err.response?.data?.message);
        }
      });
  }

  return (
    <div className="register-container">
      <form className="form" onSubmit={submit}>
        <input
          type="text"
          value={name}
          placeholder="ismingizni kiriting"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          type="email"
          value={email}
          placeholder="emailingizni kiriting"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="password"
          value={password}
          placeholder="parolni kiriting"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <input
          type="password"
          value={confirm}
          placeholder="parolni takrorlang"
          onChange={(e) => {
            setConfirm(e.target.value);
          }}
        />
        <button>Login</button>
      </form>
    </div>
  );
}

export default Login;
