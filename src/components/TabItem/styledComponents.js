import styled from 'styled-components'

export const ListElement = styled.li`
  list-style-type: none;
`
export const ButtonElement = styled.button`
  color: ${props => (props.outline ? '#ffffff' : ' #db1c48')};
  font-size: 14px;
  font-family: 'Roboto';
  font-weight: 500;
  border: 1px solid #db1c48;
  border-radius: 8px;
  line-height: 2;
  background-color: ${props => (props.outline ? '#db1c48' : 'transparent')};
  width: 80px;
  margin-right: 14px;
`
