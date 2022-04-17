import {IChipProps} from "./interface";
import * as style from "./chip.style";
import { cx } from 'emotion';
import React from "react";


export const Chip = React.memo<IChipProps>(
  ({
    accessoryRight,
    text,
    variant="default",
   }: IChipProps) => {
    return (
      <button
        className={cx(style.button,{
          [style.acceptVariant]: variant === 'default',
        })}
      >
        {text}
      </button>
    );
  }
)
