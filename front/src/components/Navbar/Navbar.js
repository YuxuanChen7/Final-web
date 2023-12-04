import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";

//Reference: https://mui.com/material-ui/react-app-bar/

function Navbar() {
  return (
    <AppBar
      position="static"
      style={{ marginTop: "200px" }}
      sx={{ bgcolor: "black" }}
    >
      <Container maxWidth="x1">
        <Toolbar disableGutters>
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
              sx={{
                color: "white",
                ":hover": { bgcolor: "grey", color: "white" },
              }}
            >
              Home
            </Button>
            <Button
              sx={{
                color: "white",
                ":hover": { bgcolor: "grey", color: "white" },
              }}
            >
              Search
            </Button>
            <Button
              sx={{
                color: "white",
                ":hover": { bgcolor: "grey", color: "white" },
              }}
            >
              Result
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
