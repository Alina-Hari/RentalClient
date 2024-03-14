import netherlands from '../assets/netherlands.png'
import map from '../assets/map.png'
import { BiHomeHeart } from "react-icons/bi";
import { IconContext } from "react-icons";
import { FaCalendarAlt } from "react-icons/fa";
import { HiCursorClick } from "react-icons/hi";


export default function HomePage() {

    const offers = [
        {
            name: "Move-In Specials",
            text: "Waived application fees, discounted security deposits, or a month of free rent for new tenants."
        },
        {
            name: "Flexible Lease Options",
            text: "short-term leases, month-to-month options, or lease-to-own arrangements to accommodate diverse tenant needs."
        },
        {
            name: "Amenity Bundles",
            text: "Complimentary amenities or services, such as free parking, gym memberships, or access to community facilities."
        },
        {
            name: "Renewal Incentives",
            text: "Lease renewal benefits, like reduced rent increases, complimentary maintenance services."
        }
    ]
    return (
        <div className="w-full h-full flex flex-col overflow-y-scroll lg:overflow-y-hidden md:flex-row justify-start md:justify-between  rounded-xl  shadow-sm ">
            <div className="flex flex-col justify-evenly md:w-1/2 p-2 ">
                <h2 className='font-bold text-2xl md:text-4xl mt-2 mb-2 text-left'>Discover your dream home in the Netherlands - schedule visits with expert agents today!</h2>
                <p className='mt-2 text-2xl mb-2'>Find the perfect place to call home. Whether you're searching for a cozy studio,
                    a spacious family apartment, or a modern urban loft, we've got you covered.</p>
                {/* <div className="flex flex-row justify-evenly w-full h-auto mt-4 mb-4">
                    <p className="flex flex-col "><span className='text-xl font-bold'>115k+</span><span className="text-xs font-thin">Capital Raised</span></p>
                    <p className="flex flex-col "><span className='text-xl font-bold'>20k+</span><span className="text-xs font-thin">Happy Customers</span></p>
                    <p className="flex flex-col "><span className='text-xl font-bold'>40k+</span><span className="text-xs font-thin">Properties Options</span></p>
                </div>
                 */}


                <div className="stats shadow gap-2 w-[100%] rounded-2xl h-20 bg-gray-300 md:h-24">

                    <div className="stat p-4 bg-white">
                        <div className="stat-figure text-primary">
                            <FaCalendarAlt className="inline-block w-8 h-6 stroke-current" />
                        </div>
                        <div className="text-2xl md:text-4xl font-bold">Book</div>
                        <div className="stat-title">on one click</div>
                    </div>

                    <div className="stat bg-white">
                        <div className="stat-figure text-primary">
                            <HiCursorClick className="inline-block w-8 h-8 stroke-current" />
                        </div>
                        <div className="text-2xl md:text-4xl font-bold">List</div>
                        <div className="stat-title">your appartment</div>
                    </div>


                    <div className="stat bg-white">
                        <div className="stat-figure text-secondary">
                            <div className="avatar flex justify-center items-center">
                                <div className="w-14 bg-accent mask mask-hexagon flex justify-center items-center">
                                    <span className="text-white text-center text-3xl flex justify-center align-middle items-center h-full">
                                        <p className='h-full text-center justify-center align-middle pt-2'>A</p></span>
                                </div>
                            </div>
                        </div>
                        <div className="text-2xl md:text-4xl font-bold">Manage</div>
                        <div className="stat-title">your bookings</div>
                    </div>

                </div>

                {/* <div className="carousel carousel-center max-w-md p-4 space-x-4 bg-neutral rounded-box">
                    <div className="carousel-item">
                        <img src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg" className="rounded-box" />
                    </div>
                </div> */}

                <div className="carousel carousel-center max-w-md p-8 space-x-4 w-full h-60 overflow-y-hidden">
                    {offers.map((offer, index) => {
                        return <div key={index} className="carousel-item w-full ">
                            <div className="card w-[400px] shadow-xl">
                                <div className="bg-white rounded-xl card-body">
                                    <h2 className="card-title">{offer.name}</h2>
                                    <div className="text-sm mt-4">
                                        <p>{offer.text}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    })}

                    {/* <div className="carousel-item w-full">
                            <img src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg" className="w-full" alt="Tailwind CSS Carousel component" />
                        </div> */}
                </div>
            </div>
            <div className="hidden sm:block relative md:flex h-[100%] flex-col justify-evenly md:w-1/2 p-2 ">
                <img src={netherlands} className="object-scale-down" />
                <div className='absolute left-80 top-60 text-5xl'><IconContext.Provider value={{ color: "white" }}>
                    <BiHomeHeart /></IconContext.Provider></div>
            </div>
        </div >
    )
}