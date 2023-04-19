import { AuthController } from './controllers/AuthController.js';
import { ValuesController } from './controllers/ValuesController.js';

class App {
  authController = new AuthController();
  valuesController = new ValuesController();
}

// @ts-ignore
window.app = new App()
