import axios from "axios";
import { useNavigate } from "react-router-dom";
const API_URL = import.meta.env.VITE_API_URL;
const apartmentTypes = ["Studio", "Loft", "Duplex", "Apartment", "House"];
import { useState } from "react";
import DTPicker from "./DTPicker";

//const [images, setImages] = useState(""); // TODO add cloudynary
//const [availableDates, setAvailableDates] = useState([]); // TODO calendar

function CreateAppoinment(props) {
  const apartmentId = props.apartmentId;
  const navigate = useNavigate();

  const storedUser = localStorage.getItem("user");
  const storedToken = localStorage.getItem("authToken");
  console.log(storedUser)
  const handleSubmit = (e) => {
    e.preventDefault();

    const appoinmentObj = {
      apartmentId,
      // time,
      userBooked : storedUser
    };

    axios
      .post(`${API_URL}/api/appoinments`, appoinmentObj, { headers: { Authorization: `Bearer ${storedToken}` } })
      .then((res) => {
        console.log(res);
      })
      .catch((e) => {
        console.log("Error, ", e);
      });
    props.closePopUp();
  };


  //     <div className="smmax:w-[100vw] smmax:h-[100vh]  smmax:top-0 smmax:bottom-0 smmax:right-0 smmax:left-0 w-[30vw] h-[50vh] absolute border border-black text-black left-1/3 right-1/3 bottom-1/3 top-1/3 p-5 text-center m-auto rounded-lg bg-white">

  return (
    <div className=" top-0 left-0 flex items-center justify-center w-full h-full bg-opacity-50 bg-black">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="card-actions justify-end">
          <button onClick={props.closePopUp} type="button" className="btn btn-sm btn-circle btn-outline">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>
        <form onSubmit={handleSubmit}>

          <button type="submit" className="btn btn-outline btn-accent rounded-md"> Book </button>
        </form>
      </div >
    </div >
  );
}

export default CreateAppoinment;
