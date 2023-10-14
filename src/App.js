import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Landing from "./pages/Landing";
import Vision from "./pages/Vision";
import Contact from "./pages/Contact";
import Enroll from "./pages/Enroll";
import PageNotFound from "./pages/404";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Governors from "./pages/Governors";
import Staffs from "./pages/Staffs";
import Policy from "./pages/Policy";
import Curriculum from "./pages/Curriculum";
import Special from "./pages/Special";
import HomeTutor from "./pages/HomeTraining";
import Admission from "./pages/Admission";
import SchoolKit from "./pages/SchoolKit";
import Activities from "./pages/Activities";
import PDF from "./pages/PDF";
import Gallery from "./pages/Gallery";
import Events from "./pages/Events";
import News from "./pages/News";

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
      path: "/vision",
      element: <Vision />,
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
      path: "/governors",
      element: <Governors />,
    },
    {
      path: "/staffs",
      element: <Staffs />,
    },
    {
      path: "/policy",
      element: <Policy />,
    },
    {
      path: "/curriculum",
      element: <Curriculum />,
    },
    {
      path: "/special-education",
      element: <Special />,
    },
    {
      path: "/home-tutoring",
      element: <HomeTutor />,
    },
    {
      path: "/admission",
      element: <Admission />,
    },
    {
      path: "/school-kit",
      element: <SchoolKit />,
    },
    {
      path: "/activities",
      element: <Activities />,
    },
    {
      path: "/school-pdfs",
      element: <PDF />,
    },
    {
      path: "/gallery",
      element: <Gallery />,
    },
    {
      path: "/events",
      element: <Events />,
    },
    {
      path: "/news",
      element: <News />,
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
