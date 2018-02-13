/**
 * Returns a new state object to the Redux store where the started flag
 * is set to true and resets everything else inside the gameState property.
 */
export default (state, initialGameState) => {
    return {
        ...state,
        gameState: {
            ...initialGameState,
            started: true,
        }
    }
};
