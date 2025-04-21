import React, { useState } from "react";
import AllPlayers from "./AllPlayers";
import SelectedPlayers from "./SelectedPlayers/SelectedPlayers";
import { toast } from "sonner";
const AvailablePlayers = ({
    allPlayers,
    currentBalance,
    setCurrentBalance,
}) => {
    const [activeTab, setActiveTab] = useState("Available"); // Selected or Available
    const [selectedPlayers, setSelectedPlayers] = useState([]);

    const selectYourPlayer = (playerObj) => {
        if (selectedPlayers.length >= 6) {
            toast.info(`You have already added 6 players!`);
        } else if (
            selectedPlayers.some(
                (clickedPlayer) => clickedPlayer.id === playerObj.id
            )
        ) {
            toast.warning(`${playerObj.name} already is in your team`);
        } else if (currentBalance <= playerObj.cost) {
            toast.error(
                `আপনার অ্যাকাউন্টে পর্যাপ্ত ব্যালেন্স নেই! এই মুহুর্তে আপনার ব্যবহারযোগ্য ব্যালেন্স আছে ${currentBalance}। অনুগ্রহপূর্বক রিচার্জ করুন অথবা ইমার্জেন্সী নিতে free claim করুন। বানীতেঃ সিম কোম্পানী😈`
            );
        } else {
            setCurrentBalance(currentBalance - playerObj.cost);
            setSelectedPlayers([playerObj, ...selectedPlayers]);
            toast.success(`${playerObj.name} added to your team`);
        }
    };

    const removeThePlayer = (id) => {
        const remainingPlayers = selectedPlayers.filter(
            (eachSelectedPlayer) => eachSelectedPlayer.id !== id
        );
        setSelectedPlayers(remainingPlayers);
        toast.info("Someone removed");
    };

    return (
        <div>
            <div className="flex lg:flex-row flex-col lg:justify-around gap-2.5 items-center my-8">
                <div>
                    {activeTab === "Available" && (
                        <p className="font-bold lg:text-3xl text-xl">
                            Available Players
                        </p>
                    )}
                    {activeTab === "Selected" && (
                        <p className="font-bold lg:text-3xl text-xl">
                            Selected Player ({selectedPlayers.length}/6)
                        </p>
                    )}
                </div>
                <div>
                    <button
                        className={`lg:py-3.5 lg:px-5 py-2.5 px-4 border-2 border-[#1313131A]  rounded-bl-xl rounded-tl-xl ${
                            activeTab === "Available"
                                ? "bg-[#E7FE29] text-[#131313] font-bold]"
                                : "font-normal"
                        }`}
                        onClick={() => setActiveTab("Available")}
                    >
                        Available
                    </button>
                    <button
                        className={`lg:py-3.5 lg:px-5 py-2.5 px-4 border-2 border-[#1313131A]  rounded-br-xl rounded-tr-xl ${
                            activeTab === "Selected"
                                ? "bg-[#E7FE29] text-[#131313] font-bold]"
                                : "font-normal"
                        }`}
                        onClick={() => setActiveTab("Selected")}
                    >
                        Selected ({selectedPlayers.length})
                    </button>
                </div>
            </div>
            <div>
                {activeTab === "Available" && (
                    <AllPlayers
                        allPlayers={allPlayers}
                        selectYourPlayer={selectYourPlayer}
                    />
                )}
                {activeTab === "Selected" && (
                    <SelectedPlayers
                        selectedPlayers={selectedPlayers}
                        removeThePlayer={removeThePlayer}
                    />
                )}
            </div>
        </div>
    );
};

export default AvailablePlayers;
