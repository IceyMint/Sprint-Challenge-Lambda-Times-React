import React from 'react';
import Styled from 'styled-components'
// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const DivTopBar = Styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: none;
  flex-direction: row;
  position: fixed;
  height: 44px;
  background-color: #333;
`

const DivContainer = Styled.div`
  width: 100%;
  display: flex;
  justify-content: none;
  align-items: none;
  flex-direction: row;
  color: #fff;
  letter-spacing: 1px;
  padding: 0 10px;
`

const DivContainerLeft = Styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
`

const DivContainerCenter = Styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex: 3;
  font-size: 9px;
`

const DivContainerRight = Styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
  font-weight: bold;
`
const SpanContainerLeft = Styled.span`
  cursor: pointer;
  margin-right: 25%;
  font-weight: bold;`

const SpanContainerCenter = Styled.span`
  cursor: pointer;
  margin-right: 5%;
  &:hover {
    text-decoration: underline;
  }
  &:last-child {
    margin-right: 0;
  }
`

const SpanContainerRight = Styled.span`
  cursor: pointer;
`

const TopBar = () => {
  return (
    <DivTopBar>
      <DivContainer>
        <DivContainerLeft>
          <SpanContainerLeft>TOPICS</SpanContainerLeft><SpanContainerLeft>SEARCH</SpanContainerLeft>
        </DivContainerLeft>
        <DivContainerCenter>
          <SpanContainerCenter>GENERAL</SpanContainerCenter><SpanContainerCenter>BROWNBAG</SpanContainerCenter><SpanContainerCenter>RANDOM</SpanContainerCenter><SpanContainerCenter>MUSIC</SpanContainerCenter><SpanContainerCenter>ANNOUNCEMENTS</SpanContainerCenter>
        </DivContainerCenter>
        <DivContainerRight>
          <SpanContainerRight>LOG IN</SpanContainerRight>
        </DivContainerRight>
      </DivContainer>
    </DivTopBar>
  )
}

export default TopBar;