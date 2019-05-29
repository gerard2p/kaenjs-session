import { KaenContext } from '@kaenjs/core';
import { configuration } from '@kaenjs/core/configuration';
import * as _session from 'express-session';
const { authentication: { Keys, Session } } = configuration;
const options = Object.assign({}, {secret:Keys}, Session);
const session = _session(options);
async function _Session (ctx: KaenContext) {
	await new Promise(resolve => {
		//@ts-ignore
		session(ctx.req, ctx.res, resolve);
	});
};
export { _Session as Session };