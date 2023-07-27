// Write your code here
import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  getRandomNumber = () => Math.ceil(Math.random() * 100)

  onButtonClick = () => {
    const random = this.getRandomNumber()
    this.setState(prevState => ({count: prevState.count + random}))
  }

  render() {
    const {count} = this.state
    const displayText = count % 2 === 0 ? 'Even' : 'Odd'
    return (
      <div className="banner-container">
        <h1>Count {count}</h1>
        <div>
          <p className="heading">Count is {displayText}</p>
          <button
            type="button"
            className="button-element"
            onClick={this.onButtonClick}
          >
            Increment
          </button>
          <p className="para">*Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
