import React, { useState } from "react";
import "./css/register.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Login() {
  let navigate = useNavigate();
  let [name, setName] = useState("");
  let [password, setPassword] = useState("");
  function valid() {
    if (name.length < 2) {
      alert("bunday ism bolishi munkun emas");
      return;
    }
    if (password.length < 3) {
      alert("parol kamida 3ta belgidan iborat bolishi shart");
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
      password: password,
    };
    axios
      .post(`https://auth-rg69.onrender.com/api/auth/signin`, user, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log(response);
        localStorage.setItem('user', JSON.stringify(response.data))
        localStorage.setItem("token", response.data.accessToken);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        if (err.response.status == 404) {
          alert(err.response?.data?.message);
        }
        if (err.response.status == 401) {
          alert(err.response?.data?.message);
        }
      });
  }
  function registerpage(e) {
    navigate('/register')
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
          type="password"
          value={password}
          placeholder="parolni kiriting"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <div>
          <p onClick={registerpage} className="register">register page</p>
        </div>
        <button>Login</button>
      </form>
    </div>
  );
}

export default Login;
