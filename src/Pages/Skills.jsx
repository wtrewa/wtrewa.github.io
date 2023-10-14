
import React from "react";
import {
  Grid,
  GridItem,
  Link,
  Image,
  Text,
  Center,
  Box,
} from "@chakra-ui/react";

const skill = [
  {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    title: "HTML",
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg",
    title: "CSS",
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    title: "Javascript",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    icon: "https://cdn.worldvectorlogo.com/logos/react-2.svg",
    title: "React",
    link: "https://react.dev",
  },
  {
    icon: "https://cdn.worldvectorlogo.com/logos/redux.svg",
    title: "Redux",
    link: "https://redux.js.org/",
  },
  {
    icon: "https://cdn.icon-icons.com/icons2/2415/PNG/512/typescript_original_logo_icon_146317.png",
    title: "Typescript",
    link: "https://www.typescriptlang.org/",
  },
  {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain.svg",
    title: "Mongo DB",
    link: "https://www.mongodb.com/",
  },
  {
    icon: "https://www.pixelbird.com.au/wp-content/uploads/2020/02/nodejs-image.png",
    title: "Node.js",
    link: "https://nodejs.org/en",
  },
  {
    icon: "https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg",
    title: "Express",
    link: "https://expressjs.com/",
  },
  {
    icon: "https://dgdeepon.github.io/static/media/chakra-ui_title2-400x400-removebg-preview.fc0f93596462cd01a157.png",
    title: "Chakra UI",
    link: "https://chakra-ui.com/",
  },
  
];

export default function Skills() {
  return (
    <Box py={["0px", "60px", "80px"]} id="skills">
      <Center fontSize={40} color="yellow" position="relative">
        <Text fontWeight={600}>Skills</Text>
      </Center>
      <Grid
        className="skills-card"
        p={["4%", "0%", "0%", "0%"]}
        w={["100%", "80%", "85%", "80%", "70%"]}
        position="relative"
        gridTemplateColumns={[
          "repeat(2,1fr)",
          "repeat(3,1fr)",
          "repeat(4,1fr)",
          "repeat(5,1fr)",
        ]}
        gap={4}
        margin={"auto"}
      >
        {skill.map(({ icon, title, link }) => {
          return (
            <Box>
              <GridItem
                key={Math.random()}
                padding={"35px"}
                overflow="hidden"
                style={{
                  boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                }}
              >
                <Link href={link} target="_blank">
                  <Image
                    margin="auto"
                    className="skills-card-img"
                    src={icon}
                    w="80%"
                    transition="all .1s ease-in-out"
                    _hover={{
                      transform: "scale(1.1)",
                    }}
                    borderRadius="10%"
                  />
                </Link>
                <Text
                  className="skills-card-name"
                  textAlign={"center"}
                  fontSize={["md", "lg", "lg", "xl"]}
                  color="#fff"
                >
                  {title}
                </Text>
              </GridItem>
            </Box>
          );
        })}
      </Grid>
    </Box>
  );
}