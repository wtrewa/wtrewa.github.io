


import CV from '../Resume/CV.pdf'
import { CloseIcon, DownloadIcon, HamburgerIcon, SearchIcon } from '@chakra-ui/icons'
import { Box, Button, Flex, HStack, IconButton, Link, useDisclosure ,Stack, Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  VStack, } from '@chakra-ui/react'
import React, { useRef } from 'react'

const Links = [
  {title:"About",href:'#about', class:"nav-link about"},
  {title:"Home",href:'#home',  class:"nav-link home"},
  {title:"Skills",href:'#skills', class:"nav-link skills"},
  {title:"Projects",href:'#projects', class:"nav-link projects"},
  {title:"Contact",href:'#contact',  class:"nav-link contact"},
]
const Navbar = () => {
  const {isOpen,onOpen,onClose} = useDisclosure()
  const btnRef = useRef()
  return (
    
   <Box id='nav-menu'
   position={'sticky'}
   top={0}
   zIndex={10}
   >
    <Box
    bg={'radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%)'}
    h={'75px'}
    w={'100%'}
    border={'#fc466b'}
    
     >
    <Flex 
      alignItems={'right'}
      justifyContent={['right','right','right']}
      
     >
      <IconButton marginRight={'4px'}  aria-label='HamburgerIcon' mt={4}  display={{md:'none'}}  icon={ isOpen?<CloseIcon/>: <HamburgerIcon bg={"white"}    />}
      onClick={isOpen?onClose:onOpen} />
                 <HStack spacing={8} alignItems={"center"}>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              { Links.map((el)=>
           (<Link key={el.class} fontSize={'20px'} fontWeight={500} lineHeight={'75px'} px={15} className={el.class} href={el.href} color={"#D5FFD0"} textDecoration={'none'}>
           {el.title}
          </Link>)
        )}
              
              <Box className="nav-link resume">
                <Button
                  fontSize={"20px"}
                  fontWeight={500}
                  variant="ghost"
                  arial-label="RESUME"
                  _hover={{
                    color: "white",
                    bg: "#40F8FF",
                  }}
                  colorScheme="#0C356A"
                  id="resume-button-1"
                  
                >
                  <button
              id="resume-button-1"
              onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/1CqsXPHjrSEQzpjKRHFz6VzudQgE3E4Cf/view"
                )
              }
            >
              <a
                href={CV}
                target="_blank"
                download="Saurabh-Pandey-Resume"
                id="resume-link-1"
                className="nav-link resume"
                style={{display:"flex" , flexDirection:"row"}}
              >
                Resume
                <span>
                  <DownloadIcon color={"white"}/>
                </span>
              </a>
            </button>
                </Button>
              </Box>
            </HStack>
          </HStack>
          <Drawer
          
          display={{md:'none'}}

        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent bg={"#0C356A"}>
          <DrawerCloseButton />
          <DrawerBody mt={20}>
            <VStack>
            {Links.map((el)=><Link key={el.class} fontSize={'20px'} color={`#D5FFD0`} id={el.id} href={el.href} onClick={onClose}>
             {el.title}
            </Link>)}
            <Box className="nav-link resume">
                <Button
                  fontSize={"20px"}
                  fontWeight={500}
                  variant="ghost"
                  arial-label="RESUME"
                  _hover={{
                    color: "white",
                    bg: "#40F8FF",
                  }}
                  color="#40F8FF"
                  id="resume-button-1"
                  
                >
                <a href='https://drive.google.com/file/d/1CqsXPHjrSEQzpjKRHFz6VzudQgE3E4Cf/view'>Resume</a>
                </Button>
              </Box>
            </VStack>
          </DrawerBody>
          <DrawerFooter>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
          
    </Flex>
    </Box>
   </Box>
    
  )
}

export default Navbar


