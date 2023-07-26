// План
// 1. Реализовать форму логина в приложении (+)
// *  Перенести всю разметку в рендер функцию (+)
// *  Сделать форму входа динамической (+)
// *  Отрефакторить приложение на модули
//    * api (+)
//    * вытащить логин компонент в отдельный модуль (+)
//    * вытащить компонент списка задач и форму добавления в отдельный модуль (-)
// 2. Реализовать форму регистрации (+)

import { addTodo, deleteTodo, getTodos } from "./api.js";
import { renderLoginComponent } from "./components/login-component.js";
import { formatDateToRu, formatDateToUs } from "./lib/formatDate/formatDate.js"

// TODO: Получать из хранилища данных
let tasks = [];

let token = "Bearer asb4c4boc86gasb4c4boc86g37w3cc3bo3b83k4g37k3bk3cg3c03ck4k";

token = null;

const fetchTodosAndRender = () => {
    return getTodos({ token }).then((responseData) => {
        tasks = responseData.todos;
        renderApp();
    });
};

export const renderApp = () => { // константа renderApp отрисовывает наше приложение, () => это анонимная стрелочная функция
    const appEl = document.getElementById("app"); // константа appEl в себе держит ссылку на узел DOM, который в себе держит всю разметку
    if (!token) { // Синтаксис !token означает что если токен есть, то то что в фигурных скобках не выполняется
        renderLoginComponent({ // Все что в скобках это объект, который мы прокидываем в renderLoginComponent в качестве аргумента 
            appEl, // ссылка на элемент с классом app
            //newToken параметр метода, еще называют аргументом но параметр от аргумента отличается тем, что параметр объявляют при объявлении функции а аргумент прокидывают во время вызова функции так что тут это параметр
            setToken: (newToken) => { // setToken это свойство которое содержит в себе стрелочную функцию, проще сказать что это метод
                token = newToken; // token это переменная
            }, // указываем метод. Функцию, которая является свойством объекта, называют методом этого объекта.
            fetchTodosAndRender, //в метод fetchTodosAndRender кладем функцию fetchTodosAndRender чтобы вызвать внутри renderLoginComponent
        });
        return;
    }

    const country = "ru";
    // Здесь хранится разметка списка задач
    const tasksHtml = tasks
        .map((task) => {
            return `
                <li class="task">
                    <p class="task-text">
                        ${task.text} (Создал: ${task.user?.name ?? 'Неизвестно'})
                        <button data-id="${task.id}" class="button delete-button">Удалить</button>
                    </p>
                    <p><i>Задача создана: ${country === "ru" ? formatDateToRu(new Date(task.created_at)) : formatDateToUs(new Date(task.created_at))}</i></p>
                 </li > `;
        })
        .join("");

    const appHtml = `<h1>Список задач</h1>

            <ul class="tasks" id="list">
                <!-- <!— Список рендерится из JS —> -->
                ${tasksHtml}
            </ul>
            <br/>
            <div class="form">
                <h3 class="form-title">Форма добавления</h3>
                <div class="form-row">
                    Что нужно сделать:
                    <input type="text" id="text-input" class="input" placeholder="Выпить кофе" />
                </div>
                <br />
                <button class="button" id="add-button">Добавить</button>
            </div>`

    appEl.innerHTML = appHtml;

    const buttonElement = document.getElementById("add-button");
    const listElement = document.getElementById("list");
    const textInputElement = document.getElementById("text-input");

    const deleteButtons = document.querySelectorAll(".delete-button");

    for (const deleteButton of deleteButtons) {
        deleteButton.addEventListener("click", (event) => {
            event.stopPropagation();

            const id = deleteButton.dataset.id;

            // подписываемся на успешное завершение запроса с помощью then
            deleteTodo({ id, token, }).then((responseData) => {
                // получили данные и рендерим их в приложении
                tasks = responseData.todos;
                renderApp();
            });
        });
    }

    buttonElement.addEventListener("click", () => {
        if (textInputElement.value === "") {
            return;
        }

        buttonElement.disabled = true;
        buttonElement.textContent = "Задача добавляется...";

        // подписываемся на успешное завершение запроса с помощью then
        addTodo({
            text: textInputElement.value,
            token,
        }).then(() => {
            // TODO: кинуть исключение
            textInputElement.value = "";
        })
            .then(() => {
                return fetchTodosAndRender();
            })
            .then(() => {
                buttonElement.disabled = false;
                buttonElement.textContent = "Добавить";
            })
            .catch((error) => {
                console.error(error);
                alert("Кажется, у вас проблемы с интернетом, попробуйте позже");
                buttonElement.disabled = false;
                buttonElement.textContent = "Добавить";
            });
    });
};

renderApp();