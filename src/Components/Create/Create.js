import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import "./Create.css";
function Create() {
  const [autCustomerID, setautCustomerID] = useState("");
  const [IndustryID, setIndustryID] = useState("");
  const [vchCustomerName, setvchCustomerName] = useState("");
  const [vchCity, setvchCity] = useState("");
  const [vchPhone, setvchPhone] = useState("");

  const goTo = useNavigate();

  function submitHandler(e) {
    e.preventDefault();
    console.log("clicked");
    
    if(autCustomerID,IndustryID,vchCustomerName,vchCity,vchPhone == ""){
      return
    }

    axios
      .post("https://63afdcadcb0f90e5147bb901.mockapi.io/users", {
        autCustomerID: autCustomerID,
        IndustryID: IndustryID,
        vchCustomerName: vchCustomerName,
        vchCity: vchCity,
        vchPhone: vchPhone,
      })
      .then(() => goTo("/read"));

    setautCustomerID("");
    setIndustryID("");
    setvchCustomerName("");
    setvchCity("");
    setvchPhone("");
  }

  return (
    <div>
      <form className="form">
        <div className="mb-3">
          <label className="form-label">autCustomerID</label>
          <input
            type="text"
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
          onClick={submitHandler}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Create;
