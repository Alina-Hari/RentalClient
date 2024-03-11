import houseImg from '../assets/retro.jpg'
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
            text: "Lease renewal benefits, like reduced rent increases, complimentary maintenance services, or access to exclusive resident perks."
        }
    ]
    return (
            <div className="w-full h-full flex flex-col overflow-y-scroll lg:overflow-y-hidden md:flex-row justify-start md:justify-between  rounded-xl  shadow-sm ">
                <div className="flex h-[100%] flex-col justify-evenly md:w-1/2 p-2 ">
                    <h2 className='font-bold text-xl md:text-3xl mt-2 mb-2  text-center'>Discover Your Perfect Rental, Embrace Every Moment!</h2>
                    <p className='mt-2 mb-2 font-bold text-xl text-center'>Let's get acquainted!</p>
                    <p className='mt-2 mb-2'>Find the perfect place to call home. Whether you're searching for a cozy studio,
                        a spacious family apartment, or a modern urban loft, we've got you covered.</p>
                    <div className="flex flex-row justify-evenly w-full h-auto mt-4 mb-4">
                        <p className="flex flex-col "><span className='text-xl font-bold'>115k+</span><span className="text-xs font-thin">Capital Raised</span></p>
                        <p className="flex flex-col "><span className='text-xl font-bold'>20k+</span><span className="text-xs font-thin">Happy Customers</span></p>
                        <p className="flex flex-col "><span className='text-xl font-bold'>40k+</span><span className="text-xs font-thin">Properties Options</span></p>
                    </div>
                    <div className="w-[100%] pl-5 pr-5 h-auto carousel rounded-box ">
                        {offers.map((offer, index) => {
                            return <div key={index} className="carousel-item w-full ">
                                <div className="container w-full text-black p-8 mr-3 lg:mr-0 lg:ml-24 bg-[#87563b]  border-black rounded-lg shadow-lg max-w-md mx-auto">
                                    <div className="text-3xl font-bold mb-4">{offer.name}</div>
                                    <div className="text-sm mt-4">
                                        <p>{offer.text}</p>
                                    </div>
                                </div>
                            </div>
                        })}

                        {/* <div className="carousel-item w-full">
                            <img src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg" className="w-full" alt="Tailwind CSS Carousel component" />
                        </div> */}
                    </div>
                </div>
                <div className="flex h-[100%] flex-col justify-evenly  md:w-1/2 p-2 ">
                    <img src={houseImg} className="object-scale-down  max-w-[100%] h-auto" />
                </div>
            </div>
    )
}