<script setup lang="ts">
import { Button, InputText, Password, Select } from "primevue"
import { onMounted, ref, watch } from "vue"

import { useAccountsStore } from "@/stores/account.store"
import { types, type IAccount, type MarksType } from "@/types/account.types"

interface IProps {
	data: IAccount
	index: number
}

// Объявляем пропсы
const { data, index } = defineProps<IProps>()

// Хранилище с данным
const accountsStore = useAccountsStore()

// Данные с полей ввода
const marks = ref<string>("")
const type = ref<IAccount["type"]>(data.type)
const login = ref<string>(data.login)
const password = ref<string | null>(data.password)

onMounted(() => {
	marks.value = data.marks.map(mark => mark.text).join(";")
})

// Состояние полей (корректны/не корректны)
const errors = ref({
	marks: false,
	login: false,
	password: false
})

// Функция для удаления учетной записи
const deleteAccount = (): void => accountsStore.remove(index)

// Функция для валидации и сохранения учетной записи
const saveAccount = (): void => {
	// Обработка полей
	const trimLogin = login.value.trim()
	const trimPassword = password.value?.trim()
	const trimMarks = marks.value.trim()

	// Валидация полей
	errors.value.login = !trimLogin || trimLogin.length > 100
	errors.value.password =
		type.value === "Локальная" && (!trimPassword || trimPassword.length > 100)
	errors.value.marks = trimMarks.length > 50

	if (errors.value.login || errors.value.password || errors.value.marks) return

	// Разбиение содержимого поля Метки на текстовые метки
	const processedMarks: MarksType = trimMarks
		.split(";")
		.map(s => s.trim())
		.filter(Boolean)
		.map(s => ({ text: s }))

	// Сохранение учетной записи
	accountsStore.update(index, {
		marks: processedMarks,
		type: type.value,
		login: trimLogin,
		password: trimPassword!
	})
}

// Валидация и сохранение данных при изменении значения селекта
watch(type, () => saveAccount())
</script>

<template>
	<article
		:class="type === 'LDAP' ? 'account no-password' : 'account with-password'"
	>
		<InputText
			@blur="saveAccount"
			v-model="marks"
			:invalid="errors.marks"
			placeholder="Метки"
		/>

		<Select v-model="type" :options="types" placeholder="Тип" />

		<InputText
			@blur="saveAccount"
			v-model="login"
			:invalid="errors.login"
			placeholder="Логин"
		/>

		<Password
			@blur="saveAccount"
			v-if="type === 'Локальная'"
			v-model="password"
			:invalid="errors.password"
			placeholder="Пароль"
			:feedback="false"
			toggleMask
			fluid
		/>

		<Button
			@click="deleteAccount"
			icon="pi pi-trash"
			severity="contrast"
			variant="outlined"
		/>
	</article>
</template>

<style scoped>
.account {
	display: grid;
	grid-template-rows: 1fr;
	align-items: center;
	gap: 0 15px;
}

.account + .account {
	margin-top: 6.5px;
}

.with-password {
	grid-template-columns: 1fr 0.65fr 1fr 1fr auto;
}

.no-password {
	grid-template-columns: 1fr 0.65fr 2.05fr auto;
}
</style>
