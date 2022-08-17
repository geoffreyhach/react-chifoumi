import React from "react";

const RoundResult = ({ yourChoice, houseChoice, result, onPlayAgain }) => {
    const handleResultMessage = () => {
        let output;
        if (result === 1) return "YOU WIN";
        if (result === 0) return "DRAW";
        if (result === -1) return "YOU LOOSE";
    };

    return (
        <div className="round-result">
            <div className="choices">
                <div>
                    <button className={yourChoice}>
                        <div className="btn-hide"></div>
                    </button>
                    <p>YOUR CHOICE</p>
                </div>
                <div>
                    <button className={houseChoice}>
                        <div className="btn-hide"></div>
                    </button>
                    <p>THE HOUSE PICKED</p>
                </div>
            </div>
            <h2>{handleResultMessage()}</h2>
            <button className="play-btn" onClick={onPlayAgain}>
                PLAY AGAIN
            </button>
        </div>
    );
};

export default RoundResult;
