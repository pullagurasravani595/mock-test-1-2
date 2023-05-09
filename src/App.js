import {Component} from 'react'
import TabItem from './components/TabItem'
import './App.css'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

// Replace your code here
class App extends Component {
  state = {activeBtn: languageGreetingsList[0].buttonText}

  changeBtnText = text => {
    this.setState({activeBtn: text})
  }

  render() {
    const {activeBtn} = this.state
    const filterLanguageList = languageGreetingsList.filter(
      eachItem => eachItem.buttonText === activeBtn,
    )
    console.log(filterLanguageList)
    return (
      <div className="main-container">
        <h1>Multilingual Greetings</h1>
        <ul className="un-order-list-container">
          {languageGreetingsList.map(eachItem => (
            <TabItem
              tabDetails={eachItem}
              key={eachItem.id}
              isActive={eachItem.buttonText === activeBtn}
              changeBtnText={this.changeBtnText}
            />
          ))}
        </ul>
        <ul className="un-order-list-container-image">
          {filterLanguageList.map(eachLanguage => (
            <li key={eachLanguage.id} className="list-container">
              <img
                src={eachLanguage.imageUrl}
                alt={eachLanguage.imageAltText}
                className="image-Element"
              />
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default App
