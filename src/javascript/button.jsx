import React, { Component } from 'react';
import '../css/Button.css';
import '../css/Night.css';

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nightMode: false,
      rotation: 0,
    };

    // Este enlace es necesario para que `this` funcione en el callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      nightMode: !prevState.nightMode,
      rotation: prevState.rotation + 180,
    }));
  }

  render() {
    return (
      <div className={`fullpage ${this.state.nightMode ? 'night' : ''}`}>
        <div className="section">
          <div className="time-circle">
            <div className="sun"></div>
            <div className="moon">
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div className="stars">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div className="water"></div>
          </div>
          <button
            className="rotate-button"
            onClick={this.handleClick}
            style={{ transform: `rotate(${this.state.rotation}deg)` }}
          >
            Click me!
          </button>
        </div>
      </div>
    );
  }
}

export default Button;
