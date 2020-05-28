import * as child_process from 'child_process';

const re = {
	getDenoVersion: /^deno (\d\.\d\.\d.*)\n/,
};

export function hasDenoVersion(): string {
	let denoVersionFound: string;

	try {
		denoVersionFound =
			child_process
				.execSync('deno --version', {stdio: 'pipe'})
				.toString()
				.match(re.getDenoVersion)
				?.pop() || '';
	} catch (error) {
		denoVersionFound = '';
	}

	return denoVersionFound;
}

export function hasDeno() {
	return !!hasDenoVersion();
}

export default hasDeno();
