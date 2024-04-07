import "./App.css"
import React, { Component } from "react"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      color: "#ffffff",
      radius: 0,
    }
    this.updateColor = this.updateColor.bind(this)
    this.updateRadius = this.updateRadius.bind(this)
  }
  updateColor(event) {
    this.setState({
      color: event.target.value,
    })
  }
  updateRadius(event) {
    this.setState({ radius: event.target.value })
  }

  render() {
    return (
      <div id="container">
        <h1>Welcome to color picker</h1>
        <div
          className="colorBlock"
          style={{
            backgroundColor: this.state.color,
            borderRadius: `${this.state.radius}px`,
          }}
        ></div>
        <div id="input-container">
          <label>
            Set Background Color:
            <input type="color" onChange={this.updateColor} />
          </label>
          <br></br>
          <label>
            Set Border Radius
            <input
              type="text"
              min={0}
              maxLength={3}
              onChange={this.updateRadius}
            />
          </label>
        </div>
        <div id="code-container">
          <p>border-radius: {this.state.radius}</p>
          <p>background-color: {this.state.color}</p>
        </div>
      </div>
    )
  }
}

export default App
