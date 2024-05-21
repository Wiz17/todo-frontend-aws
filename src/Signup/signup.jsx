import { apiSignup } from "../Api/api";
import "../Signup/signup.css";
import {Link} from "react-router-dom"
import { useEffect, useState } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import PageNotFound from '../PageNotFound/pagenotfound'

const Signup = () => {

  const signup = useMutation({
    queryKey: ["signup"],
    mutationFn: (user) => apiSignup(user)
  });
    const formSubmit=(p)=>{
        p.preventDefault();
        const user={
            name:p.target[0].value,
            email:p.target[1].value,
            password:p.target[2].value
        }
        // apiSignup(user)
        signup.mutate(user)
    }

    const [expiredStatus, setExpiredStatus] = useState(true);

    useEffect(() => {
      const checkTokenValidity = async () => {
        // Check if token exists in localStorage
        const token = localStorage.getItem("token");
        if (token) {
          const response = await fetch(`/home/isTokenExpired?token=${token}`, {
            method: "GET",
            headers: {
              "Access-Control-Allow-Origin": "*",
              "Content-Type": "application/json",
              mode: "no-cors",
            },
          });
          const data = await response.json();
          console.log(data);
          if (!data) {
            console.log("expiredStatus");
            setExpiredStatus(true); // Token is expired
            window.location.href = "/Home";
          } else {
            setExpiredStatus(false); // Token is not expired
          }
        } else{
      setExpiredStatus(false);
    }
      };
  
      checkTokenValidity();
    }, []);
  return (
    <>
    {expiredStatus?<PageNotFound/> : (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <form onSubmit={formSubmit} className="form">
        <div class="form-group">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div class="form-group">
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div class="form-group">
            <label for="password">Password:</label>
            <input type="password" id="password" name="password" required />
          </div>
          <button type="submit">Signup</button>
          <p style={{marginTop:'10px'}}><Link to='/'>Login</Link></p>

        </form>
      </div>
      )}
    </>
  );
};
export default Signup;
