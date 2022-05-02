import styled from "@emotion/styled/macro";
import {ColorsEnum} from "../colors";

export const StyledCircle = styled.div<{text: string, checkedColor: ColorsEnum}>`
  position: relative;
  height: 120px;
  margin-bottom: 10px;
  margin-right: 100px;

  .circle-checkbox__item{
    visibility: hidden;
  }
  .circle-checkbox__label {
    position: absolute;
    top: 0;
    left: 0;
    border: 1px solid #c4c4c4;
    border-radius: 50%;
    background-color: #fff;
    cursor: pointer;
    height: 100px;
    width: 100px;
    text-align: center;
    
    >svg{
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    
  }
  
  .circle-checkbox__item:checked + label {
    background-color: ${(props) => props.checkedColor};
    color: white;
    transition: all .2s ease;
    border: 1px solid ${(props) => props.checkedColor};
  }

  .circle-checkbox__item:checked:hover + label {
    background-color: ${(props) => props.checkedColor};
    color: white;
    transition: all .2s ease;
    border: 1px solid ${(props) => props.checkedColor};
  }

  .circle-checkbox__item:hover + label {
    transform: scale(1.03);
    box-shadow: 0 3px 2px 2px lightgray;
    transition: all .2s ease;
  }
`;

export const StyledGroup = styled.ul`
  padding-inline-start: 0;
  margin-top: 7.5%;
  margin-bottom: 5%;
  display: flex;
  flex-wrap: wrap;
`;

export const StyledRow = styled.li`
  list-style-type: none;
`;