import { createApp } from "vue"

import Aura from "@primeuix/themes/aura"
import PrimeVue from "primevue/config"

import { createPinia } from "pinia"
import persistPlugin from "pinia-plugin-persistedstate"

import App from "./App.vue"
import "./css/globals.css"

const app = createApp(App)

// Настройка Pinia
const pinia = createPinia()

pinia.use(persistPlugin)

// Подключение pinia
app.use(pinia)

// Подключение PrimeVue в проект
app.use(PrimeVue, {
	theme: {
		preset: Aura
	}
})

app.mount("#app")
