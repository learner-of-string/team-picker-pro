import { Toaster } from "react-hot-toast";
import logo from "./../assets/banner-main.png";
import bannerBgShadow from "./../assets/bg-shadow.png";

const Banner = ({ getFreeBalance }) => {
    return (
        <div
            className="flex flex-col justify-center items-center lg:gap-6 gap-5 lg:mx-20 mx-7 bg-[#111111] lg:py-16 p-8 rounded-2xl bg-no-repeat bg-center"
            style={{ backgroundImage: `url(${bannerBgShadow})` }}
        >
            <img
                draggable="false"
                src={logo}
                alt="logo.png"
                className="lg:w-3xs w-52 lg:h-52 h-44 object-cover"
            />
            <div className="flex flex-col gap-4 justify-center items-center text-white">
                <h3 className="lg:text-4xl text-xl text-center font-bold">
                    Assemble Your Ultimate Dream 11 Cricket Team
                </h3>
                <p className="font-inter">Beyond Boundaries Beyond Limits</p>
            </div>
            <button
                className="bg-gradient-to-r from-pink-400 via-pink-300 to-yellow-300 hover:opacity-90 transition-opacity duration-300 py-3.5 px-5 rounded-xl font-bold"
                onClick={getFreeBalance}
            >
                Claim Free Credit
            </button>
            <Toaster />
        </div>
    );
};

export default Banner;
