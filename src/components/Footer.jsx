import { DiAtom } from "react-icons/di";
import { DiGithub } from "react-icons/di";
import { Link } from "react-router-dom";
export default function Footer() {
    return (
        <div className="w-screen h-[10%] p-7 fixed bottom-0 bg-gray-600 flex flex-row justify-evenly">
            <DiAtom className="text-white w-10 h-10" />
            <p className="text-white p-2 flex text-center flex-row">
                <span>Copyright © 2024 - All right reserved</span>
                <Link to='/about' className="ml-10">About</Link>
            </p>
            <DiGithub className="text-white w-10 h-10"></DiGithub>
        </div>
    )
}