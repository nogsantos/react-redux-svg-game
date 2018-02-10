import { MOVE_OBJECTS } from '../actions';
import moveObjects from './moveObjects';
/**
 * Main reducer
 */
const initialState = {
    angle: 45,
};
function reducer(state = initialState, action) {
    switch (action.type) {
        case MOVE_OBJECTS:
            return moveObjects(state, action);
            break;
        default:
            return state
            break;
    }
}

export default reducer;