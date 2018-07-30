import React from 'react';

import Header from './header';
import GuessSection from './guess-section';
import StatusSection from './status-section';
import InfoSection from './info-section';
import { setGuess, newGame } from '../actions';
import { connect } from 'react-redux';

export class Game extends React.Component {

  setGuess(guess) {
    this.props.dispatch(setGuess(guess));
  }

  newGame() {
    this.props.dispatch(newGame());
  }

  render() {
    return (
      <div>
        <Header
          onRestartGame={() => this.newGame()}
          onGenerateAuralUpdate={() => this.generateAuralUpdate()}
        />
        <main role="main">
          <GuessSection
            feedback={this.props.feedback}
            guessCount={this.props.guessCount}
            onMakeGuess={guess => {
              this.setGuess(guess) 
            }}
          />
          <StatusSection guesses={this.props.guesses}
            auralStatus={this.props.auralStatus}
          />
          <InfoSection />
        </main>
      </div>
    );
  }
}

Game.defaultProps = {
  userGuess: '',
  feedback: 'Make a Guess',
  guesses: [],
  answer: Math.round(Math.random() * 100) + 1
};

const mapStateToProps = state => ({
  userGuess: state.userGuess,
  feedback: state.feedback,
  auralStatus: state.auralStatus,
  guesses: state.guesses,
  correctAnswer: state.correctAnswer
});

export default connect(mapStateToProps)(Game);