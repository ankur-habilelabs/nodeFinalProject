import React from "react";
export default function ShowUserData(props) {
  const displayNotes = (props) => {
    try {
      const { notes } = props;
      if (notes?.length > 0) {
        return notes.map((note, index) => {
          console.log(note);
          return (
            <div
              className="container"
              style={{ padding: "10px", margin: "10px", border: "solid" }}
            >
              <h3>
                <span style={{ color: "red" }}>Name:</span> {note.userEmail}{" "}
              </h3>
              <p>
                {" "}
                <span style={{ color: "red" }}>Name:</span> {note.userName}
              </p>
              <p>
                <span style={{ color: "red" }}>password:</span> {note.password}
              </p>
            </div>
          );
        });
      } else {
        return <h3>No user yet</h3>;
      }
    } catch (e) {
      console.log(e);
    }
  };
  return <>{displayNotes(props)}</>;
}
