import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const API_URL = import.meta.env.VITE_API_URL;


function ApartmentDetailsPage() {
    const [apartment, setApartment] = useState(null);
    const { apartmentId } = useParams();


    const getApartment = () => {
        axios
            .get(`${API_URL}/api/apartments/${apartmentId}`)
            .then((response) => {
                setApartment(response.data);
            })
            .catch((error) => console.log(error));
    };



    useEffect(() => {
        getApartment();
    }, [apartmentId]);


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

            <Link to="/apartments">
                <button>Back to apartments</button>
            </Link>
        </div>
    );
}

export default ApartmentDetailsPage;