import { KaenContext } from '@kaenjs/core';
import { configuration } from '@kaenjs/core/configuration';
import * as _session from 'express-session';
const { server: { Keys }, session } = configuration;
const options = Object.assign({}, {secret:Keys}, session);
const sessionInstance = _session(options);
async function _Session (ctx: KaenContext) {
	await new Promise(resolve => {
		//@ts-ignore
		sessionInstance(ctx.req, ctx.res, resolve);
	});
};
export { _Session as Session };