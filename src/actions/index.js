/**
 * Redux action to update the state of your app
 */

export const MOVE_OBJECTS = 'MOVE_OBJECTS';
export const moveObjects = mousePosition => ({
    type: MOVE_OBJECTS,
    mousePosition,
});

export const START_GAME = 'START_GAME';
export const startGame = () => ({
    type: START_GAME,
});
