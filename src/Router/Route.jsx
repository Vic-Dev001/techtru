import Home from "../Pages/Home";
import Work from "../Pages/Works";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Services from "../Pages/Services";
import ErrorPage from "../Pages/ErrorPage";

import App from "../App";

import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />
  },
  {
    path:"/home",
    element: <Home />
    
  },
  {
    path:"/works",
    element:<Work />
  },
  {
    path:"/about-us",
    element: <About />
  },
  {
    path:"/contact-us",
    element: <Contact/>
  },
  {
    path:"/services",
    element:<Services/>

  }



]);

export default router;
