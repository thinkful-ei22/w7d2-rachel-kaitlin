import React from 'react';

import Header from './header';
import GuessSection from './guess-section';
import StatusSection from './status-section';
import InfoSection from './info-section';
import { setGuess } from '../actions';
import { connect } from 'react-redux';

export class Game extends React.Component {

  setGuess(guess) {
    this.props.dispatch(setGuess(guess));
  }

  render() {
    return (
      <div>
        <Header
          onRestartGame={() => this.restartGame()}
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
  feedback: 'Cold as ice',
  guesses: [0, 5, 12],
  answer: 50
};

const mapStateToProps = state => ({
  userGuess: state.userGuess,
  feedback: state.feedback,
  auralStatus: state.auralStatus,
  guesses: state.guesses,
  correctAnswer: state.correctAnswer
});

export default connect(mapStateToProps)(Game);