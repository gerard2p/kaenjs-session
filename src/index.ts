import { KaenContext } from '@kaenjs/core';
import { configuration } from '@kaenjs/core/configuration';
import * as _session from 'express-session';
const { authentication: { Keys, Session } } = configuration;

function _Session() {
	let options = Object.assign({}, {secret:Keys}, Session);
	let session = _session(options);
	return async function (ctx: KaenContext) {
		await new Promise(resolve => {
			//@ts-ignore
			session(ctx.req, ctx.res, resolve);
		});
	};
}
export { _Session as Session };