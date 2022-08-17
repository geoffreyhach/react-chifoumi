import React from "react";

const RoundResult = ({ yourChoice, houseChoice, result, onPlayAgain }) => {
    const handleResultMessage = () => {
        if (result === 1) return "YOU WIN";
        if (result === 0) return "DRAW";
        if (result === -1) return "YOU LOOSE";
    };

    const getPlayerClasses = () => {
        return `card ${yourChoice}`;
    };

    const getHouseClasses = () => {
        return `card ${houseChoice}`;
    };

    return (
        <main className="round-result">
            <div className="choices">
                <div>
                    <div className={getPlayerClasses()}>
                        <div className="btn-hide"></div>
                    </div>
                    <p>YOUR CHOICE</p>
                </div>
                <div>
                    <div className={getHouseClasses()}>
                        <div className="btn-hide"></div>
                    </div>
                    <p>THE HOUSE PICKED</p>
                </div>
            </div>
            <h2>{handleResultMessage()}</h2>
            <button className="play-btn" onClick={onPlayAgain}>
                PLAY AGAIN
            </button>
        </main>
    );
};

export default RoundResult;
