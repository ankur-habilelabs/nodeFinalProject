import React, { useState } from "react";
import "../App.css";
import axios from "axios";
import BookAdd from "./BookAdd";
const ShowBookData = (props) => {
  const { notes, deleteBook } = props;
  const [editData, setEditData] = useState({});
  const [showForm, setShowForm] = useState(false);
  const localToken = JSON.parse(localStorage.getItem("token"));

  
  const getBookById = async (id) => {
    await axios({
      method: "get",
      url: `http://localhost:3000/v1/${id}`,
      headers: {
        "content-type": "application/octet-stream",
        "x-access-token": localToken,
        "x-rapidapi-key": process.env.REACT_APP_API_KEY,
      },
    })
      .then((res) => {
        setEditData(res.data);
        setShowForm(true);
      })
      .catch((err) => console.log(err));
  };
  // console.log(editData, "editdata");
  const handleEditBook = (id) => {
    getBookById(id);
  };
  return (
    <>
      {notes && !showForm
        ? notes?.map((note) => (
            <div className="card" key={note._id}>
              <div className="card-body">
                <div
                  className="container"
                  style={{ padding: "10px", margin: "10px", border: "solid" }}
                >
                  <h3>
                    <span style={{ color: "red" }}>BookName: </span>
                    {note.bookName}
                  </h3>
                  <p>
                    <span style={{ color: "#53DEFF" }}>BookDescription: </span>
                    {note.bookDescription}
                  </p>
                  <p>
                    <span style={{ color: "#53DEFF" }}>Author: </span>
                    {note.author}
                  </p>
                  <p>
                    <span style={{ color: "#53DEFF" }}>Price: </span>
                    {note.price}
                  </p>
                  <p>
                    <span style={{ color: "#53DEFF" }}>Image: </span>
                    {note.image}
                  </p>
                  <img src={`/images/${note.image}`} width="300" alt="" />
                </div>
                <button
                  type="button"
                  onClick={() => deleteBook(note._id)}
                  className="btn btn-danger m-3"
                >
                  Delete
                </button>
                <button
                  type="button"
                  onClick={() => handleEditBook(note._id)}
                  className="btn btn-info m-3"
                >
                  Edit
                </button>
              </div>
            </div>
          ))
        : ""}
      {showForm ? <BookAdd editData={editData} /> : ""}
    </>
  );
};
export default ShowBookData;
