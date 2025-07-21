<script setup lang="ts">
import { Button, InputText, Password, Select } from "primevue"
import { ref } from "vue"

import { types } from "@/types/account.types"

const marks = ref<string>("")
const type = ref<(typeof types)[number]>("LDAP")
const login = ref<string>("")
const password = ref<string>("")
</script>

<template>
	<article
		:class="type === 'LDAP' ? 'account no-password' : 'account with-password'"
	>
		<InputText v-model="marks" placeholder="Метки" />

		<Select v-model="type" :options="types" placeholder="Тип" />

		<InputText v-model="login" placeholder="Логин" />

		<Password
			v-if="type === 'Локальная'"
			v-model="password"
			placeholder="Пароль"
			:feedback="false"
			toggleMask
			fluid
		/>

		<Button icon="pi pi-trash" severity="contrast" variant="outlined" />
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
