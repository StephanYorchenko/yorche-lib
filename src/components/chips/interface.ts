type Variants = "accept" | "reject" | "default"

export interface IChipProps {
  accessoryRight?: JSX.Element;
  text?: string | JSX.Element;
  variant?: Variants;
}
