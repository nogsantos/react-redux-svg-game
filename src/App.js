import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getCanvasPosition } from './utils/formulas';
import Canvas from './components/Canvas';
/**
 *
 *
 * @class App
 * @extends {Component}
 */
class App extends Component {
    /**
     * Creates an instance of App.
     * Bind the this reference of the trackMouse and componentDidMount methods to the correct object.
     *
     * @param {any} props
     * @memberof App
     */
    constructor(props) {
        super(props);
        this.trackMouse = this.trackMouse.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
    }
    /**
     * Start the uniform interval that will trigger the moveObjects action.
     *
     * @memberof App
     */
    componentDidMount() {
        const self = this;
        setInterval(() => {
            self.props.moveObjects(self.canvasMousePosition);
        }, 10);
    }
    /**
     * Track the mouse moviment
     * Update the canvasMousePosition property of the App component.
     * This property does not refer to the mouse position over the
     * HTML document. It refers to a relative position inside your canvas.
     *
     * @param {any} event
     * @memberof App
     */
    trackMouse(event) {
        this.canvasMousePosition = getCanvasPosition(event);
    }
    /**
     * Rendering the view
     *
     * @returns
     * @memberof App
     */
    render() {
        /**
         * Passes the angle property and the trackMouse method to your Canvas component.
         */
        return (
            <Canvas angle={this.props.angle} trackMouse={event => (this.trackMouse(event))} />
        );
    }
}
/**
 * Validate values
 */
App.propTypes = {
    angle: PropTypes.number.isRequired,
    moveObjects: PropTypes.func.isRequired,
};

export default App;
