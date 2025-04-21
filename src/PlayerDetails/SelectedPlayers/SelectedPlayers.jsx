import SelectedPlayer from "./SelectedPlayer";

const SelectedPlayers = ({ selectedPlayers, removeThePlayer }) => {
    if (selectedPlayers.length === 0) {
        return (
            <div>
                <h3 className="text-5xl font-bold text-orange-600 text-center my-10">
                    Choose your player from available list
                </h3>
            </div>
        );
    } else {
        return (
            <div className="lg:mx-20 mx-5">
                {selectedPlayers.map((selectedPlayer) => (
                    <SelectedPlayer
                        key={selectedPlayer.id}
                        selectedPlayer={selectedPlayer}
                        removeThePlayer={removeThePlayer}
                    />
                ))}
            </div>
        );
    }
};

export default SelectedPlayers;
