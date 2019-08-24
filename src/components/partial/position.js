import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  .radio-wrapper{
    margin: 0.3rem 0;
    input[type='radio'] {
      opacity:0;
       + label {
        position: relative;
        cursor: pointer;
        &::before {
          content: '';
          position: absolute;
          left: -22px; /* 这个后面会调整 */
          border-radius: 50%;
          border: 1px solid #6f686a;
          width: 18px;
          height: 18px;
          background: transparent;
        }
        &::after {
          content: '';
          position: absolute;
          left: -19px;
          top: 7px;
          border-radius: 50%;
          width: 14px;
          height: 14px;
        }

      }
      &:checked {
        + label::after {
          background: #db3846;
        }
      }
      &:focus {
        + label::before {
          box-shadow: 0 0px 8px #db3846;
        }
      }
        &:disabled {
        + label::before {
          border:1px solid #ddd;
          box-shadow: 0 0px 4px #ddd;
        }
      }
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
        <div className="radio-wrapper">
          <input value="top" type="radio" id="top_rd" checked={this.state.checkedVal === 'top'}
            onChange={this.handleChange} />
          <label htmlFor="top_rd">Top</label>
        </div>
        <div className="radio-wrapper">
          <input value="right" type="radio" id="right_rd" checked={this.state.checkedVal === 'right'}
            onChange={this.handleChange} />
          <label htmlFor="right_rd">Right</label>
        </div>
        <div className="radio-wrapper">
          <input value="bottom" type="radio" id="bottom_rd" checked={this.state.checkedVal === 'bottom'}
            onChange={this.handleChange} />
          <label htmlFor="bottom_rd">Bottom</label>
        </div>
        <div className="radio-wrapper">
          <input
            type="radio"
            value="left"
            id="left_rd"
            checked={this.state.checkedVal === 'left'}
            onChange={this.handleChange} />
          <label htmlFor="left_rd">Left</label>
        </div>


      </Container>
    );
  }
}
