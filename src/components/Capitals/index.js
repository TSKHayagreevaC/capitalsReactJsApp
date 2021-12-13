import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

class Capitals extends Component {
  state = {
    itemId: countryAndCapitalsList[0].id,
  }

  onChangeCapital = event => {
    this.setState({itemId: event.target.value})
  }

  getCountry = () => {
    const {itemId} = this.state

    const filteredList = countryAndCapitalsList.find(
      eachItem => itemId === eachItem.id,
    )
    return filteredList.country
  }

  render() {
    const {itemId} = this.state
    const country = this.getCountry(itemId)

    return (
      <div className="bg-container">
        <div className="inner-container">
          <h1 className="heading">Countries And Capitals</h1>
          <div className="question-container">
            <select
              className="select-tag"
              onChange={this.onChangeCapital}
              value={itemId}
            >
              {countryAndCapitalsList.map(eachItem => (
                <option
                  className="option-style"
                  key={eachItem.id}
                  value={eachItem.id}
                >
                  {eachItem.capitalDisplayText}
                </option>
              ))}
            </select>
            <p className="para-text">is capital of which country?</p>
          </div>
          <h1 className="capital-name">{country}</h1>
        </div>
      </div>
    )
  }
}

export default Capitals
