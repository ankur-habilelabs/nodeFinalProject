import React, { useEffect, useState } from "react";
import ShowUserData from "./ShowUserData";
import axios from "axios";
const GetUserData = () => {
  const [notes, getNotes] = useState({});
  useEffect(() => {
    getAllNotes();
  }, []);

  const getAllNotes = () => {
    axios
      .get(`http://localhost:3000/showUser`)

      .then((response) => {
        const allNotes = response.data;
        console.log(response.data);
        getNotes(allNotes);
      })

      .catch((error) => console.error(`Error: ${error}`));
  };
  return <ShowUserData notes={notes} />;
};
export default GetUserData;
