import React from "react";
import {
  Box,
  InputGroup,
  InputLeftElement,
  Input,
  Flex,
  Stack,
  Heading,
  TagLeftIcon,
  Text,
  HStack,
  Center,
  Textarea,
  Image,
  Button,
  Link,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope } from "@fortawesome/free-regular-svg-icons";
import {
  faPhoneVolume,
  faLocationDot,
  faMessage,
} from "@fortawesome/free-solid-svg-icons";

export default function Contact() {
  return (
    <Box id="contact" pb={["20px", "50px", "100px"]}>
      <Center
        fontSize={40}
        color="yellow"
        position="relative"
        textAlign="center"
      >
        <Text fontWeight={600}>Contact</Text>
      </Center>
      <br />
      <br />
      <Center position="relative">
        {" "}
        <Heading color="#B0BEC5" mb={3}>
          Reach Out to me!
        </Heading>
      </Center>
      <Flex
        justifyContent={"center"}
        gap={20}
        flexWrap={"wrap"}
        position="relative"
      >
        <Stack fontSize={"20px"} mt={2} spacing={3}>
          <HStack>
            <TagLeftIcon
              boxSize="15px"
              children={<FontAwesomeIcon color="white" icon={faPhoneVolume} />}
            />
            <Text color="white" id="contact-phone">+91- 7974925021</Text>
          </HStack>
          <HStack>
            <TagLeftIcon
              boxSize="15px"
              children={<FontAwesomeIcon color="white" icon={faEnvelope} />}
            />
            <Text id="contact-email" color="white">psaurabh574@gmail.com</Text>
          </HStack>
          <HStack>
            <TagLeftIcon
              boxSize="15px"
              children={<FontAwesomeIcon  color="white" icon={faLocationDot} />}
            />
            <Text color="white">Rewa, Madhya Pradesh</Text>
          </HStack>
          <HStack spacing={4}>
            <Box width={"30px"} postion="relative">
              <Link id="contact-linkedin" href="https://www.linkedin.com/in/saurabh-pandey-b2ab2b190/">
                <Image
                  width={"100%"}
                  src="https://cdn-icons-png.flaticon.com/512/2504/2504923.png"
                  alt="linkedin"
                />
              </Link>
            </Box>
            <Box width={"30px"}>
              <Link  id="contact-github" href="https://github.com/wtrewa">
                <Image
                  width={"100%"}
                  src="https://cdn-icons-png.flaticon.com/512/270/270798.png"
                  
                />
              </Link>
            </Box>
          </HStack>
        </Stack>
        <Stack spacing={2} width={["85%", "90%", "25%"]}>
          <form action="https://formspree.io/f/maygjrqr" method="POST">
            <InputGroup>
              <InputLeftElement children={<FontAwesomeIcon color="white" icon={faUser} />} />
              <Input
                name="name"
                // border={0}
                border={"1px solid #fff"}
                color="#B0BEC5"
                // borderBottom={"1px solid #fff"}
                placeholder="Name"
                _focus={{ boxShadow: "none" }}
                isRequired
                margin="5px"
              />
            </InputGroup>
            <InputGroup>
              <InputLeftElement
                children={<FontAwesomeIcon color="white" icon={faEnvelope} />}
              />
              <Input
                name="email"
                type="email"
                color="#B0BEC5"
                // border={0}
                // borderBottom={"1px solid #fff"}
                 border={"1px solid #fff"}
                placeholder="E-mail"
                _focus={{ boxShadow: "none" }}
                isRequired
                margin="5px"
              />
            </InputGroup>
            <InputGroup>
              <InputLeftElement
                children={<FontAwesomeIcon color="white" icon={faPhoneVolume} />}
              />
              <Input
                color="#B0BEC5"
                name="number"
                type="number"
                border={"1px solid #fff"}
                // borderBottom={"1px solid #fff"}
                placeholder="Mobile"
                _focus={{ boxShadow: "none" }}
                isRequired
                margin="5px"
              />
            </InputGroup>
            <InputGroup>
              <InputLeftElement
                children={<FontAwesomeIcon color="white" icon={faMessage} />}
              />
              <Textarea
                isRequired
                name="message"
                color="#B0BEC5"
                pl="30px"
                // border={0}
                border={"1px solid #fff"}
                // borderBottom={"1px solid #fff"}
                placeholder="Message"
                _focus={{ boxShadow: "none" }}
                margin="5px"
              />
            </InputGroup>
            <Button
              type="submit"
              width={"100%"}
              mt={2}
              bg={"transparent"}
              _hover={{
                color: "#fff",
                background: "#4299e1",
              }}
            //   color="red"
            colorScheme="blue"
            position="relative"
            >
              Send Message
            </Button>
          </form>
        </Stack>
      </Flex>
    </Box>
  );
}
