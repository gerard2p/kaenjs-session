import { Mut } from '@kaenjs/core/configuration/helpers';
export interface SessionConfiguration {
	/**
	 * These values are use to generate cookies
	 */
	name:string
	resave:boolean
	saveUninitialized: boolean
	cookie:{
        domain?:string
        expires?:string
        secure?:boolean
        httpOnly?:boolean
        maxAge?:number
        path?:string
        sameSite?:boolean|string
    }
}
export type ISessionConfiguration = {
    [P in keyof SessionConfiguration]: Mut<SessionConfiguration[P]>
}
