/**
 *controller for the shopping list application
 */
class Controller {
  constructor(){
    console.log('Controller running!');

    /** @provate {!Model} Application model */
    this.model_ = new Model(this);
  }
}