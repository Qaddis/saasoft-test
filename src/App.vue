<script setup lang="ts">
import Button from "primevue/button"
import Account from "./components/Account.vue"
</script>

<template>
	<main class="main">
		<div class="wrapper">
			<div class="row">
				<h1 class="heading">Учетные записи</h1>

				<Button icon="pi pi-plus" severity="contrast" variant="outlined" />
			</div>

			<p class="hint">
				<i class="pi pi-question-circle"></i>

				<span>
					Для указания нескольких меток для одной пары логин/пароль используйте
					разделитель ;
				</span>
			</p>

			<hr class="separator" />

			<div class="labels">
				<p>Метки</p>

				<p>Тип записи</p>

				<p>Логин</p>

				<p>Пароль</p>
			</div>

			<div class="accounts">
				<Account />
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
</style>
