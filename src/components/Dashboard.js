import React from 'react';
import styled from 'styled-components';
import Position from './partial/position';
import Input from './partial/input';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  .topTitle {
    margin-bottom: 0.8rem;
    padding: 0;
    font-weight: normal;
    font-size: 1.6rem;
    color: #626569;
    color: rgba(0, 0, 0, 0.4);
    text-shadow: 0 1px 1px rgba(255, 255, 255, 0.5);
    text-align: center;
  }
  .wrapper {
    display: flex;
    align-items: flex-end;
    justify-content: space-evenly;
  }
`;

export default class Dashboard extends React.PureComponent {
  render() {
    const { position, size, borderColor, bgColor, borderWidth } = this.props;
    // console.log(bgColor);

    return (
      <Container>
        <div className="topTitle">Arrow Configuration</div>
        <div className="wrapper">
          <Position position={position} changeHandler={this.props.changeHandler} />
          <div className="inputs">
            <Input title="Size" type="size" value={size} changeHandler={this.props.changeHandler} />
            <Input title="Color" type="bgColor" color={bgColor} changeHandler={this.props.changeHandler} />
            <Input
              title="Border width"
              type="borderWidth"
              value={borderWidth}
              changeHandler={this.props.changeHandler}
            />
            <Input
              title="Border color"
              type="borderColor"
              color={borderColor}
              changeHandler={this.props.changeHandler}
            />
          </div>
        </div>
      </Container>
    );
  }
}
