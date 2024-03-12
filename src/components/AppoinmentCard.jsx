import { Link } from "react-router-dom";
import { ImBin, ImHome3 } from "react-icons/im";
import { IoMdTime } from "react-icons/io";
import { MdLocationOn } from "react-icons/md";

export default function AppoinmentCard(props) {

    const appoinment = props.value;
    const appoinmentId = appoinment._id;
    const apartmentId = appoinment.apartmentId._id;
    const userName = appoinment.userBooked.name;
    const time = appoinment.time;
    const dateObj = new Date(time)
    const apnDay = dateObj.toDateString().slice(0, 3)
    const apnMonth = dateObj.toDateString().slice(4, 7)
    const apnDate = dateObj.toDateString().slice(8, 10)
    const apnTime = dateObj.toTimeString().slice(0, 5)

    const storedIsAgent = localStorage.getItem('isAgent')

    return (
        <div className="max-w-md md:mx-0 flex flex-col justify-evenly bg-white w-full mb-10 md:w-[40%]  flex flex-col justify-center md:flex-row md:justify-around rounded-xl shadow-md overflow-hidden md:max-w-2xl mr-10 ">
            <div className="p-8 flex flex-col justify-center text-center  w-[20%]">  
                <p className="block mt-1 mb-2 text-md leading-tight font-medium">{apnDay},{apnMonth}</p>
                <p className="block mt-1  mb-2  text-4xl leading-tight font-medium text-blue-700">{apnDate}<span className="text-sm">th</span></p>
                <p className="block mt-1  mb-2  text-md leading-tight font-medium flex flex-row"><IoMdTime />{apnTime}</p>
            </div>
            <div className="p-8 w-[80%]">
                <div className="uppercase tracking-wide text-sm text-indigo-500 flex flex-row font-semibold"><MdLocationOn />Adress,City</div>
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
