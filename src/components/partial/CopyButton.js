import React, { Component } from 'react';
import styled from 'styled-components';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Button from '../Button';

const Tip = styled.div`
  position: absolute;
  top: 3.5rem;
  right: 1rem;
  padding: 0.5rem;
  color: #000;
  background: #fff;
`;
export default class CopyButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      copied: false,
    };
    // console.log("init code");
  }
  componentDidMount() {
    this.forceUpdate();
  }
  shouldComponentUpdate(nextProps, nextState) {
    return nextState.copied !== this.state.copied;
  }
  copyHandler() {
    // alert('已复制到剪切板！');
    setTimeout(() => {
      this.setState({ copied: false });
    }, 1500);
  }
  render() {
    return (
      <>
        <CopyToClipboard text={this.props.cssCode} onCopy={() => this.setState({ copied: true })}>
          <Button style={{ position: 'absolute', top: '1rem', right: '1rem' }}>COPY</Button>
        </CopyToClipboard>
        {this.state.copied && this.copyHandler()}
        {this.state.copied && <Tip>Copied!</Tip>}
      </>
    );
  }
}
