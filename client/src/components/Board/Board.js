import * as React from "react";
import "./Board.css";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

export default function SimpleContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container disableGutters maxWidth={false}>
        <Box className="container" sx={{ bgcolor: "#008080", height: "100vh" }}>
          <Box
            className="border"
            sx={{
              width: 1200,
              height: 600,
              backgroundColor: "#008080",
            }}
          >
            <div className="main">
              <Box
                sx={{
                  width: 290,
                  height: 195,
                  backgroundColor: "primary.dark",
                  "&:hover": {
                    backgroundColor: "primary.main",
                    opacity: [0.9, 0.8, 0.7],
                  },
                }}
              />
            </div>
            <div className="sidebar">
              <Box
                sx={{
                  width: 290,
                  height: 195,
                  backgroundColor: "primary.dark",
                  "&:hover": {
                    backgroundColor: "primary.main",
                    opacity: [0.9, 0.8, 0.7],
                  },
                }}
              />
            </div>
          </Box>
        </Box>
      </Container>
    </React.Fragment>
  );
}
