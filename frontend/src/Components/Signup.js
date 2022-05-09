import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Signup = () => {
  const navigate = useNavigate();
  const [sent, setSent] = useState(false);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSign = async (e) => {
    try {
      e.preventDefault();
      await axios.post(
        "http://localhost:3000/register",
        { userName, userEmail, password },
        setSent(true)
      );
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      {!sent ? (
        <form className="container" onSubmit={handleSign}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              userName
            </label>
            <input
              type="text"
              required
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              userEmail
            </label>
            <input
              type="email"
              required
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
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <p>
            If you have already accounte Please{" "}
            <span onClick={() => navigate("/login")}>Click Here To Login</span>{" "}
          </p>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      ) : (
        navigate("/login")
      )}
    </div>
  );
};

export default Signup;
