import React, { Component, lazy, Suspense } from 'react';
import styled from 'styled-components';
import Loading from './components/Loading';
const Footer = lazy(() => import('./components/Footer'));
const Dashboard = lazy(() => import('./components/Dashboard'));
const Showup = lazy(() => import('./components/Showup'));
const Code = lazy(() => import('./components/Code'));

import { media } from './utils/media';

const Container = styled.div`
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem;
  hgroup {
    text-align: center;
    margin-top: 2rem;
    > h1 {
      font-weight: bold;
      font-size: 2rem;
      margin-bottom: 1rem;
      text-transform: uppercase;
    }
    > h2 {
      color: #ccc;
      font-size: 0.8rem;
      a {
        color: #ddd;
        margin: 0 0.4rem;
        text-transform: uppercase;
      }
    }
  }
  .mainWrapper {
    display: flex;
    flex-direction: column;
    margin-top: 4rem;
    padding: 1rem 0;
    @media ${media.desktop} {
      flex-direction: row;
    }
    .left {
      display: flex;
      flex-direction: column;
      @media ${media.desktop} {
        margin-right: 2rem;
      }
    }
    .right {
      padding: 0.5rem;
    }
  }
  @media ${media.desktop} {
    max-width: 80%;
    margin: 0 auto;
  }
`;

export default class CssArrowGenerator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      position: 'top',
      size: 20,
      borderWidth: 4,
      borderColor: '#c2e1f5',
      bgColor: '#88b7d5',
      cssCode: '',
    };
  }
  componentDidMount() {
    this.generateCode();
  }
  getPosCode = (pos = 'top') => {
    let tmpStr = '';
    switch (pos) {
      case 'top':
        tmpStr = 'bottom:100%;\n\t  left:50%;';
        break;
      case 'bottom':
        tmpStr = 'top:100%;\n\t  left:50%;';
        break;
      case 'left':
        tmpStr = 'right:100%;\n\t  top:50%;';
        break;
      case 'right':
        tmpStr = 'left:100%;\n\t  top:50%;';
        break;
      default:
        break;
    }
    return tmpStr;
  };
  generateCode() {
    const { position, size, borderColor, bgColor, borderWidth } = this.state;
    const posCode = this.getPosCode(position);
    console.log(posCode);

    const beforeBorderKey = `${
      position == 'top'
        ? 'bottom'
        : position == 'bottom'
        ? 'top'
        : position == 'left'
        ? 'right'
        : position == 'right'
        ? 'left'
        : ''
    }`;

    const beforeMarginKey = `${position == 'top' || position == 'bottom' ? 'left' : 'top'}`;
    const MarginVal = parseInt(size, 10) + Math.round(borderWidth * Math.sqrt(2));

    const code = `
    .arrow_box {
      position: relative;
      background: ${bgColor};
      border: ${borderWidth}px solid ${borderColor};
    }
    .arrow_box:after, .arrow_box:before {
      ${posCode}
      border: solid transparent;
      content: " ";
      height: 0;
      width: 0;
      position: absolute;
      pointer-events: none;
    }

    .arrow_box:after {
      border-color: transparent;
      border-${beforeBorderKey}-color: ${bgColor};
      border-width: ${size}px;
      margin-${beforeMarginKey}: -${size}px;
    }
    .arrow_box:before {
      border-color: transparent;
      border-${beforeBorderKey}-color: ${borderColor};
      border-width: ${MarginVal}px;
      margin-${beforeMarginKey}: -${MarginVal}px;
    }
`;
    this.setState({
      cssCode: code,
    });
  }
  changeHandler = (type, val) => {
    console.log(type, val);
    this.setState(
      {
        [type]: val,
      },
      () => {
        this.generateCode();
      }
    );
  };
  render() {
    const { cssCode, ...settings } = this.state;
    return (
      <Suspense fallback={<Loading />}>
        <Container>
          <hgroup>
            <h1>CSS arrow generator</h1>
            <h2>
              Inspired by
              <a href="//www.cssarrowplease.com/">css arrow</a>(Rewrite with React!)
            </h2>
          </hgroup>
          <div className="mainWrapper">
            <div className="left">
              <Showup cssArrowCode={cssCode} />
              <Dashboard {...settings} changeHandler={this.changeHandler} />
            </div>
            <div className="right">
              <Code cssCode={cssCode} />
            </div>
          </div>
        </Container>
        <Footer />
      </Suspense>
    );
  }
}
