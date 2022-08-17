import React from "react";

const Header = ({ score }) => {
    return (
        <header>
            <h1>
                ROCK
                <br />
                PAPER
                <br />
                SCISSORS
            </h1>
            <div className="score">
                <p>SCORE</p>
                <span>{score}</span>
            </div>
        </header>
    );
};

export default Header;
