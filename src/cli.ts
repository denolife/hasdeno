#!/usr/bin/env node

import {hasDeno, hasDenoVersion} from './index';

const argv = process.argv.slice(2);

const quietPlz = argv.includes('-q');

const versionPlz = argv.includes('--version') || argv.includes('-v');

if (!hasDeno()) {
	if (!quietPlz && !versionPlz) {
		console.error('Deno was not found. Visit https://deno.land to install');
	}

	process.exit(1);
}

if (versionPlz) {
	console.log(hasDenoVersion());
} else if (!quietPlz) {
	console.warn(`Version ${hasDenoVersion()} of Deno is present`);
}
