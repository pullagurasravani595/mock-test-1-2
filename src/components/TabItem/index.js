import {ListElement, ButtonElement} from './styledComponents'

const TabItem = props => {
  const {tabDetails, isActive, changeBtnText} = props
  const {buttonText} = tabDetails

  const clickBtnElement = () => {
    changeBtnText(buttonText)
  }

  return (
    <ListElement>
      <ButtonElement outline={isActive} onClick={clickBtnElement}>
        {buttonText}
      </ButtonElement>
    </ListElement>
  )
}

export default TabItem
