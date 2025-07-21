<script setup lang="ts">
import { storeToRefs } from "pinia"
import Button from "primevue/button"

import Account from "./components/Account.vue"
import { useAccountsStore } from "./stores/account.store"

const accountsStore = useAccountsStore()
const { accounts } = storeToRefs(accountsStore)

// Функция для создания нового аккаунта
const addNewAccount = (): void => {
	accountsStore.accounts.push({
		marks: [],
		login: "",
		type: "LDAP",
		password: null
	})
}
</script>

<template>
	<main class="main">
		<div class="wrapper">
			<div class="row">
				<h1 class="heading">Учетные записи</h1>

				<Button
					@click="addNewAccount"
					icon="pi pi-plus"
					severity="contrast"
					variant="outlined"
				/>
			</div>

			<p class="hint">
				<i class="pi pi-question-circle"></i>

				<span>
					Для указания нескольких меток для одной пары логин/пароль используйте
					разделитель ;
				</span>
			</p>

			<div class="labels">
				<p>Метки</p>

				<p>Тип записи</p>

				<p>Логин</p>

				<p>Пароль</p>
			</div>

			<div class="accounts">
				<Account
					v-for="(item, index) in accounts"
					:key="index"
					:data="item"
					:index="index"
				/>

				<h2 v-if="accounts.length === 0" class="no-accounts">
					Учётные записи отсутствуют
				</h2>
			</div>
		</div>
	</main>
</template>

<style scoped>
.main {
	width: 100%;
	height: 100vh;

	display: flex;
	justify-content: center;
	align-items: center;
}

.wrapper {
	max-width: 1140px;
	width: 100%;
	max-height: 80%;
	overflow-y: auto;
}

.row {
	display: flex;
	align-items: center;
	gap: 0 25px;
}

.heading {
	font-size: 1.75rem;
	font-family: var(--heading-font);
}

.hint {
	margin: 20px 0 35px;
	padding: 15px;
	border: 1px solid;
	border-radius: 5px;

	display: flex;
	align-items: center;
	gap: 0 15px;
}

.hint i {
	font-size: 1.8rem;
}

.labels {
	display: grid;
	grid-template-rows: 1fr;
	grid-template-columns: 1fr 0.65fr 1fr 1.2fr;
	gap: 0 15px;
	margin-bottom: 7.5px;
}

.no-accounts {
	font-family: var(--heading-font);
	font-size: 1.35rem;
	text-align: center;
	opacity: 0.75;
	margin-top: 20px;
}
</style>
