import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Hero2 from "./components/main/Hero2.tsx";
import Loader from "./components/main/Loader.tsx";
import LandingPage from "./landingPage.tsx";
import Events from "./components/main/Events.tsx";
import AboutUs from "./components/main/AboutUs.tsx";
import Gallery from "./components/main/Gallery.tsx";
import Blogs from "./components/main/Blogs.tsx";


const router = createBrowserRouter([
	{
		path: "/",
		element: <LandingPage />,
    // children :[{
    //   path: '/',
    //   element: <LandingPage />
    // }
    // ]
	},
  {
    path: "/events",
		element: <Events />,
  },
  {
    path: "/aboutUs",
		element: <AboutUs />,
  },
  {
    path: "/gallery",
		element: <Gallery />,
  },
  {
    path: "/blogs",
		element: <Blogs />,
  }
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
