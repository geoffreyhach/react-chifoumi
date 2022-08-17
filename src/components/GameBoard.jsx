import React from "react";

const GameBoard = (props) => {
    const gameResult = (a, b) => {
        let result;

        if (a === b) result = 0;
        if (a === "scissors" && b === "rock") result = -1;
        if (a === "scissors" && b === "paper") result = 1;
        if (a === "rock" && b === "paper") result = -1;
        if (a === "rock" && b === "scissors") result = 1;
        if (a === "paper" && b === "scissors") result = -1;
        if (a === "paper" && b === "rock") result = 1;

        props.onScoreUpdate(result, a, b);
    };

    const handlePlay = (e) => {
        let playerMove = e.target.getAttribute("data-choice");
        console.log(e.target.getAttribute("data-choice"));
        gameResult(playerMove, iaMove());
    };

    const iaMove = () => {
        let move = Math.random();
        if (move < 1 / 3) return "paper";
        if (move > 2 / 3) return "rock";
        return "scissors";
    };

    return (
        <main className="gameboard">
            <div
                className="card paper"
                data-choice="paper"
                onClick={(e) => handlePlay(e)}
            ></div>
            <div
                className="card scissors"
                data-choice="scissors"
                onClick={(e) => handlePlay(e)}
            ></div>
            <div
                className="card rock"
                data-choice="rock"
                onClick={(e) => handlePlay(e)}
            ></div>
        </main>
    );
};

export default GameBoard;
