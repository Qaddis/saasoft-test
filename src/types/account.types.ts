export interface IAccount {
	marks: MarksType
	type: (typeof TypesEnum)[number]
	login: string
	password: string | null
}

export type MarksType = { text: string }[]

const TypesEnum = ["LDAP", "Локальная"] as const
export const types = [...TypesEnum]
