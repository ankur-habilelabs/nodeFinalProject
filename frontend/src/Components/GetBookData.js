import React, { useEffect, useState } from "react";
import ShowBookData from "./ShowBookData";
import axios from "axios";

const GetBookData = () => {
  const localToken = JSON.parse(localStorage.getItem("token"));
  const [notes, getNotes] = useState([]);
  const [render, setRender] = useState(false);

  console.log("This component is mounted");
  useEffect(() => {
    axios({
      method: "GET",
      url: "http://localhost:3000/v1/getBook",
      headers: {
        "content-type": "application/octet-stream",
        "x-access-token": localToken,
        "x-rapidapi-key": process.env.REACT_APP_API_KEY,
      },
    })
      .then((response) => {
        console.log("This is the response of getBook API : ", response.data)
        getNotes(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [render]);


  const deleteBook = async (id) => {
    try {
      axios({
        method: "DELETE",
        url: `http://localhost:3000/v1/${id}`,
        headers: {
          "content-type": "application/octet-stream",
          "x-access-token": localToken,
          "x-rapidapi-key": process.env.REACT_APP_API_KEY,
        },
      }).then((res) => {
        alert("Book deleted");
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <ShowBookData notes={notes} deleteBook={deleteBook} />
    </div>
  );
};
export default GetBookData;
