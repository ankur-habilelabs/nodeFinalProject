import "./App.css";
// asdfsdfsd
import { Routes, Route } from "react-router-dom";
import Signin from "./Components/Signin";
import Signup from "./Components/Signup";
import GetUserData from "./Components/GetUserData";
import ShowUserData from "./Components/ShowUserData";
import GetBookData from "./Components/GetBookData";
import ShowBookData from "./Components/ShowBookData";
import BookAdd from "./Components/BookAdd";
import Navbar from "./Components/Navbar";
function App() {
  const auth = localStorage.getItem("token");
  return (
    <>
      <Navbar />
      {/* too see bookdata  getBookData */}
      {/* {auth ? (
        <Routes>
          <Route element={<Navbar />} />
          <Route exact path="/bookAdd" element={<BookAdd />} />
          <Route exact path="/getUserData" element={<GetUserData />} />
          <Route exact path="/showUserData" element={<ShowUserData />} />
          <Route exact path="/getBookData" element={<GetBookData />} />
          <Route exact path="/showBookData" element={<ShowBookData />} />
        </Routes>
      ) : (
        <Routes>
          <Route exact path="/login" element={<Signin />} />
          <Route exact path="/" element={<Signup />} />
        </Routes>
      )} */}

      <Routes>
        <Route exact path="/login" element={<Signin />} />
        <Route exact path="/" element={<Signup />} />
        <Route element={<Navbar />} />
        <Route exact path="/bookAdd" element={<BookAdd />} />
        <Route exact path="/getUserData" element={<GetUserData />} />
        <Route exact path="/showUserData" element={<ShowUserData />} />
        <Route exact path="/getBookData" element={<GetBookData />} />
        <Route exact path="/showBookData" element={<ShowBookData />} />
      </Routes>
    </>
  );
}

export default App;
