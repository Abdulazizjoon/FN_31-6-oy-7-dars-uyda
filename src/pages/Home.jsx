import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
  let navigate=useNavigate()
  useEffect(function() {
    let token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
  },[])
  return (
    <h1>home</h1>
  )
}

export default Home