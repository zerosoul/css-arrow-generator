import React from 'react';
import styled from 'styled-components';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { twilight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import CopyButton from './partial/CopyButton';

const Container = styled.div`
  position: relative;
`;

export default class Code extends React.PureComponent {
  render() {
    return (
      <Container>
        <CopyButton cssCode={this.props.cssCode} />
        <SyntaxHighlighter language="css" style={twilight}>
          {this.props.cssCode}
        </SyntaxHighlighter>
      </Container>
    );
  }
}
