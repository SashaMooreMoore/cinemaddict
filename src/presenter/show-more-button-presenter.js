import ShowMoreButtonView from '../view/show-more-button';
import { render } from '../framework/render';

export default class ShowMoreButtonPresenter{
  #container = null;
  #onClick = null;
  #button = null;
  #isVisible = null;
  #currentItemsShown = 0;
  #totalItems = 0;

  constructor({container, onClick}){
    this.#container = container;
    this.#onClick = onClick;
    this.#button = new ShowMoreButtonView();
    this.#isVisible = true;
  }

  init(){
    render(this.#button, this.#container);
    this.#button.setClickHandler(() => {
      this.#onClick();
      this.#checkVisibility();
    });
    this.#checkVisibility();
  }

  updateState = (totalItems, currentItemsShown) => {
    this.#totalItems = totalItems;
    this.#currentItemsShown = currentItemsShown;
    this.#checkVisibility();
  };

  #checkVisibility = () =>{
    if(this.#currentItemsShown >= this.#totalItems || !this.#isVisible){
      this.#hide();
    } else{
      this.#show();
    }
  };

  #hide = () => {
    if(this.#button.element){
      this.#button.element.style.display = 'none';
      this.#isVisible = false;
    }
  };

  #show = () => {
    if(!this.#isVisible && this.#button.element){
      this.#button.element.style.display = '';
      this.#isVisible = true;
    }
  };
}
