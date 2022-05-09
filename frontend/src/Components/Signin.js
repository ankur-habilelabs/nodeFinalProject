import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();
const Signin = () => {
  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSignIn = async (e) => {
    try {
      e.preventDefault();
      
      await axios
        .post("http://localhost:3000/login", { userEmail, password })
        .then((res) => {
          if (res.status === 200) {
            localStorage.setItem("token", JSON.stringify(res.data));
            navigate("/getBookData");
            // toast("Login Successfully");
          } else {
            // toast("Erro");
          }
        })
        .catch((err) => {
          console.log(err);
        });

    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <form className="container" onSubmit={handleSignIn}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            userEmail
          </label>
          <input
            type="email"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <p>
          If you have don't Have account{" "}
          <span onClick={() => navigate("/")}>
            {" "}
            Please Click Here To Register
          </span>{" "}
        </p>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Signin;
