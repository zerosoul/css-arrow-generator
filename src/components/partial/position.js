import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  label {
    cursor: pointer;
    min-width: 6rem;
    padding: 0.2rem 0;
    input[type='radio'] {
      padding: 0.2rem;
      border-radius: 0.3rem;
      margin-right: 0.4rem;
      box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(255, 255, 255, 0.3);
    }
  }
`;

export default class Position extends Component {
  constructor(props) {
    super(props);

    this.state = {
      checkedVal: 'top',
    };
  }
  shouldComponentUpdate(nextProps, nextState) {
    return nextState.checkedVal !== this.state.checkedVal;
  }
  handleChange = evt => {
    // console.log(evt.target);
    const checkedVal = evt.target.value;
    this.setState(
      {
        checkedVal,
      },
      this.props.changeHandler('position', checkedVal)
    );
  };
  render() {
    return (
      <Container>
        <div>Position</div>
        <label htmlFor="top_rd">
          <input
            type="radio"
            id="top_rd"
            value="top"
            checked={this.state.checkedVal === 'top'}
            onChange={this.handleChange}
          />
          Top
        </label>
        <label htmlFor="right_rd">
          <input
            type="radio"
            id="right_rd"
            value="right"
            checked={this.state.checkedVal === 'right'}
            onChange={this.handleChange}
          />
          Right
        </label>
        <label htmlFor="bottom_rd">
          <input
            type="radio"
            id="bottom_rd"
            value="bottom"
            checked={this.state.checkedVal === 'bottom'}
            onChange={this.handleChange}
          />
          Bottom
        </label>
        <label htmlFor="left_rd">
          <input
            type="radio"
            id="left_rd"
            value="left"
            checked={this.state.checkedVal === 'left'}
            onChange={this.handleChange}
          />
          Left
        </label>
      </Container>
    );
  }
}
