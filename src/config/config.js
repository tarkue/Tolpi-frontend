import { useAppStore } from "@/store/appStore"

const VK = "https://vk.com/"
const VK_API_V = "5.131"
const APP_ID = 51710210


const StartInfo = [
    {
        title: "Привет, это",
        SpanTitle: "толпи",
        text: "Здесь ты найдёшь друзей!",
        buttonText: "далее",
    },
    {
        title: "Мы не",
        SpanTitle: "Арнольд",
        text: "Но нам нужен твой статус 😅",
        buttonText: "хорошо",
    },
    {
        title: "Прости,",
        SpanTitle: "но надо",
        text: "Нет, нам серьёзно нужен статус...",
        buttonText: "хорошо",
    },
    {
        title: "я прошу",
        SpanTitle: "скажи да",
        text: 'Ты нажмёшь “разрешить”?',
        buttonText: "да",
    },
    {
        title: "Нет, ну",
        SpanTitle: "прости",
        text: "Но для доступа нужен токен.",
        buttonText: "разрешу",
    },
    {
        title: "у нас",
        SpanTitle: "принято",
        text: "Создавай толпи и собирай тусы!",
        buttonText: "начать",
    }
]



export {
    VK, VK_API_V, APP_ID, StartInfo
}