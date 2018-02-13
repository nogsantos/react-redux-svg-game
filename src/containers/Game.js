import { connect } from 'react-redux';
import App from '../App';
import { moveObjects, startGame } from '../actions/index';
/**
 * This container will use the connect utility from react-redux to pass the state.message to
 * the message props of the App component
 *
 * @param {*} state
 */

const mapStateToProps = state => ({
    angle: state.angle,
    gameState: state.gameState,
});

const mapDispatchToProps = dispatch => ({
    moveObjects: (mousePosition) => {
        dispatch(moveObjects(mousePosition));
    },
    startGame: () => {
        dispatch(startGame());
    },
});

const Game = connect(
    mapStateToProps,
    mapDispatchToProps,
)(App);

export default Game;
