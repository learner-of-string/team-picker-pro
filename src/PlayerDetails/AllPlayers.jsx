import React from "react";
import EachPlayer from "./EachPlayer";

const AllPlayers = ({ allPlayers, selectYourPlayer }) => {
    return (
        <div className="grid lg:grid-cols-3 grid-cols-1 lg:mx-20 mx-3 lg:gap-5 gap-2">
            {allPlayers.map((player) => (
                <EachPlayer
                    key={player.id}
                    player={player}
                    selectYourPlayer={selectYourPlayer}
                />
            ))}
        </div>
    );
};

export default AllPlayers;
