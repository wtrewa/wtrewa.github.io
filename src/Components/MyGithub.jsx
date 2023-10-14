import { Box, Center, Heading } from "@chakra-ui/react";
import React from "react";
import GitHubCalendar from "react-github-calendar";

export default function MyGithub() {
  return (
    <Box textAlign="center" position="relative">
      <Center>
        <Heading color="#B0BEC5" fontSize={["20px", "25px", "30px", "35px"]}>
          GITHUB CALENDER
        </Heading>
      </Center>
      <Box>
        <Center m={["20px", "30px", "50px"]} color="blue.400">
          <GitHubCalendar
            username="wtrewa"
            hideTotalCount={"false"}
            color={"blue.400"}
          />
        </Center>
      </Box>
    </Box>
  );
}