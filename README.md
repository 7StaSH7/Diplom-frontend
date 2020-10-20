# [Яндекс.Практикум: дипломная работа (вёрстка)](https://7stash7.github.io/Diplom-frontend/main/)

`Версия 1.0.0`

Описание:
---
Вёрстка дипломной работы.

* Выполнена вёрстка по макету.
* JS не используется.
* Для открытия/закрытия попапов в консоли необходимо ввести:
    - `document.querySelector('.popup__popup-login').classList.toggle('popup_opened')` - попап входа;
    - `document.querySelector('.popup__popup-registration').classList.toggle('popup_opened')` - попап регистрации;
    - `document.querySelector('.popup__popup-success-registration').classList.toggle('popup_opened')` - попап успешной регистрации;
    
* Внутренние ссылки настроены для работы от корня приложения, поэтому при переходе по ссылкам "Главная" и "Сохранённые статьи" на GH Pages переход будет некорректным. Эта проблема будет устранена после размещения приложения на хостинге.

Страницы:
---
* Главная (пользователь не авторизован) https://7stash7.github.io/Diplom-frontend/main/
* Главная (пользователь авторизован) https://7stash7.github.io/Diplom-frontend/mainLoggedIn/
* Главная в процессе поиска (пользователь не авторизован) https://7stash7.github.io/Diplom-frontend/searchProcess/
* Главная при неудачном поиске (пользователь не авторизован) https://7stash7.github.io/Diplom-frontend/searchNoResults/
* Главная с результатами поиска (пользователь не авторизован) https://7stash7.github.io/Diplom-frontend/searchResults/
* Главная с результатами поиска (пользователь авторизован) https://7stash7.github.io/Diplom-frontend/searchResultsLoggedIn/
* Сохранённые новости (пользователь авторизован) https://7stash7.github.io/Diplom-frontend/savedArticles/

