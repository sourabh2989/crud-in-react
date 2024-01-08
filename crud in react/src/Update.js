import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
// import Read from './Read'

const Update = () => {
    const [id,setId]=useState(0);
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const navigate=useNavigate();


    useEffect(()=>{
        setId(localStorage.getItem("id"));
        setName(localStorage.getItem("name"));
        setEmail(localStorage.getItem("email"));
    },[]);
    const handleUpdate=(e)=>{
        e.preventDefault();
        axios.put(`https://659bcfb2d565feee2dabc4d0.mockapi.io/crud/${id}`,
        {
            name:name,
            email:email,
        }).then(()=>{
            navigate("/read");
        })
    }
  return (
    <div>
        <h2>Update Operation</h2>
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
              value={name}
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

        <button type="submit" className="btn btn-primary"  onClick={handleUpdate}>
          Update
        </button>
      </form>
    </div>
  )
}

export default Update
