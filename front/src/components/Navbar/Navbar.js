import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

//Reference: https://mui.com/material-ui/react-app-bar/

function Navbar() {
  return (
    <AppBar
      position="static"
      style={{ marginTop: "0px" }}
      sx={{ bgcolor: "black" }}
    >
      <Container maxWidth="x1">
        <Toolbar
          disableGutters
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              mr: 2,
              fontFamily: "monospace",
              fontWeight: 650,
              letterSpacing: ".2rem",
              color: "white",
            }}
          >
            Pet Generator
          </Typography>
          <Box>
            <Button
              component={Link}
              to="/"
              sx={{
                color: "white",
                ":hover": { bgcolor: "grey", color: "white" },
              }}
            >
              Home
            </Button>
            <Button
              component={Link}
              to="/search"
              sx={{
                color: "white",
                ":hover": { bgcolor: "grey", color: "white" },
              }}
            >
              Search
            </Button>
            <Button
              component={Link}
              to="/result"
              sx={{
                color: "white",
                ":hover": { bgcolor: "grey", color: "white" },
              }}
            >
              Result
            </Button>
            {/*
            <Button
              component={Link}
              to="/FavoritesList"
              sx={{
                color: "white",
                ":hover": { bgcolor: "grey", color: "white" },
              }}
            >

              Favorites-List
            </Button>
            */}
            <Button
              component={Link}
              to="/AddPet"
              sx={{
                color: "white",
                ":hover": { bgcolor: "grey", color: "white" },
              }}
            >
              Add-Pet
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
