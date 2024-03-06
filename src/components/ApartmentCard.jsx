import { Link } from "react-router-dom";

export default function ApartmentCard(props) {

    const apartment = props.value;
    const apartmentId = apartment._id


    return (
        <Link to={`/apartments/${apartmentId}`}>
            <div className="bg-white/20 rounded-lg flex-1 w-full h-full">

                <div className="grid grid-cols-3 p-2  h-full">

                    <div key={apartment._id} className="min-h-44 h-44  w-24 mx-auto">
                        <img
                            src={apartment.images}
                            className="object-cover max-w-full max-h-full mx-auto"
                        />
                        <h1 className="px-6 py-3 text-black text-left text-sm">
                            {apartment.apartmentType.toUpperCase()}
                        </h1>
                        <p>{apartment.city}, {apartment.country}</p>
                        <p>${apartment.price}</p>
                        <p>{apartment.area}m2</p>
                    </div>
                </div>
            </div>
        </Link>
    );
}
