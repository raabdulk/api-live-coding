/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "\\\\mac\\Home\\Library\\CloudStorage\\GoogleDrive-raabdulk@gmail.com\\Мой диск\\Курсы\\Skypro\\2-nd course hw\\api-live-coding/api.js":
/*!**********************************************************************************************************************************!*\
  !*** \\mac\Home\Library\CloudStorage\GoogleDrive-raabdulk@gmail.com\Мой диск\Курсы\Skypro\2-nd course hw\api-live-coding/api.js ***!
  \**********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addTodo: () => (/* binding */ addTodo),\n/* harmony export */   deleteTodo: () => (/* binding */ deleteTodo),\n/* harmony export */   getTodos: () => (/* binding */ getTodos),\n/* harmony export */   loginUser: () => (/* binding */ loginUser),\n/* harmony export */   registerUser: () => (/* binding */ registerUser)\n/* harmony export */ });\nconst host = \"https://webdev-hw-api.vercel.app/api/v2/todos\";\r\n\r\nfunction getTodos({ token }) {\r\n    return fetch(host, {\r\n        method: \"GET\",\r\n        headers: {\r\n            Authorization: token,\r\n        },\r\n    })\r\n        .then((response) => {\r\n            if (response.status === 401) {\r\n                throw new Error(\"Нет авторизации\");\r\n            }\r\n            return response.json();\r\n        })\r\n}\r\n\r\nfunction deleteTodo({ token, id }) {\r\n    return fetch(\"https://webdev-hw-api.vercel.app/api/todos/\" + id, {\r\n        method: \"DELETE\",\r\n        headers: {\r\n            Authorization: token,\r\n        },\r\n    })\r\n        .then((response) => {\r\n            return response.json();\r\n        })\r\n}\r\n\r\nfunction addTodo({ text, token }) {\r\n    return fetch(host, {\r\n        method: \"POST\",\r\n        body: JSON.stringify({\r\n            text,\r\n        }),\r\n        headers: {\r\n            Authorization: token,\r\n        },\r\n    })\r\n        .then((response) => {\r\n            return response.json();\r\n        })\r\n}\r\n\r\n// https://github.com/GlebkaF/webdev-hw-api/blob/main/pages/api/user/README.md#%D0%B0%D0%B2%D1%82%D0%BE%D1%80%D0%B8%D0%B7%D0%BE%D0%B2%D0%B0%D1%82%D1%8C%D1%81%D1%8F\r\nfunction registerUser({ login, password, name }) {\r\n    return fetch(\"https://wedev-api.sky.pro/api/user\", {\r\n        method: \"POST\",\r\n        body: JSON.stringify({\r\n            login,\r\n            password,\r\n            name\r\n        }),\r\n    }).then((response) => {\r\n        if (response.status === 400) {\r\n            throw new Error('Такой пользователь уже существует')\r\n        }\r\n        return response.json();\r\n    })\r\n}\r\n\r\nfunction loginUser({ login, password }) {\r\n    return fetch(\"https://wedev-api.sky.pro/api/user/login\", {\r\n        method: \"POST\",\r\n        body: JSON.stringify({\r\n            login,\r\n            password\r\n        }),\r\n    }).then((response) => {\r\n        if (response.status === 400) {\r\n            throw new Error('Неверный логин или пароль')\r\n        }\r\n        return response.json();\r\n    })\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://api-live-coding/\\\\mac\\Home\\Library\\CloudStorage\\GoogleDrive-raabdulk@gmail.com\\%D0%9C%D0%BE%D0%B9_%D0%B4%D0%B8%D1%81%D0%BA\\%D0%9A%D1%83%D1%80%D1%81%D1%8B\\Skypro\\2-nd_course_hw\\api-live-coding/api.js?");

/***/ }),

/***/ "\\\\mac\\Home\\Library\\CloudStorage\\GoogleDrive-raabdulk@gmail.com\\Мой диск\\Курсы\\Skypro\\2-nd course hw\\api-live-coding/components/login-component.js":
/*!*********************************************************************************************************************************************************!*\
  !*** \\mac\Home\Library\CloudStorage\GoogleDrive-raabdulk@gmail.com\Мой диск\Курсы\Skypro\2-nd course hw\api-live-coding/components/login-component.js ***!
  \*********************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderLoginComponent: () => (/* binding */ renderLoginComponent)\n/* harmony export */ });\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api.js */ \"\\\\\\\\mac\\\\Home\\\\Library\\\\CloudStorage\\\\GoogleDrive-raabdulk@gmail.com\\\\Мой диск\\\\Курсы\\\\Skypro\\\\2-nd course hw\\\\api-live-coding/api.js\");\n//Здесь раполагается логика формы входа\r\n\r\n\r\n\r\nfunction renderLoginComponent({ appEl, setToken, fetchTodosAndRender }) {\r\n    let isLoginMode = true;\r\n    const renderForm = () => {\r\n        const appHtml = `<h1>Список задач</h1>\r\n        <div class=\"form\">\r\n            <h3 class=\"form-title\">Форма ${isLoginMode ? 'входа' : 'регистрации'}</h3>\r\n            <div class=\"form-row\">\r\n            ${isLoginMode\r\n                ? \"\"\r\n                : `Имя\r\n        <input type=\"text\" id=\"name-input\" class=\"input\" />\r\n        <br>`\r\n            }  \r\n                Логин\r\n                <input type=\"text\" id=\"login-input\" class=\"input\" />\r\n                <br>\r\n                Пароль\r\n                <input type=\"password\" id=\"password-input\" class=\"input\" />\r\n            </div>\r\n            <br/>\r\n            <button class=\"button\" id=\"login-button\">${isLoginMode ? 'Войти' : 'Зарегистрироваться'}</button>\r\n            <br><br><br>\r\n            <button class=\"button\" id=\"toggle-button\">Перейти ${isLoginMode ? 'к регистрации' : 'ко входу'}</button>\r\n        </div>\r\n        `;\r\n\r\n        appEl.innerHTML = appHtml;\r\n\r\n        document.getElementById('login-button').addEventListener('click', () => {\r\n            if (isLoginMode) {\r\n                const login = document.getElementById('login-input').value\r\n                const password = document.getElementById('password-input').value\r\n\r\n                if (!login) {\r\n                    alert('Введите логин')\r\n                    return;\r\n                }\r\n\r\n                if (!password) {\r\n                    alert('Введите пароль')\r\n                    return;\r\n                }\r\n\r\n                (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.loginUser)({\r\n                    login: login,\r\n                    password: password,\r\n                }).then((user) => {\r\n                    setToken(`Bearer ${user.user.token}`);\r\n                    fetchTodosAndRender();\r\n                }).catch((error) => {\r\n                    //ТУДУ выводить алерт красиво\r\n                    alert(error.message);\r\n                });\r\n            } else {\r\n\r\n                const login = document.getElementById('login-input').value\r\n                const name = document.getElementById('name-input').value\r\n                const password = document.getElementById('password-input').value\r\n\r\n                if (!name) {\r\n                    alert('Введите имя')\r\n                    return;\r\n                }\r\n\r\n                if (!login) {\r\n                    alert('Введите логин')\r\n                    return;\r\n                }\r\n\r\n                if (!password) {\r\n                    alert('Введите пароль')\r\n                    return;\r\n                }\r\n\r\n                (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.registerUser)({\r\n                    login: login,\r\n                    password: password,\r\n                    name: name,\r\n                }).then((user) => {\r\n                    setToken(`Bearer ${user.user.token}`);\r\n                    fetchTodosAndRender();\r\n                }).catch((error) => {\r\n                    //ТУДУ выводить алерт красиво\r\n                    alert(error.message);\r\n                });\r\n            }\r\n        });\r\n\r\n        document.getElementById('toggle-button').addEventListener('click', () => {\r\n            isLoginMode = !isLoginMode;\r\n            renderForm();\r\n        });\r\n    }\r\n\r\n    renderForm();\r\n}\n\n//# sourceURL=webpack://api-live-coding/\\\\mac\\Home\\Library\\CloudStorage\\GoogleDrive-raabdulk@gmail.com\\%D0%9C%D0%BE%D0%B9_%D0%B4%D0%B8%D1%81%D0%BA\\%D0%9A%D1%83%D1%80%D1%81%D1%8B\\Skypro\\2-nd_course_hw\\api-live-coding/components/login-component.js?");

/***/ }),

/***/ "\\\\mac\\Home\\Library\\CloudStorage\\GoogleDrive-raabdulk@gmail.com\\Мой диск\\Курсы\\Skypro\\2-nd course hw\\api-live-coding/index.js":
/*!************************************************************************************************************************************!*\
  !*** \\mac\Home\Library\CloudStorage\GoogleDrive-raabdulk@gmail.com\Мой диск\Курсы\Skypro\2-nd course hw\api-live-coding/index.js ***!
  \************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderApp: () => (/* binding */ renderApp)\n/* harmony export */ });\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.js */ \"\\\\\\\\mac\\\\Home\\\\Library\\\\CloudStorage\\\\GoogleDrive-raabdulk@gmail.com\\\\Мой диск\\\\Курсы\\\\Skypro\\\\2-nd course hw\\\\api-live-coding/api.js\");\n/* harmony import */ var _components_login_component_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/login-component.js */ \"\\\\\\\\mac\\\\Home\\\\Library\\\\CloudStorage\\\\GoogleDrive-raabdulk@gmail.com\\\\Мой диск\\\\Курсы\\\\Skypro\\\\2-nd course hw\\\\api-live-coding/components/login-component.js\");\n/* harmony import */ var _lib_formatDate_formatDate_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/formatDate/formatDate.js */ \"\\\\\\\\mac\\\\Home\\\\Library\\\\CloudStorage\\\\GoogleDrive-raabdulk@gmail.com\\\\Мой диск\\\\Курсы\\\\Skypro\\\\2-nd course hw\\\\api-live-coding/lib/formatDate/formatDate.js\");\n// План\r\n// 1. Реализовать форму логина в приложении (+)\r\n// *  Перенести всю разметку в рендер функцию (+)\r\n// *  Сделать форму входа динамической (+)\r\n// *  Отрефакторить приложение на модули\r\n//    * api (+)\r\n//    * вытащить логин компонент в отдельный модуль (+)\r\n//    * вытащить компонент списка задач и форму добавления в отдельный модуль (-)\r\n// 2. Реализовать форму регистрации (+)\r\n\r\n\r\n\r\n\r\n\r\n\r\n// TODO: Получать из хранилища данных\r\nlet tasks = [];\r\n\r\nlet token = \"Bearer asb4c4boc86gasb4c4boc86g37w3cc3bo3b83k4g37k3bk3cg3c03ck4k\";\r\n\r\ntoken = null;\r\n\r\nconst fetchTodosAndRender = () => {\r\n    return (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.getTodos)({ token }).then((responseData) => {\r\n        tasks = responseData.todos;\r\n        renderApp();\r\n    });\r\n};\r\n\r\nconst renderApp = () => { // константа renderApp отрисовывает наше приложение, () => это анонимная стрелочная функция\r\n    const appEl = document.getElementById(\"app\"); // константа appEl в себе держит ссылку на узел DOM, который в себе держит всю разметку\r\n    if (!token) { // Синтаксис !token означает что если токен есть, то то что в фигурных скобках не выполняется\r\n        (0,_components_login_component_js__WEBPACK_IMPORTED_MODULE_1__.renderLoginComponent)({ // Все что в скобках это объект, который мы прокидываем в renderLoginComponent в качестве аргумента \r\n            appEl, // ссылка на элемент с классом app\r\n            //newToken параметр метода, еще называют аргументом но параметр от аргумента отличается тем, что параметр объявляют при объявлении функции а аргумент прокидывают во время вызова функции так что тут это параметр\r\n            setToken: (newToken) => { // setToken это свойство которое содержит в себе стрелочную функцию, проще сказать что это метод\r\n                token = newToken; // token это переменная\r\n            }, // указываем метод. Функцию, которая является свойством объекта, называют методом этого объекта.\r\n            fetchTodosAndRender, //в метод fetchTodosAndRender кладем функцию fetchTodosAndRender чтобы вызвать внутри renderLoginComponent\r\n        });\r\n        return;\r\n    }\r\n\r\n    const country = \"ru\";\r\n    // Здесь хранится разметка списка задач\r\n    const tasksHtml = tasks\r\n        .map((task) => {\r\n            return `\r\n                <li class=\"task\">\r\n                    <p class=\"task-text\">\r\n                        ${task.text} (Создал: ${task.user?.name ?? 'Неизвестно'})\r\n                        <button data-id=\"${task.id}\" class=\"button delete-button\">Удалить</button>\r\n                    </p>\r\n                    <p><i>Задача создана: ${country === \"ru\" ? (0,_lib_formatDate_formatDate_js__WEBPACK_IMPORTED_MODULE_2__.formatDateToRu)(new Date(task.created_at)) : (0,_lib_formatDate_formatDate_js__WEBPACK_IMPORTED_MODULE_2__.formatDateToUs)(new Date(task.created_at))}</i></p>\r\n                 </li > `;\r\n        })\r\n        .join(\"\");\r\n\r\n    const appHtml = `<h1>Список задач</h1>\r\n\r\n            <ul class=\"tasks\" id=\"list\">\r\n                <!-- <!— Список рендерится из JS —> -->\r\n                ${tasksHtml}\r\n            </ul>\r\n            <br/>\r\n            <div class=\"form\">\r\n                <h3 class=\"form-title\">Форма добавления</h3>\r\n                <div class=\"form-row\">\r\n                    Что нужно сделать:\r\n                    <input type=\"text\" id=\"text-input\" class=\"input\" placeholder=\"Выпить кофе\" />\r\n                </div>\r\n                <br />\r\n                <button class=\"button\" id=\"add-button\">Добавить</button>\r\n            </div>`\r\n\r\n    appEl.innerHTML = appHtml;\r\n\r\n    const buttonElement = document.getElementById(\"add-button\");\r\n    const listElement = document.getElementById(\"list\");\r\n    const textInputElement = document.getElementById(\"text-input\");\r\n\r\n    const deleteButtons = document.querySelectorAll(\".delete-button\");\r\n\r\n    for (const deleteButton of deleteButtons) {\r\n        deleteButton.addEventListener(\"click\", (event) => {\r\n            event.stopPropagation();\r\n\r\n            const id = deleteButton.dataset.id;\r\n\r\n            // подписываемся на успешное завершение запроса с помощью then\r\n            (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.deleteTodo)({ id, token, }).then((responseData) => {\r\n                // получили данные и рендерим их в приложении\r\n                tasks = responseData.todos;\r\n                renderApp();\r\n            });\r\n        });\r\n    }\r\n\r\n    buttonElement.addEventListener(\"click\", () => {\r\n        if (textInputElement.value === \"\") {\r\n            return;\r\n        }\r\n\r\n        buttonElement.disabled = true;\r\n        buttonElement.textContent = \"Задача добавляется...\";\r\n\r\n        // подписываемся на успешное завершение запроса с помощью then\r\n        (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.addTodo)({\r\n            text: textInputElement.value,\r\n            token,\r\n        }).then(() => {\r\n            // TODO: кинуть исключение\r\n            textInputElement.value = \"\";\r\n        })\r\n            .then(() => {\r\n                return fetchTodosAndRender();\r\n            })\r\n            .then(() => {\r\n                buttonElement.disabled = false;\r\n                buttonElement.textContent = \"Добавить\";\r\n            })\r\n            .catch((error) => {\r\n                console.error(error);\r\n                alert(\"Кажется, у вас проблемы с интернетом, попробуйте позже\");\r\n                buttonElement.disabled = false;\r\n                buttonElement.textContent = \"Добавить\";\r\n            });\r\n    });\r\n};\r\n\r\nrenderApp();\n\n//# sourceURL=webpack://api-live-coding/\\\\mac\\Home\\Library\\CloudStorage\\GoogleDrive-raabdulk@gmail.com\\%D0%9C%D0%BE%D0%B9_%D0%B4%D0%B8%D1%81%D0%BA\\%D0%9A%D1%83%D1%80%D1%81%D1%8B\\Skypro\\2-nd_course_hw\\api-live-coding/index.js?");

/***/ }),

/***/ "\\\\mac\\Home\\Library\\CloudStorage\\GoogleDrive-raabdulk@gmail.com\\Мой диск\\Курсы\\Skypro\\2-nd course hw\\api-live-coding/lib/formatDate/formatDate.js":
/*!********************************************************************************************************************************************************!*\
  !*** \\mac\Home\Library\CloudStorage\GoogleDrive-raabdulk@gmail.com\Мой диск\Курсы\Skypro\2-nd course hw\api-live-coding/lib/formatDate/formatDate.js ***!
  \********************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   formatDateToRu: () => (/* binding */ formatDateToRu),\n/* harmony export */   formatDateToUs: () => (/* binding */ formatDateToUs)\n/* harmony export */ });\n// Файл lib/formatDate/formatDate.js\r\n\r\n// Приводим дату к формату ДД/ММ/ГГГГ ЧЧ:ММ\r\nconst formatDateToRu = (date) => {\r\n  return `${date.getDate() < 10 ? '0' + date.getDate() : date.getDate()}/${date.getMonth() < 10 ? '0' + date.getMonth() : date.getMonth()}/${date.getFullYear()} ${date.getHours() < 10 ? '0' + date.getHours() : date.getHours()}:${date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()}`;\r\n};\r\n\r\n\r\n// Приводим дату к формату ММ-ДД-ГГГГ ЧЧ:ММ\r\nconst formatDateToUs = (date) => {\r\n  return `${date.getMonth() < 10 ? '0' + date.getMonth() : date.getMonth()}-${date.getDate() < 10 ? '0' + date.getDate() : date.getDate()}-${date.getFullYear()} ${date.getHours() < 10 ? '0' + date.getHours() : date.getHours()}:${date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()}`;\r\n};\n\n//# sourceURL=webpack://api-live-coding/\\\\mac\\Home\\Library\\CloudStorage\\GoogleDrive-raabdulk@gmail.com\\%D0%9C%D0%BE%D0%B9_%D0%B4%D0%B8%D1%81%D0%BA\\%D0%9A%D1%83%D1%80%D1%81%D1%8B\\Skypro\\2-nd_course_hw\\api-live-coding/lib/formatDate/formatDate.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("\\\\mac\\Home\\Library\\CloudStorage\\GoogleDrive-raabdulk@gmail.com\\Мой диск\\Курсы\\Skypro\\2-nd course hw\\api-live-coding/index.js");
/******/ 	
/******/ })()
;