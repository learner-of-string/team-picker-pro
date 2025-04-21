import { Toaster } from "sonner";

const SelectedPlayer = ({
    selectedPlayer: { img, name, skills, id },
    removeThePlayer,
}) => {
    return (
        <div className="border-2 border-[#1313131A] lg:p-6 p-3 rounded-2xl my-5 flex items-center justify-between">
            <div className="flex gap-5 items-center">
                <div>
                    <img
                        src={img}
                        alt={name}
                        className="size-20 object-cover rounded-2xl"
                        draggable="false"
                    />
                </div>
                <div>
                    <h3 className="text-2xl font-semibold text-[#131313]">
                        {name}
                    </h3>
                    <p className="text-[#13131399]">{skills[0]}</p>
                </div>
            </div>
            <div>
                <Toaster richColors closeButton position="top-center" />
                <button onClick={() => removeThePlayer(id)}>
                    <img
                        src="https://img.icons8.com/?size=100&id=84085&format=png&color=f14749"
                        alt="delete button icon"
                        className="size-6 object-cover"
                        draggable="false"
                    />
                </button>
            </div>
        </div>
    );
};

export default SelectedPlayer;
