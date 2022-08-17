import React from "react";
import iconClose from "../images/icon-close.svg";
import rules from "../images/image-rules.svg";

const Rules = () => {
    const handleClose = () => {
        document.querySelector(".modal").close();
    };

    return (
        <dialog className="modal">
            <div>
                <p>RULES</p>
                <img src={rules} alt="Rules of the game" className="rules" />
                <img
                    onClick={handleClose}
                    className="close-icon"
                    src={iconClose}
                    alt="Closing icon"
                />
            </div>
        </dialog>
    );
};

export default Rules;
