import { Link } from 'react-router-dom';
import profileImg from '../assets/profile.jpg';
import service from "../services/file-upload.service";


export default function UserProfilePage() {

    const storedIsAgent = localStorage.getItem("isAgent");
    const storedUser = localStorage.getItem("user");
    const storedUserName = localStorage.getItem("userName");


    return (<div className="h-[100%] md:w-full  dark:bg-gray-800 overflow-y-scroll  flex flex-wrap items-center  justify-center ">
        <div className="container lg:w-full lg:h-[100%] mx-10  lg: mx-0 xl:w-2/7 sm:w-full md:w-2/3 bg-white  shadow-lg   rounded-xl  transform   duration-200 easy-in-out">
            <div className=" h-32 lg:h-[20%] overflow-hidden bg-gradient" >
            </div>
            <div className="flex lg:h-[20%] justify-center px-5  -mt-12">
                {/* <img className="h-32 w-32 bg-white p-2 rounded-full" src={profileImg} alt="" /> */}
                <div className="avatar">
                    <div className="w-18 bg-accent mask mask-hexagon flex justify-center items-center">
                        <span className="text-white text-center text-3xl flex justify-center align-middle items-center h-full">
                            <p className='h-full text-center justify-center align-middle pt-2'>{storedUserName[0]}</p></span>
                    </div>
                </div>




            </div>
            <div className="lg:h-[60%] pt-10">
                <div className="text-center lg:h-[80%]  px-14">
                    <h2 className="text-gray-800 text-3xl font-bold">{storedUserName}</h2>
                    {storedIsAgent === "true" ? <span>Agent</span> : <span>Rentee</span>}

                    {storedIsAgent === "true" ? <p>Helping you find an apartment</p> : (<p className="mt-2 text-gray-500 text-sm">Looking for a cosy apartment... </p>)}



                </div>

                <div className="flex lg:h-[20%] ">
                    <div className="text-center w-1/2 p-4 w-full cursor-pointer m-10 md:m-0">
                        <Link to='/appoinments' className="bg-blue-500 hover:bg-blue-500 text-white font-bold py-2 px-4 border border-blue-700 rounded">
                            My Appoinments
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}