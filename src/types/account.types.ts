export interface IAccount {
	marks: MarksType
	types: (typeof TypesEnum)[number]
	login: string
	password: string | null
}

export type MarksType = { text: string }[]

export const TypesEnum = ["LDAP", "Локальная"] as const
