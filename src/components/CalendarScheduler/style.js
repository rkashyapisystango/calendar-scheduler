import styled from 'styled-components';

export const EventIconWrp = styled.div`
  i {
    cursor: pointer;
    font-size: 16px;
    border-radius: 3px;
    border: 2px solid palevioletred;
    margin: 2px;
    &:hover {
      background-color: #2c3e50;
      color: white;
    }
  }
`;

export const OverLayDesign = styled.div`
  color: white;
  background: #0d1217;
  button {
    height: 60px;
  }
`;
