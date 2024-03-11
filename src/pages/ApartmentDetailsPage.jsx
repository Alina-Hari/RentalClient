import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams, useNavigate } from "react-router-dom";
import UpdateApartment from "../components/UpdateApartment";
import CreateAppoinment from "../components/CreateAppoinment";
const API_URL = import.meta.env.VITE_API_URL;
import { IoIosArrowRoundBack } from "react-icons/io";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlinePets } from "react-icons/md";
import { FaCouch } from "react-icons/fa6";
import { GiHouse } from "react-icons/gi";



function ApartmentDetailsPage() {
    const [apartment, setApartment] = useState(null);
    const { apartmentId } = useParams();
    const [open, setOpen] = useState(false);
    const [alert, setAlert] = useState(false);
    const [openAppoinment, setOpenAppoinment] = useState(false);
    const navigate = useNavigate();
    const storedToken = localStorage.getItem("authToken");


    const getApartment = () => {
        axios
            .get(`${API_URL}/api/apartments/${apartmentId}`)
            .then((response) => {
                setApartment(response.data);
                console.log("Responce appartment", response);
            })
            .catch((error) => console.log(error));
    };

    const openPopUp = () => {
        setOpen(true);
    }

    const openAlert = () => {
        setAlert(true);
    }

    const openAppoinmentPopUp = () => {
        setOpenAppoinment(true);
    }
    useEffect(() => {
        getApartment();
    }, [apartmentId, open]);


    function deleteApartment() {
        axios
            .delete(`${API_URL}/api/apartments/${apartment._id}`, { headers: { Authorization: `Bearer ${storedToken}` } })
            .then((res) => {
                navigate('/apartments')
                console.log("Apartment is deleted", res);
            })
            .catch((e) => {
                console.log("Error, ", e);
            });

    }

    return (
        <div className="m-5">
            {apartment && (
                <>
                    <div className="relative">
                        <Link className="absolute top-5 left-5 md:hidden" to="/apartments">
                            <button className="btn btn-circle btn-outline bg-slate-200 relative"><IoIosArrowRoundBack /></button>
                        </Link>
                        <div className="w-full carousel rounded-box md:hidden">
                            {apartment.images.map((image, index) => {
                                return (
                                    <div className="carousel-item w-full h-80" key={index}>
                                        <img
                                            src={image}
                                            className="object-cover w-full h-full mx-auto rounded-xl"
                                            alt={`Image ${index + 1}`}
                                        />
                                    </div>
                                );
                            })}
                        </div>

                        <div className="md:flex flex-row-reverse justify-between">
                            <div className="hidden w-1/2 h-screen md:flex flex-col">

                                <div className="relative">
                                    <Link className="absolute top-5 left-5" to="/apartments">
                                        <button className="btn btn-circle btn-outline bg-slate-200 relative"><IoIosArrowRoundBack /></button>
                                    </Link>
                                    <div className="w-full h-80" >
                                        <img
                                            src={apartment.images[0]}
                                            className="object-cover w-full h-full mx-auto rounded-xl"
                                        />
                                    </div>
                                </div>

                                <div className="flex gap-2">
                                    {apartment.images.map((image, index) => {
                                        if (index % 3 === 1 || index % 3 === 2) {
                                            return (
                                                <div className="w-1/2 h-40 mt-2" key={index}>
                                                    <img
                                                        src={image}
                                                        className="object-cover w-full h-full mx-auto rounded-xl"
                                                        alt={`Image ${index + 1}`}
                                                    />
                                                </div>
                                            );

                                        } else if (index > 2) {
                                            return (
                                                <div className="w-full h-40" key={index}>
                                                    <img
                                                        src={image}
                                                        className="object-cover w-full h-full mx-auto rounded-xl"
                                                        alt={`Image ${index + 1}`}
                                                    />
                                                </div>
                                            );
                                        }
                                    })}

                                </div>
                            </div>



                            <div className="flex flex-col gap-1 mt-5 md:ml-5 md:mt-0">
                                <h1 className="card-title md:text-2xl">
                                    {apartment.area && apartment.area < 40 ? "Cosy" : "Spacy"} {apartment.apartmentType} in {apartment.city}
                                </h1>
                                <p className="flex items-center gap-2"><CiLocationOn />{apartment.city}, {apartment.country}</p>
                                <p className="font-medium">$ {apartment.price} / month</p>

                                {/* <div>
                                    <p>{apartment.availableDates && apartment.availableDates[0]}</p>
                                </div> */}


                                <div className="flex gap-5 bg-slate-100 rounded-xl p-3 justify-between">
                                    <p className="flex items-center gap-2"><GiHouse /> {apartment.area} m²</p>
                                    <p className="flex items-center gap-2"><FaCouch /> {apartment.isFurnished ? "Furnished" : "Not furnished"}</p>
                                    <p className="flex items-center gap-2"><MdOutlinePets /> {apartment.isPetFriendly ? "Pet friendly" : "No pets allowed"}</p>
                                </div>
                            </div>
                        </div>
                    </div>


                </>
            )}


            {/* for agent */}
            {/* <div className="flex justify-between align-middle items-center fixed bottom-0 left-0 w-full bg-slate-100 py-4 px-6 shadow-lg rounded-t-2xl">
                <button className="btn btn-outline btn-accent rounded-xl" onClick={openPopUp}>Edit</button>
                {open ? <div className="absolute top-0 bottom-0 right-0 left-0 w-[100vw] h-[100vh] ">
                    <UpdateApartment closePopUp={() => setOpen(false)} apartment={apartment} />
                </div> : null}
                <button className="btn btn-outline btn-accent rounded-xl" onClick={openAlert}>Delete</button>
                {alert && (
                    <div className="fixed top-0 left-0 flex items-center justify-center w-screen h-screen bg-opacity-50 bg-black">
                        <div className="bg-white rounded-xl shadow-lg p-5 max-w-md w-full mx-4 overflow-auto">
                            <div className="card-actions justify-end">
                                <button onClick={() => setAlert(false)} type="button" className="btn btn-xs btn-circle">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                </button>
                            </div>
                            <h3 className="font-bold text-lg">Delete Confirmation</h3>
                            <p className="py-4">Are you sure you want to delete this apartment?</p>
                            <div className="modal-actions">
                                <button className="btn btn-sm btn-circle btn-ghost" onClick={() => setAlert(false)}>Cancel</button>
                                <button className="btn btn-sm btn-circle btn-ghost" onClick={deleteApartment}>Delete</button>
                            </div>
                        </div>
                    </div>
                )}
            </div> */}


            {/* for user */}
            <div className="flex justify-between align-middle items-center fixed bottom-0 left-0 w-full bg-slate-100 py-4 px-6 shadow-lg rounded-t-2xl">
                <p className="font-medium">$ {apartment && apartment.price} / month</p>
                <button
                    onClick={openAppoinmentPopUp}
                    className="btn btn-outline btn-accent rounded-xl">
                    Book a visit now
                </button>
            </div>
            {
                openAppoinment ? <div className="absolute top-0 bottom-0 right-0 left-0 w-[100vw] h-[100vh] ">
                    <CreateAppoinment closePopUp={() => setOpenAppoinment(false)} apartmentId={apartment._id} />
                </div> : null
            }
        </div>
    );
}

export default ApartmentDetailsPage;