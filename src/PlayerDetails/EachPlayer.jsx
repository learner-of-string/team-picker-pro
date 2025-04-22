import React from "react";

const EachPlayer = ({ player, selectYourPlayer }) => {
    const { name, country, role, img, skills, cost } = player;

    return (
        <div className="lg:p-6 p-2.5 border-2 border-[#1313131A] rounded-2xl flex flex-col gap-2.5 lg:w-96">
            <div className="my-2">
                <img
                    draggable="false"
                    src={img}
                    alt={name}
                    className="w-sm h-60 object-cover rounded-2xl"
                />
            </div>
            <div className="flex gap-0.5 items-center">
                <img
                    draggable="false"
                    src="https://img.icons8.com/?size=100&id=2yC9SZKcXDdX&format=png&color=131313"
                    alt=""
                    className="size-6"
                />
                <h2 className="text-xl font-semibold">{name}</h2>
            </div>
            <div className="flex justify-between items-center pb-3 border-b-2 border-[#1313131A]">
                <div className="flex gap-1 items-center">
                    <img
                        draggable="false"
                        src="https://img.icons8.com/?size=100&id=2755&format=png&color=131313"
                        alt=""
                        className="size-5"
                    />
                    <h2>{country}</h2>
                </div>
                <div>
                    <button className="py-2 bg-[#1313130D] px-4 rounded-lg">
                        {role}
                    </button>
                </div>
            </div>
            <div>
                <p className="font-bold text-[#131313]">Rating</p>
                <div className="flex justify-between">
                    {skills.map((skill, idx) => (
                        <p className="text-center" key={idx}>
                            {skill}
                        </p>
                    ))}
                </div>
            </div>
            <div className="flex justify-between items-center">
                <div>
                    <p className="font-semibold text-[#131313] select-none">
                        Price: ${cost}
                    </p>
                </div>
                <div>
                    <button
                        className="border-[#1313131A] border-2 p-2 rounded-lg"
                        onClick={() => selectYourPlayer(player)}
                    >
                        Choose Player
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EachPlayer;
