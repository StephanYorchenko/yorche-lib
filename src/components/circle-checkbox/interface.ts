import React from "react";
import {jsx} from "@emotion/react";
import JSX = jsx.JSX;
import {ColorsEnum} from "../colors";

export interface ICircleCheckboxItemProps extends React.InputHTMLAttributes<HTMLInputElement>{
    text: string;
    icon: JSX.Element;
    color: ColorsEnum;
}

interface IOption<T>{
    fieldName: T;
    icon: JSX.Element;
    color: ColorsEnum;
    text: string;
}

export interface ICircleCheckboxProps<T extends string> {
    onChange?: VoidFunction;
    options: IOption<T>[];
}