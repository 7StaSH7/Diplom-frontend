# [Яндекс.Практикум: дипломная работа (вёрстка)](https://7stash7.github.io/Diplom-frontend/main/)

`Версия 1.0.1`

Описание:
---
Вёрстка дипломной работы.

* Выполнена вёрстка по макету.
* JS не используется.
* Для открытия/закрытия блоков в консоли необходимо ввести:
    - `document.querySelector('.popup__popup-login').classList.toggle('popup_opened')` - попап входа;
    - `document.querySelector('.popup__popup-registration').classList.toggle('popup_opened')` - попап регистрации;
    - `document.querySelector('.popup__popup-success-registration').classList.toggle('popup_opened')` - попап успешной регистрации;
    - `document.querySelector('.header__nav-box-logged-in').classList.toggle('header__nav-box_hidden')` и `document.querySelector('.header__nav-box-not-logged-in').classList.toggle('header__nav-box_hidden')` - поменять шапку на авторизированную и обратно
    - `document.querySelector('.search-results__no-results').classList.toggle('search-results_hidden')` - блок с надписью "Ничего не найдено"
    - `document.querySelector('.search-results__process').classList.toggle('search-results_hidden')` - блок с preloader'ом 
    - `document.querySelector('.search-results__not-logged-in').classList.toggle('search-results_hidden')` - блок с результатами, если не авторизированный пользователь
    - `document.querySelector('.search-results__logged-in').classList.toggle('search-results_hidden')` -  блок с результатами, если авторизированный пользователь
* Внутренние ссылки настроены для работы от корня приложения, поэтому при переходе по ссылкам "Главная" и "Сохранённые статьи" на GH Pages переход будет некорректным. Эта проблема будет устранена после размещения приложения на хостинге.

Страницы:
---
* Главная - https://7stash7.github.io/Diplom-frontend/main/
* Сохранённые новости - https://7stash7.github.io/Diplom-frontend/savedArticles/

