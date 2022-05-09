import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const BookAdd = (props) => {
  const navigate = useNavigate();
  const { editData } = props;
  const [sent, setSent] = useState(false);
  const [bookName, setBookName] = useState(editData?.bookName || "");
  const [bookDescription, setBookDescription] = useState(
    editData?.bookDescription || ""
  );
  const [author, setAuthor] = useState(editData?.author || "");
  const [price, setPrice] = useState(editData?.price || "");
  const [image, setImage] = useState(editData?.image || "");
  const localToken = JSON.parse(localStorage.getItem("token"));
  console.log(editData, "editDataeditDataeditDataeditDataeditData");
  const handleBookAdd = async (e) => {
    navigate("/getBookData");
    const formData = new FormData();
    formData.append("bookName", bookName);
    formData.append("bookDescription", bookDescription);
    formData.append("author", author);
    formData.append("price", price);
    formData.append("image", image);
    console.log(formData);
    e.preventDefault();
    if (!!editData?._id) {
      const id = editData._id;
      await axios
        .patch(`http://localhost:3000/v1/${id}`, formData, {
          headers: {
            "x-access-token": localToken,
          },
        })
        .then((res) => {
          alert("Book Update");

          setSent(true);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      await axios
        .post("http://localhost:3000/v1", formData, {
          headers: {
            "x-access-token": localToken,
          },
        })
        .then((res) => {
          alert("Book Added");
          setSent(true);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  return (
    <div>
      {!sent ? (
        <form
          className="container"
          onSubmit={handleBookAdd}
          encType="multipart/form-data"
        >
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              bookName
            </label>
            <input
              type="text"
              required
              name="bookName"
              className="form-control"
              value={bookName}
              onChange={(e) => setBookName(e.target.value)}
              placeholder="Enter a book name"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Book Description
            </label>
            <input
              type="text"
              required
              name="bookDescription"
              className="form-control"
              value={bookDescription}
              onChange={(e) => setBookDescription(e.target.value)}
              placeholder="Book description"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Author
            </label>
            <input
              type="text"
              name="author"
              required
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              placeholder="Author"
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              price
            </label>
            <input
              type="number"
              // accept={}
              name="price"
              required
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="Price"
              className="form-control"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              image
            </label>
            <input
              type="file"
              required
              name="image"
              onChange={(e) => setImage(e.target.files[0])}
              placeholder="image"
              className="form-control"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      ) : (
        navigate("/getBookData")
      )}
    </div>
  );
};

export default BookAdd;
