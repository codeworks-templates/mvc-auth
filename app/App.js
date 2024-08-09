import { AuthController } from './controllers/AuthController.js';
import { router } from './router-config.js';

class App {

  AuthController = new AuthController()
  
  constructor() {
    if(USE_ROUTER){
      router = router
      this.router.init(app)
    }
  }
}


const app = new App()
// @ts-ignore
window.app = app
