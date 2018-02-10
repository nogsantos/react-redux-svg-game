/**
 * Redux action to update the state of your app
 */

export const MOVE_OBJECTS = 'MOVE_OBJECTS';

export const moveObjects = mousePosition => ({
    type: MOVE_OBJECTS,
    mousePosition,
});
