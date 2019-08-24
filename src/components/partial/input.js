import React from 'react';
import styled from 'styled-components';
import ColorPicker from './ColorPicker';

const Container = styled.div`
  margin-top: 0.2rem;
  display: flex;
  align-items: center;
  .title {
    flex: 1;
    width: 7rem;
  }

  .input {
    flex: 1;
    border: 1px solid #777;
    box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(255, 255, 255, 0.3);
    border-radius: 4px;
    padding: 3px;
    width: 1rem;
  }
`;

export default class Input extends React.PureComponent {
  handleNumberFocus = ({ target }) => {
    target.select();
  };
  render() {
    const { title, type, changeHandler, color, value } = this.props;
    return (
      <Container>
        <span className="title">{title}</span>
        {(type === 'size' || type === 'borderWidth') && (
          <input
            className="input"
            type="number"
            placeholder="px"
            value={value}
            onChange={evt => changeHandler(type, evt.target.value)}
            onFocus={this.handleNumberFocus}
            onClick={this.handleNumberFocus}
          />
        )}
        {(type === 'borderColor' || type === 'bgColor') && (
          <ColorPicker className="color" type={type} color={color} changeHandler={changeHandler} />
        )}
      </Container>
    );
  }
}
