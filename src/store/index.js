/**
 * Хранилище состояния приложения
 */
class Store {
  constructor() {
    this.listeners = []; // Слушатели изменений состояния
    this.state = {
      list: [],
      currentPage: 1,
      pageCount: 1,
    };
  }

  getState() {
    return this.state;
  }

  setState(newState, description = "setState") {
    this.state = newState;
    // Вызываем всех слушателей
    for (const listener of this.listeners) listener(this.state);
  }

  subscribe(listener) {
    this.listeners.push(listener);
    // Возвращается функция для удаления добавленного слушателя
    return () => {
      this.listeners = this.listeners.filter((item) => item !== listener);
    };
  }

  async search(name) {
    const response = await fetch(
      `https://api.github.com/search/users?q=${name}&sort=repositories`
    );
    const json = await response.json();
    this.setState({
      ...this.getState(),
      list: json.items,
      pageCount: Math.ceil(json.items.length / 10),
    });
  }

  switchPage(pageNumber) {
    this.setState({
      ...this.getState(),
      currentPage: pageNumber,
    });
    ("Переключение номера страницы");
  }
}

export default Store;
