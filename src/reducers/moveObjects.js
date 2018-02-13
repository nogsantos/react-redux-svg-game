import {
    calculateAngle
} from '../utils/formulas';
import createFlyingObjects from './createFlyingObjects';
/**
 * It`s a Redux reducer.
 * extracts the x and y properties from mousePosition and passes them to the
 * calculateAngle function to get the new angle. Then, in the end,
 * it generates a new state with the new angle.
 *
 * @param {*} state
 * @param {*} action
 */
function moveObjects(state, action) {
    const mousePosition = action.mousePosition || {
        x: 0,
        y: 0,
    };

    const newState = createFlyingObjects(state);

    const now = (new Date()).getTime();
    const flyingObjects = newState.gameState.flyingObjects.filter(object => (
        (now - object.createdAt) < 4000
    ));

    const {
        x,
        y
    } = mousePosition;
    const angle = calculateAngle(0, 0, x, y);
    return {
        ...newState,
        gameState: {
            ...newState.gameState,
            flyingObjects,
        },
        angle,
    };
}

export default moveObjects;
