import React, { useState } from "react";
import "./Character.css";

export default function Character() {
  const [fullName, setFullName] = useState("");
  const [age, setAge] = useState("");
  const [birthPlace, setbirthPlace] = useState("");
  const [gender, setGender] = useState("");
  const [hairColor, sethairColor] = useState("");
  const [eyesColor, setEyesColor] = useState("");
  const [skinColor, setSkinColor] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [description, setDescription] = useState("");

  const [selectedImage, setSelectedImage] = useState(null);

  // Handle file selection
  const handleImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setSelectedImage(URL.createObjectURL(img));
    }
  };

  return (
    <div className="container">
      <aside className="sidebar">
        <div className="profile-photo">
          <img src={selectedImage} alt="character" />
        </div>
        <hr></hr>
        <div className="information">
          <p>Full Name: {fullName} </p>
          <p>Age: {age}</p>
          <p>Birthplace: {birthPlace} </p>
          <p>Gender: {gender} </p>
          <p>Hair Color: {hairColor} </p>
          <p>Eyes Color: {eyesColor} </p>
          <p>Skin Color: {skinColor} </p>
          <p>Height: {height} </p>
          <p>Weight: {weight} </p>
          <hr></hr>
          <p className="descriptionText">{description}</p>
        </div>
      </aside>
      <main className="main-content">
        <div className="info-sections">
          <section className="personality">
            <p>Personal Info</p>
            <hr></hr>
            <input type="file" onChange={handleImageChange} accept="image/*" />

            <hr></hr>
            <label>Full Name:</label>
            <input type="text" onChange={(e) => setFullName(e.target.value)} />
            <hr></hr>

            <label>Age:</label>
            <input type="number" onChange={(e) => setAge(e.target.value)} />
            <hr></hr>

            <label>Birthplace:</label>
            <input
              type="text"
              onChange={(e) => setbirthPlace(e.target.value)}
            />
            <hr></hr>

            <label>Gender:</label>
            <input
              type="radio"
              name="gender"
              value="Male"
              checked={gender === "Male"}
              onChange={(e) => setGender(e.target.value)}
            />
            <label>Male</label>
            <input
              type="radio"
              name="gender"
              value="Female"
              checked={gender === "Female"}
              onChange={(e) => setGender(e.target.value)}
            />
            <label>Female</label>
            <hr />
          </section>

          <section className="appereance">
            <p>Appereance</p>
            <hr></hr>

            <label>Hair Color: </label>
            <input type="text" onChange={(e) => sethairColor(e.target.value)} />
            <hr></hr>

            <label>Eyes Color:</label>
            <input type="text" onChange={(e) => setEyesColor(e.target.value)} />
            <hr></hr>

            <label>Skin Color:</label>
            <input type="text" onChange={(e) => setSkinColor(e.target.value)} />
            <hr></hr>

            <label>Height (cm):</label>
            <input type="number" onChange={(e) => setHeight(e.target.value)} />
            <hr></hr>

            <label>Weight (kg):</label>
            <input type="number" onChange={(e) => setWeight(e.target.value)} />
            <hr></hr>
          </section>

          <section className="description">
            <p>Description</p>
            <hr></hr>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </section>
        </div>
      </main>
    </div>
  );
}
