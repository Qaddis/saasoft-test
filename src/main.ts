import { createApp } from "vue"

import Aura from "@primeuix/themes/aura"
import PrimeVue from "primevue/config"

import App from "./App.vue"
import "./css/globals.css"

const app = createApp(App)

// Подключение PrimeVue в проект
app.use(PrimeVue, {
	theme: {
		preset: Aura
	}
})

app.mount("#app")
