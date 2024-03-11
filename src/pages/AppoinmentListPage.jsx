import axios from "axios"
import { useEffect, useState } from "react";
import AppoinmentCard from "../components/AppoinmentCard";
// import CreateApartment from "../components/CreateApartment";
const API_URL = import.meta.env.VITE_API_URL;

export default function AppoinmentListPage() {

    const [appoinments, setAppoinments] = useState([])
    const [open, setOpen] = useState(false);
    const storedIsAgent = localStorage.getItem("isAgent");
    const storedUser = localStorage.getItem("user");
   const storedUserName=  localStorage.getItem("userName");

    const getAppoinments = () => {
        if (storedIsAgent === "true") {
            console.log("AppoinmentListPage", storedIsAgent)
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
        else {
            console.log("AppoinmentListPage", storedIsAgent)
            axios
                .get(`${API_URL}/api/appoinments/user/${storedUser}`)
                .then((response) => {
                    const sortedArry = response.data.sort((a,b) => a.time - b.time)
                    setAppoinments(sortedArry)
                    console.log(response.data)
                })
                .catch((error) => {
                    console.log(error)
                });
        }
    }

    // const openPopUp = () => {
    //     setOpen(true);
    // }
    useEffect(() => {
        getAppoinments();
    }, [])

    return (
    <div className="flex flex-row flex-wrap justify-center w-full h-full overflow-y-scroll">
        <div className="w-full h-20 text-2xl p-4 text-center">
           <h2 className="">{ (storedIsAgent === "true") ? `${storedUserName}'s appoinments` : " All appoinments"}</h2>
        </div>
        <div className="flex flex-col md:flex-row justify-evenly flex-wrap h-full items-center ">

            {appoinments === null &&
                <p>Loading</p>}
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
    )
}