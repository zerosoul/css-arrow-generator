import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  .radio-wrapper {
    margin: 0.3rem 0;
    input[type='radio'] {
      opacity: 0;
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
          border: 1px solid #ddd;
          box-shadow: 0 0px 4px #ddd;
        }
      }
    }
  }
`;
const Position = ({ changeHandler }) => {
  const [checkedVal, setCheckedVal] = useState('top');

  useEffect(() => {
    changeHandler('position', checkedVal);
  }, [checkedVal, changeHandler]);
  const handleChange = evt => {
    setCheckedVal(evt.target.value);
  };
  return (
    <Container>
      <div className="radio-wrapper">
        <input
          value="top"
          type="radio"
          id="top_rd"
          checked={checkedVal === 'top'}
          onChange={handleChange}
        />
        <label htmlFor="top_rd">Top</label>
      </div>
      <div className="radio-wrapper">
        <input
          value="right"
          type="radio"
          id="right_rd"
          checked={checkedVal === 'right'}
          onChange={handleChange}
        />
        <label htmlFor="right_rd">Right</label>
      </div>
      <div className="radio-wrapper">
        <input
          value="bottom"
          type="radio"
          id="bottom_rd"
          checked={checkedVal === 'bottom'}
          onChange={handleChange}
        />
        <label htmlFor="bottom_rd">Bottom</label>
      </div>
      <div className="radio-wrapper">
        <input
          type="radio"
          value="left"
          id="left_rd"
          checked={checkedVal === 'left'}
          onChange={handleChange}
        />
        <label htmlFor="left_rd">Left</label>
      </div>
    </Container>
  );
};
export default Position;
