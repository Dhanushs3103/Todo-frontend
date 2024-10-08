import React from 'react'
import { Button, ButtonGroup } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function NotFoundPage() {
  const navigate = useNavigate();
  return (
    <>
    <div style={{display:"flex",justifyContent:"center",alignItems:"center",marginTop:"100px"}}>
      <img
        src="https://cdn.dribbble.com/users/718859/screenshots/3267029/jisunpark_404-error.gif"
        alt="404Page_not_found"
        style={{minWidth:"350px",maxWidth:"500px",borderRadius:"50px" }}
      />
    </div>
   <div style={{display:"flex",justifyContent:"center",alignItems:"center",marginTop:"10px"}}>
    <Button colorScheme='teal' size='lg' onClick={() => navigate("/")}>
      Home Page
    </Button>
   </div>
    </>
  );
}
