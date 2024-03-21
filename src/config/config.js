
const VK = "https://vk.com/"
const API_URL = "толпи.рф"
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
        title: "у нас",
        SpanTitle: "принято",
        text: "Создавай толпи и собирай тусы!",
        buttonText: "начать",
    }
]

const MOST_POPULAR_COUNTRIES = [
    "Москва", "Санкт-Петербург", 
    "Владивосток", "Волгоград",
    "Воронеж", "Екатеринбург",
    "Казань", "Калуга",
    "Краснодар", "Красноярск",
    "Нижний Новгород", "Новосибирск",
    "Ростов-на-Дону", "Самара",
    "Саратов", "Сочи", 
    "Сургут", "Уфа",
    "Ярославль",
]

const ADS_LINKS = {
    BIG_AD: "https://vk.com/tolpi_official",
    SMALL_AD: "https://vk.com/donut/tolpi_official"
}

const CHAT_URL = "https://vk.com/im?media=&sel=-222099365"

const HH_AREAS_API = "https://api.hh.ru/areas"

const GROUP_VK_ID = 222099365

export {
    VK, VK_API_V, APP_ID, StartInfo, 
    MOST_POPULAR_COUNTRIES, ADS_LINKS,
    CHAT_URL, HH_AREAS_API, GROUP_VK_ID,
    API_URL
}