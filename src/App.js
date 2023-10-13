import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Landing from "./pages/Landing";
import More from "./pages/More";
import Contact from "./pages/Contact";
import Enroll from "./pages/Enroll";
import Pay from "./pages/Pay";
import PageNotFound from "./pages/404";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

let theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#C70039",
    },
    secondary: {
      main: "#fff",
    },
  },
});

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Landing />,
    },
    {
      path: "/more",
      element: <More />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
    {
      path: "/enroll",
      element: <Enroll />,
    },
    {
      path: "/pay",
      element: <Pay />,
    },
    {
      path: "*",
      element: <PageNotFound />,
    },
  ]);
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Nav />
        <RouterProvider router={router} />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
