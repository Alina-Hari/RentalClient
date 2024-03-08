import axios from "axios";
import { useNavigate } from "react-router-dom";
const API_URL = import.meta.env.VITE_API_URL;
const apartmentTypes = ["Studio", "Loft", "Duplex", "Apartment", "House"];
import { useEffect, useState } from "react";
import DTPicker from "./DTPicker";
import service from "../services/file-upload.service";

const COUTRIES_AND_CITIES_API = "https://countriesnow.space/api/v0.1/countries"

//const [availableDates, setAvailableDates] = useState([]); // TODO calendar

function CreateApartment(props) {
  const [apartmentType, setApartmentType] = useState("");
  const [floor, setFloor] = useState("");
  const [price, setPrice] = useState(0);
  const [area, setArea] = useState(0);
  const [country, setCountry] = useState("");
  const [cities, setCities] = useState("");
  const [isFurnished, setIsFurnished] = useState(false);
  const [isPetFriendly, setIsPetFriendly] = useState(false);
  const [images, setImages] = useState([]);
  const [waitingForImageUrl, setWaitingForImageUrl] = useState(false);
  const [locationData, setLocationData] = useState([])
  const [filteredCountry, setFilteredCountry] = useState(null)

  useEffect(() => {
    axios.get(COUTRIES_AND_CITIES_API)
      .then(response => {
        const tempArray = response.data.data.map((obj) => {
          let country = obj.country;
          let cities = obj.cities;

          return { country, cities };

        })
        setLocationData(tempArray)
        console.log(tempArray);
      })

  }, [])


  const navigate = useNavigate();

  const handleisFurnished = (e) => {
    setIsFurnished(e.target.checked);
    console.log(setIsFurnished);
  };

  const handleisPetFriendly = (e) => {
    setIsPetFriendly(e.target.checked);
  };

  const handleFileUpload = (e) => {

    setWaitingForImageUrl(true);

    const dataToUpload = new FormData();

    const files = Array.from(e.target.files);

    files.forEach((file) => {
      dataToUpload.append(`images`, file);
    });


    service
      .uploadImage(dataToUpload)
      .then(response => {
        setImages(response.fileUrls);
        setWaitingForImageUrl(false);
      })
      .catch(err => console.log("Error while uploading the file: ", err));
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
      city: cities,
      isFurnished,
      isPetFriendly,
      images
    };


    service
      .createApartment(apartmentObj, { headers: { Authorization: `Bearer ${storedToken}` } })
      .then((res) => {
        console.log(res);
      })
      .catch((e) => {
        console.log("Error, ", e);
      });
    props.closePopUp();

  }


  const handleCountry = (e) => {

    let tempArray = locationData.filter((location) => {
      return location.country === e.target.value;
    })

    setFilteredCountry(tempArray.cities)
    setCountry(e.target.value)
    console.log(tempArray);
  }

  return (
    <div className=" top-0 left-0 flex items-center justify-center w-full h-full bg-opacity-50 bg-black">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="card-actions justify-end">
          <button onClick={props.closePopUp} type="button" className="btn btn-sm btn-circle btn-outline">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>
        <form onSubmit={handleSubmit}>

          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Apartment Type</span>
            </div>
            <select className="select select-bordered"
              name="apartmentType"
              id="apartmentType"
              value={apartmentType}
              required
              onChange={(e) => {
                setApartmentType(e.target.value);
              }}
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
          </label>

          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Floor</span>
            </div>
            <input className="input input-bordered w-full max-w-xs" type="text" name="floor" value={floor} onChange={(e) => setFloor(e.target.value)} /></label>

          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Area</span>
            </div>
            <input className="input input-bordered w-full max-w-xs" type="number" name="area" value={area} onChange={(e) => setArea(e.target.value)} /></label>

          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Price</span></div>
            <input className="input input-bordered w-full max-w-xs" type="number" name="price" value={price} required onChange={(e) => setPrice(e.target.value)} /></label>

          {/* <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Country</span></div>
            <input className="input input-bordered w-full max-w-xs" type="text" name="country" value={country} required onChange={(e) => setCountry(e.target.value)} /></label>

          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">City</span></div>
            <input className="input input-bordered w-full max-w-xs" type="text" name="cities" value={cities} required onChange={(e) => setCities(e.target.value)} /></label> */}

          {/* country */}


          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Pick country</span>
            </div>
            <select className="select select-bordered" name="country" defaultValue={"default"} required onChange={handleCountry}>
              <option disabled>Pick one</option>
              {locationData.map((location, index) => {
                return <option key={index} value={location.country}>{location.country}</option>
              })}
            </select>
          </label>

          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Pick city</span>
            </div>
            {(filteredCountry === null || filteredCountry === undefined) ? <span>Loading</span> : (<select className="select select-bordered" name="city" defaultValue={"default"} required onChange={(e) => setCities(e.target.value)}>
              <option disabled>Pick one</option>
              {filteredCountry.map((city, index) => {
                console.log(city)
                return <option key={index} value={city}>{city}</option>
              }
              )}
            </select>)}

          </label>


          <label className="input flex items-center gap-2">
            Is it furnished?
            <input type="checkbox" className="checkbox checkbox-accent" id="isFurnished" name="isFurnished" checked={isFurnished} onChange={handleisFurnished} />
          </label>

          <label className="input flex items-center gap-2">
            Is it pet friendly?
            <input type="checkbox" className="checkbox checkbox-accent" id="isPetFriendly" name="isPetFriendly" checked={isPetFriendly} onChange={handleisPetFriendly} />
          </label>
          <label>
            <DTPicker />
          </label>
          <input type="file" multiple onChange={(e) => handleFileUpload(e)} />

          {images && <ul>
            {images.map((image, index) => (
              <li key={index}>
                <img className="w-10" src={image} alt="apartment-photo" />
              </li>
            ))}
          </ul>}



          <button type="submit" className="btn btn-outline btn-accent rounded-md" disabled={waitingForImageUrl}> Create </button>
        </form>
      </div >
    </div >
  );
}

export default CreateApartment;
