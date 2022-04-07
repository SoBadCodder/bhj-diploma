/**
 * Класс Sidebar отвечает за работу боковой колонки:
 * кнопки скрытия/показа колонки в мобильной версии сайта
 * и за кнопки меню
 * */
class Sidebar {
  /**
   * Запускает initAuthLinks и initToggleButton
   * */
  static init() {
    this.initAuthLinks();
    this.initToggleButton();
  }

  /**
   * Отвечает за скрытие/показа боковой колонки:
   * переключает два класса для body: sidebar-open и sidebar-collapse
   * при нажатии на кнопку .sidebar-toggle
   * */
  static initToggleButton() {
    const bodySidebar = document.querySelector('body');
    const buttonSidebar = document.querySelector('.sidebar-toggle');
    buttonSidebar.onclick = (event) => {
      event.preventDefault();
      bodySidebar.classList.toggle('sidebar-open');
      bodySidebar.classList.toggle('sidebar-collapse');
    }
  }

  /**
   * При нажатии на кнопку входа, показывает окно входа
   * (через найденное в App.getModal)
   * При нажатии на кнопку регастрации показывает окно регистрации
   * При нажатии на кнопку выхода вызывает User.logout и по успешному
   * выходу устанавливает App.setState( 'init' )
   * */
  static initAuthLinks() {
    const loginButton = document.querySelector('.menu-item_login');
    const logoutButton = document.querySelector('.menu-item_logout');
    const registerButton = document.querySelector('.menu-item_register');

    loginButton.onclick = (event) => {
      event.preventDefault();
      const appModal = App.getModal('login');
      appModal.open();
    }
    logoutButton.onclick = (event) => {
      event.preventDefault();
      User.logout({}, (err, response) =>{
        if (response.success) {
          App.setState('init');
        } else {
          console.log(err);
        }
      })
    }
    registerButton.onclick = (event) => {
      event.preventDefault();
      const appModal = App.getModal('register');
      appModal.open();
    }
  }
}