export interface PropsHeader {
  session: Boolean;
  open?: boolean;
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface navItemsProps {
  name: string;
  link: string;
}
