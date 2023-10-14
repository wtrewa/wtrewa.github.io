

import React from 'react'

import {
  Box,
  Center,
  Heading,
  Image,
  Grid,
  GridItem,
  Text,
  Flex,
  Link,
  Button,
  HStack,
} from "@chakra-ui/react";

// import Doctor from "../images/doctor.png";
 

import sandstorm from '../Images/sandstorm.png'
import lyfcare from '../Images/lyfcare.png'
import justserve from '../Images/justserve.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLifeRing } from "@fortawesome/free-regular-svg-icons";
import Student from "../Images/Student.jpg"
const projectsArray = [
  
  // {
    // logo: Doctor,
  //   title: "Healthcare Department",
  //   github:
  //     "https://github.com/ShivaSingh17121997/violent-hope-9407-",
  //   live_Link: "curious-liger-54058d.netlify.app/",
  //   description:
  //     "Camera lelo is a leading e-commerce website that specializes in providing high-quality photography and video equipment to professionals, enthusiasts, and hobbyists alike. The website offers a wide range of products, including cameras, lenses, tripods, lighting equipment, accessories, and more.",
  //   techStack: [
  //     {
  //       image:
  //         "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
  //       link: "https://react.dev",
  //     },
  //     {
  //       image:
  //         "https://dgdeepon.github.io/static/media/chakra-ui_title2-400x400-removebg-preview.fc0f93596462cd01a157.png",
  //       link: "https://chakra-ui.com",
  //     },
  //     {
  //       image:
  //         "https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg",
  //       link: "https://redux.js.org",
  //     },
  //     {
  //       image:
  //         "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  //       link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  //     },
  //   ],
  // },
  
  {
    logo: lyfcare,
    title: "Lyf Care",
    github: "https://github.com/wtrewa/wide-power-8646",
    live_Link: "https://shiny-bublanina-82c10d.netlify.app/",
    description:
      "LYFCARE is a E-commerce website which sell Body and Cusmetic reletaed products. This website build upon useing HTML CSS Javascript and React.",

    techStack: [
      {
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
        link: "https://react.dev",
      },
      {
        image:
          "https://dgdeepon.github.io/static/media/chakra-ui_title2-400x400-removebg-preview.fc0f93596462cd01a157.png",
        link: "https://chakra-ui.com",
      },
      {
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      },
    ],
  },
  {
    logo: sandstorm,
    title: "Sand Storm",
    github: "https://github.com/GRAviTY-GAGAN/Sandstorm",
    live_Link: "https://sandstorm-gsvr.netlify.app/",
    description:
      "Sandstorm is a clone of Nordstorm. Nordstrom is a high-end American department store chain that sells clothing, shoes, accessories, and beauty products for women, men, and children.",
    techStack: [
      {
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
      },
      {
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg",
        link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
      },
      {
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      },
    ],
  },
  {
    logo: justserve,
    title: "Just Serve",
    github: "https://github.com/AnshKathpal/dizzy-vase-3091",
    live_Link: "justserve-anshkathpal.vercel.app/",
    description:
      `Our job listings include opportunities spanning a variety of
      nonprofits, social-impact businesses, and corporate social
      responsibility (CSR) initiatives   `,
    techStack: [
      {
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
        link: "https://react.dev",
      },
      {
        image:
          "https://dgdeepon.github.io/static/media/chakra-ui_title2-400x400-removebg-preview.fc0f93596462cd01a157.png",
        link: "https://chakra-ui.com",
      },
      {
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg",
        link: "https://redux.js.org",
      },
      {
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      },
    ],
  },
];
export default function Projects() {
  return (
    <Box
      py={["0px", "60px", "80px"]}
      id="projects"
      width={"80%"}
      m={"auto"}
      position="relative"
    >
      <Box pb="30px">
        <Center fontSize={40} color="yellow" position="relative">
          <Text fontWeight={600}>Projects</Text>
        </Center>
      </Box>
      <Box>
        <Grid
          gridTemplateColumns={[
            "repeat(1,1fr)",
            "repeat(1,1fr)",
            "repeat(2,1fr)",
          ]}
          gap={[0, 5, 10]}
        >
          {projectsArray.map(
            ({ logo, title, techStack, description, github, live_Link }) => {
              return (
                <GridItem
                  key={Math.random()}
                  overflow={"hidden"}
                  className="project-card"
                >
                  <Link href={live_Link} target="_blank">
                    <Image src={logo} w="100%" h="auto" objectFit={"cover"} />
                  </Link>
                  <Heading
                    fontSize={["18px", "20px", "22px", "25px"]}
                    className="project-title"
                    display={"inline-block"}
                    color="#B0BEC5"
                    borderBottom={"4px solid #B0BEC5"}
                    letterSpacing={1}
                    paddingTop={[2, 3, 4, 5]}
                  >
                    {title}
                  </Heading>
                  <Text
                    paddingTop={[2, 3, 4, 5]}
                    color="#B0BEC5"
                    className="project-description"
                    fontSize={["14px", "15px", "16px", "17px"]}
                    align="left"
                  >
                    {description}
                  </Text>
                  <Flex gap={2} className="project-tech-stack">
                    {techStack.map(({ image, link }) => {
                      return (
                        <Box
                          key={Math.random()}
                          py={2}
                          width={"40px"}
                          transition="transform 0.4s"
                        >
                          <Link href={link} target="_blank">
                            <Image width={"100%"} src={image} alt="image" />
                          </Link>
                        </Box>
                      );
                    })}
                  </Flex>
                  <Box>
                    <HStack pb={3}>
                      <Link
                        href={github}
                        target="_blank"
                        className="project-github-link"
                      >
                        <Button
                          size={["sm", "sm", "md", "md"]}
                          leftIcon={<FontAwesomeIcon icon={faGithub} />}
                        >
                          Github
                        </Button>
                      </Link>
                      <Link
                        href={live_Link}
                        target="_blank"
                        className="project-deployed-link"
                      >
                        <Button
                          size={["sm", "sm", "md", "md"]}
                          colorScheme="twitter"
                          leftIcon={<FontAwesomeIcon icon={faLifeRing} />}
                        >
                          Live
                        </Button>
                      </Link>
                    </HStack>
                  </Box>
                </GridItem>
              );
            }
          )}
        </Grid>
        <Box>{/** */}</Box>
      </Box>
    </Box>
  );
}