import React, { Component } from "react";
import Header from "./Header";
import GameBoard from "./GameBoard";
import RoundResult from "./RoundResult";
import Rules from "./Rules";
import Footer from "./Footer";

class Home extends Component {
    state = {
        score: 0,
        yourChoice: null,
        houseChoice: null,
        result: null,
        readyToPlay: 1,
    };

    handleScoreUpdate = (result, yourChoice, houseChoice) => {
        if (result === 1) this.handleWin();
        if (result === -1) this.handleLose();
        this.setState({ readyToPlay: 0 });
        this.setState({ yourChoice, houseChoice, result });
    };

    handleWin = () => {
        this.setState({ score: this.state.score + 1 });
    };
    handleLose = () => {
        this.setState({ score: this.state.score - 1 });
    };

    handlePlayAgain = () => {
        this.setState({ readyToPlay: 1 });
    };

    componentDidMount() {
        let sc = window.localStorage.getItem("MY_SCORE");
        this.setState({ score: sc });
    }

    componentDidUpdate() {
        window.localStorage.setItem("MY_SCORE", this.state.score);
    }

    render() {
        return (
            <React.Fragment>
                <Header score={this.state.score} />
                {this.state.readyToPlay ? (
                    <GameBoard
                        score={this.state.score}
                        onScoreUpdate={this.handleScoreUpdate}
                    />
                ) : (
                    <RoundResult
                        onPlayAgain={this.handlePlayAgain}
                        yourChoice={this.state.yourChoice}
                        houseChoice={this.state.houseChoice}
                        result={this.state.result}
                    />
                )}
                <Rules />
                <Footer />
            </React.Fragment>
        );
    }
}

export default Home;
