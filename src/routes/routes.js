import { nanoid } from "nanoid";
import { Home } from "../pages/home/home";
import { About } from "../pages/about/about";
import { Shop } from "../pages/shop/shop";
import { SinglePage } from "../pages/single-page/single-page";
export const routes = [
    {
      component: Home,
      id: nanoid(),
    },
    {
      component: About,
      path: "about",
      id: nanoid(),
    },
    {
      component: SinglePage,
      path: "products/single-page/:id",
      id: nanoid(),
    },
    {
      component: Shop,
      path: "shop",
      id: nanoid(),
    },
  ];
  
  
  