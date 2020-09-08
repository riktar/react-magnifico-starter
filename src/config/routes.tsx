import React from "react";
import Home from "../pages/home";
import About from "../pages/about";
import Admin from "../pages/admin";

const routes = [
  {
    path: '/',
    component: <Home />
  },
  {
    path: '/about',
    component: <About />
  },
  {
    path: '/admin',
    component: <Admin />
  }
]

export default routes
