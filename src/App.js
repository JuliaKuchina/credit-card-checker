import React, { Component } from 'react';
import styled, { createGlobalStyle } from 'styled-components';

import Input from './components';


const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: "Roboto", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    box-sizing: border-box;
  }
`;
class App extends Component {

  appDiv = styled.div`
    background-color: rgba(0,0,0,0.1);
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  `;

  render() {
    return (
      <this.appDiv>
        <GlobalStyle />
        <Input />
      </this.appDiv>
    );
  }
}

export default App;
