import React, { Component } from 'react';

class HelloWorldHooks extends Component {
  state = {
    active: true,
    btnText: "Ocultar"
  };

  handleClick = () => {
    this.setState(oldState => ({
      active: !oldState.active,
      btnText: oldState.active ? "Mostrar" : "Ocultar"
    }));
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>{this.state.btnText}</button>
        {
          this.state.active &&
          <h1>Hallo Welt Hooks!</h1>
        }
      </div>
    );
  }
}

export default HelloWorldHooks;
