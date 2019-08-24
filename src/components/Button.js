import styled from 'styled-components';

const Button = styled.button`
  color: #fff;
  cursor:pointer;
  background-color: #5cb85c;
  border-color: #4cae4c;
  padding: 0.2rem 0.4rem;
  margin: 0 1rem;
  border-radius: 0.5rem;
  border-style: none;
  ${({ warning }) => warning && `background-color: #f0ad4e;border-color: #eea236;`};
  :disabled {
    background: #ccc;
    border-color: #aaa;
    color: #999;
    cursor: not-allowed;
  }
`;
export default Button;
