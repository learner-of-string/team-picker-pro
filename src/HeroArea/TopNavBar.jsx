import React from "react";
import logo from "./../assets/logo.png";
import coin from "./../assets/coin.webp";

const TopNavBar = ({ currentBalance, getFreeBalance }) => {
    return (
        <div className="flex justify-around items-center my-5">
            <div className="flex gap-1 items-center font-semibold lg:text-3xl text-xl">
                <img
                    draggable="false"
                    src={logo}
                    alt="logo.png"
                    className="lg:size-16 size-10"
                />
                <p>TeamPicker Pro</p>
            </div>
            <div className="flex gap-12">
                <button className="text-[#131313B3] cursor-pointer hover:underline hidden lg:block">
                    Home
                </button>
                <button className="text-[#131313B3] cursor-pointer hover:underline hidden lg:block">
                    Fixture
                </button>
                <button className="text-[#131313B3] cursor-pointer hover:underline hidden lg:block">
                    Teams
                </button>
                <button className="text-[#131313B3] cursor-pointer hover:underline hidden lg:block">
                    Schedules
                </button>
                <button
                    onClick={getFreeBalance}
                    className="lg:py-4 lg:px-5 py-3 px-4  border-[#1313131A] border-2 rounded-xl flex gap-1 font-semibold cursor-pointer"
                >
                    <span>{currentBalance} Coin </span>
                    <img
                        draggable="false"
                        src={coin}
                        alt=""
                        className="size-5"
                    />
                </button>
            </div>
        </div>
    );
};

export default TopNavBar;
