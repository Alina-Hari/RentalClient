import { DiAtom } from "react-icons/di";
import { DiGithub } from "react-icons/di";
import { Link } from "react-router-dom";
export default function Footer() {
    return (
        <div className="w-screen h-[8%] p-6 fixed bottom-0 bg-gray-300 flex flex-row justify-evenly">
            <DiAtom className="text-black w-10 h-10" />
            <p className="text-black p-2 flex text-center flex-row">
                <span>Copyright © 2024 - All right reserved</span>
                <Link to='/about' className="ml-10">About</Link>
            </p>
            <a href="https://github.com/Alina-Hari/RentalClient" target="_blank"><DiGithub className="text-black w-10 h-10">
            </DiGithub></a>
        </div>
    )
}