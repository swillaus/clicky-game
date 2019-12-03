import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Jumbotron from "./components/Jumbotron/Jumbotron";
import ImageCard from "./components/ImageCard/index";
import initData from './data.json'

class App extends React.Component {
  state = {
    cards: [],
    currentScore: 0,
    highScore: 0
  }

  componentDidMount() {
    this.setState({ cards: this.shuffleCards(initData), highScore: parseInt(localStorage.getItem("highScore")) || 0 })
  }

  shuffleCards = data => {

    for (let i = 0; i < data.length; i++) {
      let randomIndex = Math.floor(Math.random() * data.length);

      let valOne = data[i];
      let valTwo = data[randomIndex];

      data[i] = valTwo;
      data[randomIndex] = valOne;
    }

    return data;
  }

  handleClick = name => {
    let duplicateClick = false;
    const newCards = this.state.cards.map(card => {
      if (card.name === name) {
        console.log(card.clicked)
        if (card.clicked) {
          duplicateClick = true;
          return card;
        } else {
          return {
            ...card,
            clicked: true
          }
        }
      }
      return card;
    })

    if (duplicateClick) {
      console.log("Game Over");
      const newHighScore = this.state.currentScore > this.state.highScore ? this.state.currentScore : this.state.highScore;
      localStorage.setItem("highScore", newHighScore)
      this.setState({ cards: initData, highScore: newHighScore, currentScore: 0 })
    } else {      
      this.setState({ cards: this.shuffleCards(newCards), currentScore: this.state.currentScore + 1 })
    }
  }

  render() {
    const { cards, currentScore, highScore } = this.state;


    return (
      <div className="App">
        <Navbar />
        current: {currentScore}, highscore: {highScore}
        <Jumbotron />

        {
          cards.map((card, i) => <ImageCard key={i + '_card_set_1'} card={card} handleClick={this.handleClick} />)
        }

      </div>
    );
  }
}
export default App;
