import { Link } from "react-router-dom";

export default function AppoinmentCard(props) {

    const appoinment = props.value;
    const appoinmentId = appoinment._id


    return (
        <div className="bg-white/20 rounded-lg flex-1 w-full h-full">
            <div className="grid grid-cols-3 p-2  h-full">
                <p>Apartment - {appoinment._id}</p>
                <p>Apartment - {appoinment.time}</p>
                <Link to={`/apartments/${appoinment._id}`} />
            </div>
        </div>
    );
}
