import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Read = () => {
  const [data, setData] = useState([]);

  function getdata() {
    axios
      .get("https://659bcfb2d565feee2dabc4d0.mockapi.io/crud")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      });
  }
  function handleDelete(id) {
    axios
      .delete(`https://659bcfb2d565feee2dabc4d0.mockapi.io/crud/${id}`)
      .then(() => {
        getdata();
      });
  }
  const setTolocal = (id, name, email) => {
    localStorage.setItem("id", id);
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
  };

  useEffect(() => {
    getdata();
  }, []);
  //   getdata();
  return (
    <>
      <div className="d-flex justify-content-between m-2">
        <h2>Read Operations</h2>
        <Link to="/">
          <button className="btn-primary" onClick={() => {}}>
            Create
          </button>
        </Link>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">NAME</th>
            <th scope="col">EMAIL</th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        {data.map((each) => {
          return (
            <>
              <tbody>
                <tr>
                  <th scope="row">{each.id}</th>
                  <td>{each.name}</td>
                  <td>{each.email}</td>

                  <td>
                    <Link to="/update">
                      <button
                        className="btn-success"
                        onClick={() =>
                          setTolocal(each.id, each.name, each.email)
                        }
                      >
                        Edit
                      </button>
                    </Link>
                  </td>
                  <td>
                    <button
                      className="btn-danger"
                      onClick={() => {
                        handleDelete(each.id);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            </>
          );
        })}
      </table>
    </>
  );
};

export default Read;
