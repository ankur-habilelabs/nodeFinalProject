import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
toast.configure();
const Navbar = () => {
  const localToken = JSON.parse(localStorage.getItem("token"));
  const navigate = useNavigate();
  const logOut = async () => {
    window.localStorage.clear();
    
  };
  const notify = () => {
    toast("Logout Successfully");
   
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            BookStore
          </a>
          <button
            className="navbar-toggler m-3"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                {localToken ? (
                  <button
                    type="button"
                    className="btn btn-primary m-3"
                    onClick={() => {
                      logOut();
                      notify();
                      navigate("/login");
                      // window.location.reload();
                    }}
                  >
                    Logout
                  </button>
                ) : (
                  ""
                )}
              </li>
              <li className="nav-item">
                {localToken ? (
                  <button
                    type="button"
                    className="btn btn-primary m-3"
                    onClick={() => {
                      navigate("/bookAdd");
                    }}
                  >
                    AddBook
                  </button>
                ) : null}
              </li>
              <li className="nav-item">
                {localToken ? (
                  <button
                    type="button"
                    className="btn btn-primary m-3"
                    onClick={() => {
                      navigate("/getBookData");
                    }}
                  >
                    BookList
                  </button>
                ) : (
                  ""
                )}
              </li>
              <li className="nav-item">
                {!localToken ? (
                  <button
                    type="button"
                    className="btn btn-primary m-3"
                    onClick={() => {
                      navigate("/login");
                    }}
                  >
                    Login
                  </button>
                ) : null}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
