//Packages
import { Box, Image } from "@chakra-ui/react";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

//local imports
import "../App.css";
import { AuthContext } from "../contexts/AuthContextProvider";

function Navbar() {
  let { handleLogout, login } = useContext(AuthContext);
  let navigate = useNavigate();

  return (
    <>
      <Box
        w={{ base: "95%", md: "80%", lg: "70%" }}
        borderRadius={"10px"}
        boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}
        padding={"10px"}
        margin={"auto"}
        mt={2}
        display={"flex"}
        justifyContent={"space-between"}
        id="navbar"
      >
        <Image
          src="https://cdn-icons-png.freepik.com/256/16381/16381781.png?semt=ais_hybrid"
          h={"40px"}
          w={"50px"}
          boxShadow={"sm"}
          borderRadius={"10px"}
          cursor={"pointer"}
          onClick={() => {
            navigate("/");
          }}
        />
        {/* signup, login, and todos */}
        <Box display={"flex"} mr={5} gap={"30px"}>
          <span className="spanNav">
            <Link to={"/todos"}>Todos</Link>
          </span>
          {login === true ? (
            <span className="spanNav" style={{cursor:"pointer"}} onClick={handleLogout}>
              Logout
            </span>
          ) : (
            <>
              <span className="spanNav">
                <Link to={"/login"}>Login</Link>
              </span>
              <span className="spanNav">
                <Link to={"/register"}>SignUp</Link>
              </span>
            </>
          )}
        </Box>
      </Box>
    </>
  );
}

export default Navbar;
