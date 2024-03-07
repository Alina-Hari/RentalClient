import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams , useNavigate } from "react-router-dom";
import UpdateApartment from "../components/UpdateApartment";
import CreateAppoinment from "../components/CreateAppoinment";
const API_URL = import.meta.env.VITE_API_URL;


function ApartmentDetailsPage() {
    const [apartment, setApartment] = useState(null);
    const { apartmentId } = useParams();
    const [open, setOpen] = useState(false);
    const [openAppoinment, setOpenAppoinment] = useState(false);
    const navigate = useNavigate();
    const storedToken = localStorage.getItem("authToken");
    const getApartment = () => {
        axios
            .get(`${API_URL}/api/apartments/${apartmentId}`)
            .then((response) => {
                setApartment(response.data);
            })
            .catch((error) => console.log(error));
    };

    const openPopUp = () => {
        setOpen(true);
    }
    const openAppoinmentPopUp = () => {
        setOpenAppoinment(true);
    }
    useEffect(() => {
        getApartment();
    }, [apartmentId, open]);

    function deleteApartment(){
        axios
        .delete(`${API_URL}/api/apartments/${apartment._id}`, { headers: { Authorization: `Bearer ${storedToken}` } })
        .then((res) => {
            navigate('/apartments')
          console.log("Apartment is deleted" ,res);
        })
        .catch((e) => {
          console.log("Error, ", e);
        });

    }

    return (
        <div className="ProjectDetails">
            {apartment && (
                <>
                    <h1>{apartment.apartmentType}</h1>
                    <img
                        src={apartment.images}
                        className="object-cover max-w-full max-h-full mx-auto"
                    />
                    <p>{apartment.city}, {apartment.country}</p>
                    <p>${apartment.price}</p>
                    <p>{apartment.area}m2</p>
                </>
            )}
            {/* for agent */}
            <div>
            <button onClick={openPopUp}>Edit</button>
            {open ? <div className="absolute  top-0 bottom-0 right-0 left-0 w-[100vw] h-[100vh] ">
                <UpdateApartment closePopUp={() => setOpen(false)} apartment={apartment} />
            </div> : null}
            <button onClick={deleteApartment}>Delete</button>
            </div>
            {/* for user */}
            <button  onClick={openAppoinmentPopUp} > Book Visit </button>
            {openAppoinment ? <div className="absolute  top-0 bottom-0 right-0 left-0 w-[100vw] h-[100vh] ">
                <CreateAppoinment closePopUp={() => setOpenAppoinment(false)} apartmentId={apartment._id} />
            </div> : null}
            <Link to="/apartments">
                <button>Back to apartments</button>
            </Link>
        </div>
    );
}

export default ApartmentDetailsPage;