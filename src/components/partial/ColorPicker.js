import React from 'react';
import styled from 'styled-components';
import { SketchPicker } from 'react-color';
import { invertColor } from '../../utils';

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: flex-start;
  .popover {
    position: absolute;
    z-index: 2;
    top: 2.2rem;
    right: 0;
    .cover {
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
    }
  }
`;
const ColorPicked = styled.input`
  border: 1px solid #777;
  padding: 0.2rem 0.4rem;
  width: 5rem;
  text-align: center;
  color: ${({ fontColor }) => `${fontColor}`};
  background: ${({ color }) => `${color}`};
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(255, 255, 255, 0.3);
  border-radius: 4px;
`;
class ColorPicker extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pickerVisible: false,
      color: props.color,
      inputFontColor: '#000',
    };
  }
  componentDidMount() {
    document.activeElement.blur();
  }
  handleClick = () => {
    this.setState({ pickerVisible: !this.state.pickerVisible });
  };

  handleClose = () => {
    this.setState({ pickerVisible: false });
  };

  handleChange = color => {
    // console.log(color);
    const inputFontColor = invertColor(color.hex, true);
    console.log(inputFontColor);

    this.setState({ color: color.hex, inputFontColor }, this.props.changeHandler(this.props.type, color.hex));
  };

  render() {
    const { color } = this.props;
    return (
      <Container className="colorpicker">
        <ColorPicked
          color={color}
          fontColor={this.state.inputFontColor}
          value={color}
          onClick={this.handleClick}
          onChange={this.handleChange}
        />
        {this.state.pickerVisible ? (
          <div className="popover">
            <div className="cover" onClick={this.handleClose} />
            <SketchPicker color={this.state.color} onChange={this.handleChange} />
          </div>
        ) : null}
      </Container>
    );
  }
}

export default ColorPicker;
