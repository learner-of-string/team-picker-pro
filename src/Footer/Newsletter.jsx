import React from "react";
import bgShadow from "./../assets/bg-shadow.png";

const Newsletter = () => {
    return (
        <div
            style={{ backgroundImage: `url(${bgShadow})` }}
            className="lg:mx-16 mx-5 rounded-4xl flex justify-center items-center flex-col gap-6 lg:py-24 py-10 border-2 border-[#1313131A]  mt-20"
        >
            <h2 className="text-[#131313] font-bold lg:text-3xl text-xl text-center">
                Subscribe to our Newsletter
            </h2>
            <p className="kg:text-xl text-lg text-center mx-4 font-medium text-[#131313B3]">
                Get the latest updates and news right in your inbox!
            </p>
            <form className="flex lg:flex-row flex-col lg:gap-5 gap-2.5 ">
                <input
                    type="email"
                    autoComplete="off"
                    placeholder="Enter your email"
                    className="outline-none border-2 border-[#13131326] rounded-xl lg:py-5 lg:px-3 py-4 px-2 lg:w-96 w-"
                />
                <button
                    type="submit"
                    className="p-5 rounded-xl bg-amber-400 font-bold"
                    onClick={(e) => e.preventDefault()}
                >
                    Subscribe
                </button>
            </form>
        </div>
    );
};

export default Newsletter;
