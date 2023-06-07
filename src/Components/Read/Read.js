import axios from "axios";
import './Read.css'
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import jsPDf from 'jspdf'
import 'jspdf-autotable'
import Modal from 'react-modal'
import './Modal.css'
function Read() {
  const [data, setData] = useState([]);
  const [isModalOpen,setIsMOdalOpen]=useState(false)

  function getData() {
    axios
      .get("https://63afdcadcb0f90e5147bb901.mockapi.io/users")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      });
  }
  function handleDelete() {
    setIsMOdalOpen(true)
    
  }
    function handleConfirm(id){
      // if (window.confirm("Confirm Delete")) {
        setIsMOdalOpen(false)
        axios
        .delete(`https://63afdcadcb0f90e5147bb901.mockapi.io/users/${id}`)
        .then(() => {
          getData();
        });
      // }
      
    }


    function handleCancel(){
      setIsMOdalOpen(false)
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

  function formDownload(){
      const pdf =new jsPDf()
      pdf.autoTable({html:"#table"})
      pdf.save("data.pdf")
  }
 
  return (
    <div className="container">
      <table className="table" id="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">autCustomerID</th>
            <th scope="col">IndustryID</th>
            <th scope="col">vchCustomerName</th>
            <th scope="col">vchCity</th>
            <th scope="col">vchPhone</th>
            <th scope="col"><button onClick={formDownload} className="btn-primary" >Download</button></th>
          </tr>
        </thead>
        {data.map((eachData) => 
        
            <tbody key={eachData.id}>
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
                    onClick={
                      handleDelete
                    }
                    className="btn-danger"
                  >
                    delete
                  </button>
                  <Modal isOpen={isModalOpen} className="MyModal" overlayClassName="MyOverlay">
        <p>Are you sure you want to delete?</p>
        <div className="ButtonContainer">
          <button className="ConfirmButton" onClick={() => {
                      handleConfirm(eachData.id)
                    }}>Confirm</button>
          <button className="CancelButton" onClick={handleCancel}>Cancel</button>
        </div>
      </Modal>
                  
                </td>
              </tr>
            </tbody>
          
        )}
      </table>
     
    </div>
  );
}

export default Read;
