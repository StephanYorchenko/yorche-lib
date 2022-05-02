import {StyledGroup, StyledRow} from "./circle-checkbox.style";
import {ICircleCheckboxProps} from "./interface";
import {CircleCheckboxItem} from "./circle-checkbox-item";
import React from "react";

export function CircleCheckbox<T extends string>({options}: ICircleCheckboxProps<T>){
    return (
        <StyledGroup>
            {
                options?.map(
                    value => (
                        <StyledRow>
                            <CircleCheckboxItem {...value}/>
                        </StyledRow>
                    )
                )
            }
        </StyledGroup>
    )
}