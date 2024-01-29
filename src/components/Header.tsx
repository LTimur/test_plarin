import { Button, Container, Box } from "@mui/material";
import logo from "../assets/got_logo.png";
import { NavLink as RouterNavLink } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <Container
        maxWidth="lg"
        style={{ textAlign: "center", marginBottom: "10px" }}
      >
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          marginBottom="20px"
        >
          <RouterNavLink to="/">
            <img src={logo} alt="Logo" style={{ width: "300px" }} />
          </RouterNavLink>
        </Box>
        <header style={{ display: "flex" }}>
          <Box flexGrow={1}></Box>
          <Button component={RouterNavLink} to={"/"}>
            Home
          </Button>
          <Button component={RouterNavLink} to={"/favorites"}>
            Favorites
          </Button>
        </header>
      </Container>
    </>
  );
};
