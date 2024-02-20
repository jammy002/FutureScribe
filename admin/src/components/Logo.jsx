import {Link } from "react-router-dom";

const Logo =({type}) =>{
    return(
        <div className="">
            <Link
            to='/'
            className={`text-2xl font-semibold ${type && "text-black text-4xl"}`}
            >
            Future's
            <span
            className={`text-3xl text-rose-500 ${type && "text-5xl font-bold"}`}
            >
             Scribe
            </span>
            </Link>
        </div>
    );
};

export default Logo;