import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const history = useNavigate();

  const header = { "Access-Control-Allow-origin": "*" };

  const handlesumit = (e) => {
    e.preventDefault();
    console.log("clicked");
    axios
      .post("https://659bcfb2d565feee2dabc4d0.mockapi.io/crud", {
        name: name,
        email: email,
        header,
      });
      history("/read")
    //   .then(() => {
    //     history("/read");
    //   });
  };
  return (
    <>
      <h2>create</h2>
      <form>
        <div className="mb-3">
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Name
            </label>
            <input
              onChange={(e) => setName(e.target.value)}
              type="text"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <label for="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>

        <button type="submit" className="btn btn-primary" onClick={handlesumit}>
          Submit
        </button>
      </form>
    </>
  );
};

export default Home;
