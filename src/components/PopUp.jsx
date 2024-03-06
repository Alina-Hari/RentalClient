import axios from "axios";
import { useNavigate } from "react-router-dom";
const API_URL = import.meta.env.VITE_API_URL;
const apartmentTypes = ["Studio", "Loft", "Duplex", "Apartment", "House"];
import { useState } from "react";

//const [images, setImages] = useState(""); // TODO add cloudynary
//const [availableDates, setAvailableDates] = useState([]); // TODO calendar

function Popup(props) {
  const [apartmentType, setApartmentType] = useState("");
  const [floor, setFloor] = useState("");
  const [price, setPrice] = useState(0);
  const [area, setArea] = useState(0);
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [isFurnished, setIsFurnished] = useState(false);
  const [isPetFriendly, setIsPetFriendly] = useState(false);

  const navigate = useNavigate();

  const handleisFurnished = (e) => {
    // TODO checkbox fix
    setIsFurnished(e.target.checked);
    console.log(setIsFurnished);
  };

  const handleisPetFriendly = (e) => {
    // TODO checkbox fix
    setIsPetFriendly(e.target.checked);
  };

  const storedToken = localStorage.getItem("authToken");

  const handleSubmit = (e) => {
    e.preventDefault();

    const apartmentObj = {
      apartmentType,
      floor,
      price,
      area,
      country,
      city,
      isFurnished,
      isPetFriendly,
    };

    axios
      .post(`${API_URL}/api/apartments`, apartmentObj, { headers: { Authorization: `Bearer ${storedToken}` } })
      .then((res) => {
        console.log(res);
      })
      .catch((e) => {
        console.log("Error, ", e);
      });

    navigate("/apartments");
    props.closePopUp();
  };

  return (
    <div className="smmax:w-[100vw] smmax:h-[100vh]  smmax:top-0 smmax:bottom-0 smmax:right-0 smmax:left-0 w-[30vw] h-[50vh] absolute border border-black text-black left-1/3 right-1/3 bottom-1/3 top-1/3 p-5 text-center m-auto rounded-lg bg-white">
      <div className="flex flex-col text-purple-700 text-xl">
        <form onSubmit={handleSubmit}>
          <label>Apartment Type</label>
          <select
            name="apartmentType"
            id="apartmentType"
            value={apartmentType}
            required
            onChange={(e) => {
              setApartmentType(e.target.value);
            }}
            className="border rounded p-2 w-full mb-6 bg-gray-50"
          >
            <option value="">-- Select Type --</option>
            {apartmentTypes.map((apartmentType, index) => {
              return (
                <option key={index} value={apartmentType}>
                  {apartmentType}
                </option>
              );
            })}
          </select>

          <label>Floor</label>
          <input type="text" name="floor" value={floor} onChange={(e) => setFloor(e.target.value)} />

          <label>Area</label>
          <textarea type="number" name="area" value={area} onChange={(e) => setArea(e.target.value)} />

          <label>Price</label>
          <textarea type="number" name="price" value={price} required onChange={(e) => setPrice(e.target.value)} />

          <label>Country</label>
          <textarea type="text" name="country" value={country} required onChange={(e) => setCountry(e.target.value)} />

          <label>City</label>
          <textarea type="text" name="city" value={city} required onChange={(e) => setCity(e.target.value)} />

          <label>
            Is it furnished?
            <input type="checkbox" id="isFurnished" name="isFurnished" required checked={isFurnished} onChange={handleisFurnished} />
          </label>

          <label>
            Is it pet friendly?
            <input type="checkbox" id="isPetFriendly" name="isPetFriendly" checked={isPetFriendly} required onChange={handleisPetFriendly} />
          </label>
          <button type="submit"> Create </button>
        </form>
      </div>

      <button
        type="button"
        className="bg-gray-300 hover:bg-gray-400 mt-4 text-gray-800 font-bold py-2 px-4 rounded-l w-24"
        onClick={props.closePopUp}
      >
        Close
      </button>
    </div>
  );
}

export default Popup;
