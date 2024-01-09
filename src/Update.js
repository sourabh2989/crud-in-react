import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate ,Link } from "react-router-dom";
// import Read from './Read'

const Update = () => {
  const [id, setId] = useState(0);
  const [names, setNames] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setId(localStorage.getItem("id"));
    setNames(localStorage.getItem("name"));
    setEmail(localStorage.getItem("email"));
  }, []);
  const handleUpdate = (e) => {
    e.preventDefault();
    axios
      .put(`https://659bcfb2d565feee2dabc4d0.mockapi.io/crud/${id}`, {
        id: id,
        names: names,
        email: email,
      })
      .then(() => {
        navigate("/read");
      });
  };
  return (
    <>
      <h2>Update Operation</h2>
      <form>
        <div className="mb-3">
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Name
            </label>
            <input
              onChange={(e) => setNames(e.target.value)}
              type="text"
              className="form-control"
              id="exampleInputPassword1"
              value={names}
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
            value={email}
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary mx-2"
          onClick={handleUpdate}
        >
          Update
        </button>
        <Link to={"/read"}>
          <button className="btn btn-warning">Back</button>
        </Link>
      </form>
    </>
  );
};

export default Update;
