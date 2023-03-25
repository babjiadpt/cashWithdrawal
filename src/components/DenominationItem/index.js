// Write your code here
import './index.css'

import {Component} from 'react'

class DenominationItem extends Component {
  render() {
    const {denominationAmount, withDraw} = this.props

    const {value, id} = denominationAmount

    const withdrawAmount = () => {
      withDraw(id, value)
    }
    return (
      <li>
        <button
          type="button"
          className="amount-button"
          onClick={withdrawAmount}
        >
          {value}
        </button>
      </li>
    )
  }
}

export default DenominationItem
