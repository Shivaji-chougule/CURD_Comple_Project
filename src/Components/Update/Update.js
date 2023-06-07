import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './Update.css'

function Update() {
  const [id, setId] = useState(0);
  const [autCustomerID, setautCustomerID] = useState("");
  const [IndustryID, setIndustryID] = useState("");
  const [vchCustomerName, setvchCustomerName] = useState("");
  const [vchCity, setvchCity] = useState("");
  const [vchPhone, setvchPhone] = useState("");

  const goTo = useNavigate();

  useEffect(() => {
    setId(localStorage.getItem("id"));
    setautCustomerID(localStorage.getItem("autCustomerID"));
    setIndustryID(localStorage.getItem("IndustryID"));
    setvchCustomerName(localStorage.getItem("vchCustomerName"));
    setvchCity(localStorage.getItem("vchCity"));
    setvchPhone(localStorage.getItem("vchPhone"));
  }, []);

  function updateHandler(e) {
    e.preventDefault();

    if(autCustomerID,IndustryID,vchCustomerName,vchCity,vchPhone === ""){
      return
    }
    
    axios
      .put(`https://63afdcadcb0f90e5147bb901.mockapi.io/users/${id}`, {
        autCustomerID: autCustomerID,
        IndustryID: IndustryID,
        vchCustomerName: vchCustomerName,
        vchCity: vchCity,
        vchPhone: vchPhone,
      })
      .then(() => goTo("/read"));
  }
  return (
    <div className="main_update">
      <form className="form">
        <div className="mb-3">
          <label className="form-label">autCustomerID</label>
          <input
            type="text"
            value={autCustomerID}
            className="form-control"
            onChange={(e) => {
              setautCustomerID(e.target.value);
            }}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">IndustryID</label>
          <input
            type="text"
            value={IndustryID}
            className="form-control"
            aria-describedby="emailHelp"
            onChange={(e) => {
              setIndustryID(e.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">vchCustomerName</label>
          <input
            type="text"
            value={vchCustomerName}
            className="form-control"
            aria-describedby="emailHelp"
            onChange={(e) => {
              setvchCustomerName(e.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">vchCity</label>
          <input
            type="text"
            value={vchCity}
            className="form-control"
            aria-describedby="emailHelp"
            onChange={(e) => {
              setvchCity(e.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">vchPhone</label>
          <input
            type="number"
            value={vchPhone}
            className="form-control"
            aria-describedby="emailHelp"
            onChange={(e) => {
              setvchPhone(e.target.value);
            }}
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          onClick={updateHandler}
        >
          Update
        </button>
      </form>
    </div>

    
  );
}

export default Update;
