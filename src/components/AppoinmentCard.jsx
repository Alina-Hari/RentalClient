import { Link } from "react-router-dom";
import { ImBin, ImHome3 } from "react-icons/im";
export default function AppoinmentCard(props) {

    const appoinment = props.value;
    const appoinmentId = appoinment._id;
    const apartmentId = appoinment.apartmentId._id;
    const userName = appoinment.userBooked.name;
    const time = appoinment.time;
    const storedIsAgent = localStorage.getItem('isAgent')

    return (
        <div className="max-w-md md:mx-0  bg-white w-full mb-10 md:w-[40%]  flex flex-col justify-center md:flex-row md:justify-around rounded-xl shadow-md overflow-hidden md:max-w-2xl mr-10 ">
            <div className="p-8">
                <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Adress,City</div>
                <p className="block mt-1 text-lg leading-tight font-medium text-black">Appointment Time: {time}</p>
                {storedIsAgent === "true" && <p className="mt-2 text-gray-500">Rentee - {userName}</p>}
                <button className="mt-5 px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-gray-400 hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                    <Link to={`/apartments/${apartmentId}`} ><ImHome3 /></Link>
                </button>
                <button className="mt-5 ml-3 px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-black hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black">
                    <ImBin />
                </button>
            </div>
        </div>

    );
}
