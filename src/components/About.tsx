import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

export function About() {
  return (
    <>
      <Typography sx={{ mt: 6, mb: 3 }} color="text.secondary">
        This is a sample project created with{" "}
        <Link href="https://vitejs.dev/">Vite.js</Link> using{" "}
        <Link href="https://reactjs.org/">React.JS</Link> with{" "}
        <Link href="https://www.typescriptlang.org/">Typescript</Link> and{" "}
        <Link href="https://mui.com/">MUI v5.x</Link>.
      </Typography>
    </>
  );
}
