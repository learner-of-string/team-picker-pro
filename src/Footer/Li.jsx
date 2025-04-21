import React from "react";

const Li = ({ children }) => {
    return (
        <div className="flex items-center">
            <img
                src="https://img.icons8.com/?size=100&id=99634&format=png&color=FFFFFF"
                alt=""
                className="size-3 rounded-full"
            />
            {children}
        </div>
    );
};

export default Li;
