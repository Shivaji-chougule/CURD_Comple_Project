import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Read() {
  const [data, setData] = useState([]);
  function getData() {
    axios
      .get("https://63afdcadcb0f90e5147bb901.mockapi.io/users")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      });
  }
  function handleDelete(id) {
   
    if (window.confirm("Confirm Delete")) {
      axios
      .delete(`https://63afdcadcb0f90e5147bb901.mockapi.io/users/${id}`)
      .then(() => {
        getData();
      });
    }
  }
    
    
  function setLocalStorage(
    id,
    autCustomerID,
    IndustryID,
    vchCustomerName,
    vchCity,
    vchPhone
  ) {
    localStorage.setItem("id", id);
    localStorage.setItem("autCustomerID", autCustomerID);
    localStorage.setItem("IndustryID", IndustryID);
    localStorage.setItem("vchCustomerName", vchCustomerName);
    localStorage.setItem("vchCity", vchCity);
    localStorage.setItem("vchPhone", vchPhone);
  }
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">autCustomerID</th>
            <th scope="col">IndustryID</th>
            <th scope="col">vchCustomerName</th>
            <th scope="col">vchCity</th>
            <th scope="col">vchPhone</th>
          </tr>
        </thead>
        {data.map((eachData, i) => {
          return (
            <tbody key={i}>
              <tr>
                <th scope="row">{eachData.id}</th>
                <td>{eachData.autCustomerID}</td>
                <td>{eachData.IndustryID}</td>
                <td>{eachData.vchCustomerName}</td>
                <td>{eachData.vchCity}</td>
                <td>{eachData.vchPhone}</td>
                <td>
                  <Link to="/update">
                    <button
                      onClick={() =>
                        setLocalStorage(
                          eachData.id,
                          eachData.autCustomerID,
                          eachData.IndustryID,
                          eachData.vchCustomerName,
                          eachData.vchCity,
                          eachData.vchPhone
                        )
                      }
                      className="btn-success"
                    >
                      Edit
                    </button>
                  </Link>
                </td>
                <td>
                  <button
                    onClick={() => {
                      handleDelete(eachData.id);
                    }}
                    className="btn-danger"
                  >
                    delete
                  </button>
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
}

export default Read;
