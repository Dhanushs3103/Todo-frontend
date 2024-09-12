//packages
import { Box, Container,Text,Button,Image } from "@chakra-ui/react";

//Local imports
import Navbar from "../components/Navbar";
import "../App.css"

function Home() {
  return (
    <>
      <Navbar />
      <Container id="heroContainer" maxW="container.xxl" padding="10px">
        {/* left side */}
        <Box pl={5} h={400}>
          <Text id="heroText">
            Todooo.... <br />
            Done Smoothly.
          </Text>
          {/* button */}
          <Button
            id="heroButton"
            colorScheme="blue"
            fontSize={"20px"}
            mt={3}
            _hover={{ bg: "blue.600" }}
          >
            Get Started
          </Button>
        </Box>
        {/* right side */}
        <Box w={500} h={500}>
          <Image
            src="https://as2.ftcdn.net/v2/jpg/04/46/84/17/1000_F_446841746_JivYwv9QDtsXzefEuD8mKo19GSq5kibh.jpg"
            alt="random image"
            id="heroImage"
            
          />
        </Box>
      </Container>
    </>
  );
}

export default Home

