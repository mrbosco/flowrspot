export enum ButtonSizes {
  SMALL = 'small',
  LARGE = 'large',
}

export interface ButtonProps {
  children: React.ReactNode;
  size?: ButtonSizes;
  rounded?: boolean;
  disabled?: boolean;
  hovered?: boolean;
  onClick?: () => void;
  className?: string;
}
