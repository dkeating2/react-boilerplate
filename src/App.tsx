import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";

import routes from "./routes.tsx";

const router = createBrowserRouter(routes);

function App() {
  return (
    <ThemeProvider theme={{}}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
