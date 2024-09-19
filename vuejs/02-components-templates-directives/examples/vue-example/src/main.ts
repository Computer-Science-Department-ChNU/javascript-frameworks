import './assets/main.css'

import {createApp} from 'vue'
import App from './App.vue'

/*
API додатку
https://ua.vuejs.org/api/application.html

Створює екземпляр додатку.
function createApp(rootComponent: Component, rootProps?: object): App

Перший аргумент - кореневий компонент.
Другим необов'язковим аргументом є реквізити, які потрібно передати кореневому компоненту.
*/

createApp(App).mount('#app')
