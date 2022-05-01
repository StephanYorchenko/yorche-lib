import {IChipProps} from "./interface";
import * as style from "./chip.style";
import { cx } from 'emotion';
import React, {SyntheticEvent, useCallback} from "react";
import {Cross} from "../icon";


export const Chip = React.memo<IChipProps>(
  ({
    accessoryRight,
    text,
    variant="default",
    onClose,
   }: IChipProps) => {
    const onCrossClick = useCallback(
      (event: SyntheticEvent) => {
        event.stopPropagation();
        onClose?.(event);
      },
      [onClose]
    );

    return (
      <button
        className={cx(style.button,{
          [style.acceptVariant]: variant === 'accept',
          [style.rejectVariant]: variant === 'reject',
          [style.defaultVariant]: variant === 'default'
        })}
      >
        {text}
        {accessoryRight &&
          <span className={style.accessoryRightWrapper}>
              {accessoryRight}
          </span>
        }
        {onClose && (
          <span
            className={style.crossWrapper}
            onClick={onCrossClick}
          >
            <Cross/>
          </span>
        )}
      </button>
    );
  }
)
