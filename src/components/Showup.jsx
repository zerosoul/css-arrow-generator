import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 0.5rem 0;
  margin: 0 auto;
  margin-top: 2rem;
  .arrow_box {
    padding: 2rem;
    width: 18rem;
    height: 10rem;
    border-radius: 0.4rem;
    display: flex;
    align-items: center;
    .slogan {
      color: #ddf8c6;
      text-align: center;
      font-size: 2rem;
      line-height: 1.2;
      font-weight: bold;
      text-transform: uppercase;
      text-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);
    }
  }
  ${props => props.arrowCssCode};
`;

export default class Showup extends React.PureComponent {
  render() {
    return (
      <Container arrowCssCode={this.props.cssArrowCode}>
        <div className="arrow_box">
          <div className="slogan">css arrow awesome!</div>
        </div>
      </Container>
    );
  }
}
