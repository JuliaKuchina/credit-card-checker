import React, { Component } from 'react';
import styled from 'styled-components';
import FontAwesome from 'react-fontawesome';
import { numberConstructor } from '../helpers';

class Input extends Component {

  inputWrapper = styled.div`
    width: 312px;
    height: 80px;
    position: relative;
  `;

  gradientWrap = styled.div`
    position: relative;
    background: linear-gradient(to right, #FE40F7, #07FDFD);
    padding: 1px;
    border-radius: 5px;
    overflow: hidden;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    &.error {
      background: linear-gradient(to right, #FE3F3F, #D2197D);
    }
  `;

  styledInput = styled.input`
    width: 290px;
    height: 40px;
    border-radius: 5px;
    border: solid 0px grey;
    font-size: 1.3rem;
    color: #444;
    overflow: hidden;
    padding: 5px 10px;
    &:focus {
      outline: solid 1px rgba(7, 253, 253, 0.1);
    }
  `;

  cardIcon = styled.div`
    position: absolute;
    right: 10px;
    top: 10px;
    z-index: 10;
    color: #ccc;
    background-color: white;
    &.pointer {
      cursor: pointer;
    }
  `;

  errorMessage = styled.p`
    color: #FE3F3F;
    font-size: 0.825rem;
    position: absolute;
    left: 10px;
    bottom: -10px;
  `;

  inputRef;

  constructor(props) {
    super(props);
    this.state = {
      cardNumber: numberConstructor(''),
      cursorStart: 0,
      cursorEnd: 0,
    };
    this.inputRef = React.createRef();
    this.focusOnInput = this.focusOnInput.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.setCursor = this.setCursor.bind(this);
    this.reset = this.reset.bind(this);
  }

  componentDidMount() {
    this.focusOnInput();
  }

  componentDidUpdate(prevProps) {
   this.setCursor();
  }

  setCursor() {
    if (this.state.cursorStart !== this.state.cursorEnd) {
      this.inputRef.current.setSelectionRange(this.inputRef.current.selectionEnd, this.inputRef.current.selectionEnd);
    } else {
      const numberOfSpaces = this.state.cursorStart > 0 && (this.state.cursorStart % 5 === 0) ? 1 : 0;
      this.inputRef.current.setSelectionRange(this.state.cursorStart + numberOfSpaces, this.state.cursorEnd + numberOfSpaces);
    }
  }

  focusOnInput() {
    this.inputRef.current.focus();
  }

  handleChange(e, onBlur) {
    const insert = e.target.value.length - this.state.cardNumber.formattedNumber.length > 2;
    this.setState({
      cardNumber: numberConstructor(e.target.value, onBlur),
      cursorStart: insert ? 1 : e.target.selectionStart,
      cursorEnd: insert ? e.target.value.length : e.target.selectionEnd,
    });
  }

  reset() {
    if (!this.state.cardNumber.valid) {
      this.focusOnInput();
      this.setState({
        cardNumber: numberConstructor(''),
        cursorStart: 0,
        cursorEnd: 0,
      });
    }
  }

  render() {
    return <this.inputWrapper>
      <this.gradientWrap className={this.state.cardNumber.valid ? '' : 'error'}>
        <this.styledInput
          ref={this.inputRef}
          value={this.state.cardNumber.formattedNumber}
          type='text'
          autocomplete='off'
          onChange={this.handleChange}
          onBlur={(e) => this.handleChange(e, true)}
          placeholder='0000 0000 0000 0000'
        />
        <this.cardIcon onClick={this.reset} className={this.state.cardNumber.valid ? '' : 'pointer'}>
          <FontAwesome
            name={this.state.cardNumber.valid ? 'cc-' + this.state.cardNumber.type : 'times-circle'}
            size='2x'
          />
        </this.cardIcon>
      </this.gradientWrap>
      {!this.state.cardNumber.valid && <this.errorMessage>Invalid card number</this.errorMessage>}
    </this.inputWrapper>;
  }
}

export default Input;
