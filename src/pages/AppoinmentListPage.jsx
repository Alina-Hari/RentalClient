import axios from "axios"
import { useEffect, useState } from "react";
import AppoinmentCard from "../components/AppoinmentCard";
// import CreateApartment from "../components/CreateApartment";
const API_URL = import.meta.env.VITE_API_URL;



export default function AppoinmentListPage() {

    const [appoinments, setAppoinments] = useState([])
    const [open, setOpen] = useState(false);

    const getAppoinments = () => {
        axios
            .get(`${API_URL}/api/appoinments`)
            .then((response) => {
                setAppoinments(response.data)
                console.log(response.data)
            })
            .catch((error) => {
                console.log(error)
            });
    }

    // const openPopUp = () => {
    //     setOpen(true);
    // }
    useEffect(() => {
        getAppoinments();
    }, [])

    return (


        <div className="flex flex-col gap-3">

            <div className="flex justify-between items-center">
                {appoinments === null &&
                    <p>Loading</p>}
                <div>
                    {/* for U&D */}
                    {/* {open ? <div className="absolute  top-0 bottom-0 right-0 left-0 w-[100vw] h-[100vh] ">
                        <CreateApartment closePopUp={() => setOpen(false)}  />
                    </div> : null} */}
                    {appoinments !== null &&
                        appoinments.map((appoinment) => {
                            return <AppoinmentCard key={appoinment._id} value={appoinment} />
                        })}

                </div>

            </div>
        </div>

    )
}