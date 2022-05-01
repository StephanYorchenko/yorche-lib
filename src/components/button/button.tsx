import {StyledButton} from "./button.style";
import {ColorsEnum} from "../colors";

export interface IButtonProps {
  text: string;
  icon?: JSX.Element;
  color?: ColorsEnum
}

export const Button = ({text, icon, color=ColorsEnum.Blue}: IButtonProps) => {
  return (
    <StyledButton color={color}>{text}{icon}</StyledButton>
  )
};
