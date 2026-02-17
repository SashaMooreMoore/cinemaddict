import AbstractView from '../framework/view/abstract-view.js';
import { SortType } from '../const.js';


const createFiltersTemplate = (activeSortType) => `<ul class="sort">
    <li>
      <a
        href="#"
        class="sort__button ${activeSortType === SortType.DEFAULT ? 'sort__button--active' : ''}"
        data-sort-type=${SortType.DEFAULT}">
        Sort by default
      </a>
    </li>
    <li>
      <a href="#"
       class="sort__button ${activeSortType === SortType.DATE ? 'sort__button--active' : ''}"
       data-sort-type=${SortType.DATE}>
       Sort by date
      </a>
    </li>
    <li>
      <a href="#"
      class="sort__button ${activeSortType === SortType.RATING ? 'sort__button--active' : ''}"
      data-sort-type=${SortType.RATING}>
      Sort by rating
      </a>
    </li>
  </ul>`;

export default class FiltersView extends AbstractView{
  #activeSortType;

  constructor(activeSortType){
    super();
    this.#activeSortType = activeSortType;

  }

  get template() {
    return createFiltersTemplate(this.#activeSortType);
  }

  setSortTypeChangeHandler = (callback) => {
    this._callback.click = callback;
    this.element.addEventListener('click', (evt) => this.#handleClick(evt));
  };

  #handleClick = (evt) => {
    evt.preventDefault();
    const link = evt.target.closest('.sort__button');
    if(!link) {return;}

    const sortType = link.dataset.sortType;
    if(this.#activeSortType !== sortType){
      this._callback.click(sortType);
    }
  };
}
