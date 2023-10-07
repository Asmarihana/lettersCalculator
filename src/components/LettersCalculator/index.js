import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {count: 0}

  countLetters = event => {
    this.setState({
      count: event.target.value.length,
    })
  }

  render() {
    const {count} = this.state
    return (
      <div className="background">
        <div className="card">
          <h1>Calculate the Letters you enter</h1>
          <div className="labels">
            <label htmlFor="input-text">Enter the phrase</label>
            <input
              id="input-text"
              type="text"
              placeholder="Enter the phrase"
              onChange={this.countLetters}
            />
          </div>
          <p className="count-para">No.of letters: {count}</p>
        </div>

        <div className="image">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
          />
        </div>
      </div>
    )
  }
}
export default LettersCalculator
