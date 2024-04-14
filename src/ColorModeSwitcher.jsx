// import React from "react";
// import { useColorMode, useColorModeValue, IconButton } from "@chakra-ui/react";
// import { FaMoon, FaSun } from "react-icons/fa";

// const ColorModeSwitcher = (props) => {
//   const { toggleColorMode } = useColorMode();
//   const SwitchIcon = useColorModeValue(FaMoon, FaSun);

//   return (
//     <IconButton
//       variant="ghost"
//       color="none"
//       pos={"fixed"}
//       top={"4"}
//       right={"1"}
//       zIndex={"overlay"}
//       onClick={toggleColorMode}
//       icon={<SwitchIcon />}
//       {...props}
//     />
//   );
// };

// export default ColorModeSwitcher;

import React from "react";
import { useColorMode, useColorModeValue, IconButton } from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";

const ColorModeSwitcher = (props) => {
  const { toggleColorMode } = useColorMode();
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);
  const bgColor = useColorModeValue("white", "#212121"); // Set background color

  return (
    <>
      <IconButton
        variant="ghost"
        color="none"
        pos={"fixed"}
        top={"4"}
        right={"1"}
        zIndex={"overlay"}
        onClick={toggleColorMode}
        icon={<SwitchIcon />}
        {...props}
      />
      <style jsx global>
        {`
          body {
            background-color: ${bgColor};
          }
        `}
      </style>
    </>
  );
};

export default ColorModeSwitcher;
