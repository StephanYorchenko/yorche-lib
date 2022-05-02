import {StyledCircle} from "./circle-checkbox.style";
import {ICircleCheckboxItemProps} from "./interface";

export const CircleCheckboxItem = ({
   text, icon, color, ...rest
}: ICircleCheckboxItemProps) => {
    const id = "checkbox" + Math.random().toString(16).slice(2);
    return (
        <StyledCircle text={text} checkedColor={color}>
            <input type="checkbox" id={id} className="circle-checkbox__item" {...rest}/>
            <label className="circle-checkbox__label" htmlFor={id}>
                {icon}
            </label>
        </StyledCircle>
    )
}