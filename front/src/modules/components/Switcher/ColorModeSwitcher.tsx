import {
  useColorMode,
  useColorModeValue,
  IconButton,
  IconButtonProps,
} from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";

interface ColorModeSwitcherType {
  bg: string;
}

export const ColorModeSwitcher = (props: ColorModeSwitcherType) => {
  const { toggleColorMode } = useColorMode();
  // const text = useColorModeValue("dark", "light");
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);

  return (
    <IconButton
      size="md"
      fontSize="lg"
      // aria-label={`Switch to ${text} mode`}
      variant="ghost"
      color="#f7941e"
      marginLeft="2"
      onClick={toggleColorMode}
      icon={<SwitchIcon />}
      {...(props as IconButtonProps)}
    />
  );
};
