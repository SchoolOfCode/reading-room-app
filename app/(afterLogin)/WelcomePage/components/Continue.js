// Message inviting the user to continue their reading

"use client";

import { Button, Text } from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js";
import styles from "../welcomePage.module.css";

export default function Continue() {
  return (
    <>
      <pageWrapper>
        <Text mb={"-45px"} as="h3" fontSize="2xl" fontWeight="900">
          {`Grab your favourite book\nand let's dive into its world!`}
        </Text>
      </pageWrapper>
    </>
  );
}
