import axios from "axios"
import { useEffect, useState } from "react";
import ApartmentCard from "../components/ApartmentCard";
import PopUp from "../components/PopUp";
const API_URL = import.meta.env.VITE_API_URL;



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
    }, [])

    return (


        <div className="flex flex-col gap-3">

            <div className="flex justify-between items-center">
                {apartments === null &&
                    <p>Loading</p>}
                <div>
                    <button onClick={openPopUp}>New Rental</button>
                    {open ? <div className="absolute  top-0 bottom-0 right-0 left-0 w-[100vw] h-[100vh] ">
                        <PopUp closePopUp={() => setOpen(false)} callback={getApartments} />
                    </div> : null}
                    {apartments !== null &&
                        apartments.map((apartment) => {
                            return <ApartmentCard key={apartment._id} value={apartment} />
                        })}

                </div>

            </div>
        </div>

    )
}