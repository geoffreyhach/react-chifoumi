import React from "react";

const Footer = () => {
    const handleOpenRules = () => {
        document.querySelector(".modal").showModal();
    };

    return (
        <footer>
            <button onClick={handleOpenRules}>RULES</button>
        </footer>
    );
};

export default Footer;
