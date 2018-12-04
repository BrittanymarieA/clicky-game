// src/components/Game
import React from "react";
import data from "../../data.json";

import Navbar from "../Navbar";
import GameCard from "../GameCard";

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

class Game extends React.Component {
  constructor() {
    super();
    this.state = {
      data,
      score: 0,
      topScore: 0,
      clicked: []
    };
  }


  handleImgClick = id => {
    console.log(id);
    this.handleShuffle();
    if (this.state.clicked.indexOf(id) === -1) {
      this.handleScore();
      this.setState({ clicked: this.state.clicked.concat(id) });
    } else {
      this.handleReset();
    }
  }

  handleScore = () => {
    const newScore = this.state.score + 1;
    this.setState({
      score: newScore
    });
    if (newScore >= this.state.topScore) {
      this.setState({ topScore: newScore })
    } else if (newScore === 5){
      alert('you win');
      this.handleReset();
    }
  }

  handleReset(){
    this.setState({
      score: 0,
      topScore: this.state.topScore,
      clicked: []
    });
    this.handleShuffle();
  }

  handleShuffle = () => {
    let shuffledData = shuffle(data);
    this.setState({ data: shuffledData })
  };

  render() {
    const {
      data,
      score,
      topScore
    } = this.state;

    return (
      <div>
        <Navbar score={score} topScore={topScore} />
        <div className="gameCard">
          {data.map(item => (
            <GameCard
              handleImgClick={this.handleImgClick}
              key={item.id} {...item}
            />)
          )}</div>
      </div>
    );
  }
}

export default Game;
