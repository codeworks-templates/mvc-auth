import { AboutController } from "./controllersss/AboutController.js";
import { HomeController } from "./controllersss/HomeController.js";

export const router = [
  {
    path: '',
    controller: HomeController
  },
  {
    path: '#/about',
    controller: AboutController
  }
]