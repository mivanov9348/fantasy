import React from "react";
import "./Character.css"; // Import the CSS file

export default function Character() {
  return (
    <div className="container">
      <aside className="sidebar">
        <div className="profile-photo">
          <img src="./images/Dalle.png" alt="character" />
        </div>
        <p>
          <strong>Name:</strong> Mars Akiye Mock
        </p>
        <p>
          <strong>Age:</strong> 23
        </p>
        <p>
          <strong>Gender:</strong> Female
        </p>
        {/* Additional fields can be added here */}
      </aside>
      <main className="main-content">
        <div className="info-sections">
          <section className="personality">
            <p>Personal Info</p>
            <hr></hr>

            <label>Given Name: </label>
            <input type="text" />

            <label>Full Name:</label>
            <input type="text" />
          </section>
        </div>
      </main>
    </div>
  );
}
