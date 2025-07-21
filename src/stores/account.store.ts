import { defineStore } from "pinia"

import type { IAccount } from "@/types/account.types"

export const useAccountsStore = defineStore("accounts", {
	state: () => ({
		accounts: [] as IAccount[]
	}),
	getters: {
		getById: state => {
			return (id: number) => state.accounts[id]
		}
	},
	actions: {
		remove(id: number) {
			this.accounts.splice(id)
		},
		update(id: number, data: IAccount) {
			this.accounts[id] = {
				...data,
				password: data.type === "LDAP" ? null : data.password
			}
		}
	},
	persist: true
})
