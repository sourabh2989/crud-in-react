import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Read = () => {
  const [data, setData] = useState([]);
  const [tabledark, setTableDark] = useState("");
  const [lastDeletedItem, setLastDeletedItem] = useState(null);

  function getData() {
    axios
      .get("https://62a59821b9b74f766a3c09a4.mockapi.io/crud")
      .then((res) => {
        setData(res.data);
      });
  }

  function handleDelete(id) {
    const deletedItem = data.find((item) => item.id === id);
    
    axios
    .delete(`https://62a59821b9b74f766a3c09a4.mockapi.io/crud/${id}`)
    .then(() => {
      setLastDeletedItem(deletedItem);
      getData();
      setBtn(true)
      setTimeout(() => {
        setBtn(false)
      }, 2000);
    });
  }

  function handleUndo() {
    if (lastDeletedItem) {
      axios
        .post(
          "https://62a59821b9b74f766a3c09a4.mockapi.io/crud",
          lastDeletedItem
        )
        .then(() => {
          setLastDeletedItem(null);
          getData();
        });
    }
  }

  const setToLocalStorage = (id, name, email) => {
    localStorage.setItem("id", id);
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
  };

  useEffect(() => {
    getData();
  }, []);

  const [btn, setBtn]=useState(true)


  return (
    <>
      <div className="form-check form-switch">
        <input
          className="form-check-input"
          type="checkbox"
          onClick={() => {
            if (tabledark === "table-dark") setTableDark("");
            else setTableDark("table-dark");
          }}
        />
      </div>
      <div className="d-flex justify-content-between m-2">
        <h2>Read Operation</h2>
        <Link to="/">
          <button className="btn btn-secondary">Create</button>
        </Link>
      </div>

      <table className={`table ${tabledark}`}>
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        {data.map((eachData) => (
          <tbody key={eachData.id}>
            <tr>
              <th scope="row">{eachData.id}</th>
              <td>{eachData.name}</td>
              <td>{eachData.email}</td>
              <td>
                <Link to="/update">
                  <button
                    className="btn-success"
                    onClick={() =>
                      setToLocalStorage(
                        eachData.id,
                        eachData.name,
                        eachData.email
                      )
                    }
                  >
                    Edit
                  </button>
                </Link>
              </td>
              <td>
                <button
                  className="btn-danger"
                  onClick={() => handleDelete(eachData.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
      {btn?
         <div className="m-2">
        
         {lastDeletedItem && (
           <button className="btn btn-warning" onClick={handleUndo}>
             Undo Delete {lastDeletedItem.name}
           </button>
         )}
       </div>    
      :null}
    </>
  );
};

export default Read;
