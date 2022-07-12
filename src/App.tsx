import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

// Components
import { About } from "./components/About";
import { Footer } from "./components/Footer";
import { LogoViteJs } from "./components/Logo";

export function App() {
  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          my: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <LogoViteJs />
        <Typography sx={{ mt: 3 }} variant="h5" component="h1" gutterBottom>
          Vite.js + React.JS + TypeScript + MUI v5
        </Typography>
        <About />
        <Footer />
      </Box>
    </Container>
  );
}
