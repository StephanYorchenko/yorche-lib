import {css} from 'emotion'
import {ColorsEnum} from "../colors";

export const button = css`
  font-family: 'Anonymous Pro', monospace;
  font-size: 14px;
  display: inline-flex;
  margin: 0;
  align-items: center;
  padding: 7px 14px;
  outline: none;
  box-shadow: inset 0 0 0 0 #c4c4c4, inset 0 0 0 0 #fff;
  border: 2px solid transparent;
  transition: background-color .4s ease, box-shadow .4s ease;
  border-radius: 15px;
  height: 31px;
  box-sizing: border-box;
  &:active{
    transition: background-color .12s ease, box-shadow .12s ease;
  }
  &:hover{
    box-shadow: 2px 2px 2px #828282;
    transition: background-color .12s ease,
      box-shadow .12s ease;
  }
`;

export const acceptVariant = css`
  background-color: ${ColorsEnum.Accept};
  color: #fff;
`;

export const rejectVariant = css`
  background-color: ${ColorsEnum.Reject};
  color: #fff;
`;

export const defaultVariant = css`
  background-color: ${ColorsEnum.GrayDark};
  color: #fff;
`;

export const crossWrapper = css`
  height: 15px;
  display: inline-flex;
  align-items: center;
  margin-left: 13px;
  &:hover{
    cursor: pointer;
  }
`;

export const accessoryRightWrapper = css`
  height: 15px;
  display: inline-flex;
  align-items: center;
`;


