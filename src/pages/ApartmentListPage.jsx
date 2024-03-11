import axios from "axios"
import { useEffect, useState } from "react";
import ApartmentCard from "../components/ApartmentCard";
import CreateApartment from "../components/CreateApartment";
import SearchBy from "../components/SearchBy";
const API_URL = import.meta.env.VITE_API_URL;
import { BsHouseAddFill } from "react-icons/bs";


export default function ApartmentListPage() {

    const [apartments, setApartments] = useState([])
    const [open, setOpen] = useState(false);

    const getApartments = () => {
        axios
            .get(`${API_URL}/api/apartments`)
            .then((response) => {
                setApartments(response.data)
                console.log(response.data)
            })
            .catch((error) => {
                console.log(error)
            });
    }
    const openPopUp = () => {
        setOpen(true);
    }
    useEffect(() => {
        getApartments();
    }, [open])

    const searchByLocation = ({ value, type }) => {
        let queryString = "";
        const location = { value, type };
        if (type === "city") {
            queryString = "city=";
        }
        else {
            queryString = "country=";
        }

        axios
            .get(`${API_URL}/api/search?${queryString}${value}`)
            .then((response) => {
                setApartments(response.data)
                console.log(response.data)
            })
            .catch((error) => {
                console.log(error)
            });

    }
    return (
        <div className="relative h-full flex flex-col  gap-3">
            <SearchBy callBack={searchByLocation} />
            <div className="flex justify-between items-center">
                {apartments === null &&
                    <p>Loading</p>}
                <div>
                    <button className="btn bg-white rounded-xl" onClick={openPopUp}>
                        <BsHouseAddFill />
                        New Rental</button>
                    {open ? <div className="absolute top-0 bottom-0 right-0 left-0 w-[100vw] h-[100vh] ">
                        <CreateApartment closePopUp={() => setOpen(false)} />
                    </div> : null}
                    {apartments !== null &&
                        apartments.map((apartment) => {
                            return <ApartmentCard key={apartment._id} value={apartment} />
                        })}
                    {apartments.length === 0 && <p>No rentals in this location</p>}

                </div>
                {open ? <div className="absolute  top-0 bottom-0 right-0 left-0 w-[100vw] h-[100vh] ">
                    <CreateApartment closePopUp={() => setOpen(false)} />
                </div> : null}

            </div>

        </div>

    )
}