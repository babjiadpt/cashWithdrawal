// Write your code here
import './index.css'

import {Component} from 'react'

import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {totalBalance: 2000}

  withDraw = (id, value) => {
    this.setState(prevState => ({
      totalBalance: prevState.totalBalance - value,
    }))
  }

  render() {
    const {denominationsList} = this.props
    const {totalBalance} = this.state

    return (
      <div className="app-container">
        <div className="cash-withdraw-container">
          <div className="name-container">
            <h1 className="name-logo">S</h1>
            <p className="name-head">Sarah Williams</p>
          </div>
          <div className="amount-container">
            <p className="amount-text">Your Balance</p>
            <div>
              <p className="amount">{totalBalance}</p>
              <p className="amount-words">In Rupees</p>
            </div>
          </div>
          <p className="withdraw-text">Withdraw</p>
          <p className="sum-of-text">CHOOSE SUM (IN RUPEES)</p>
          <ul className="list-container">
            {denominationsList.map(eachItem => (
              <DenominationItem
                denominationAmount={eachItem}
                key={eachItem.id}
                withDraw={this.withDraw}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
