import {css} from 'emotion'

export const button = css`
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
    cursor: pointer;
    box-shadow: 2px 2px 2px #828282;
    transition: background-color .12s ease,
      box-shadow .12s ease;
  }
`;

export const acceptVariant = css`
  background-color: #27AE60;
  color: #fff;
`;


