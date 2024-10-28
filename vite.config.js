import {sveltekit} from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
	base: "/aoc2022/",
	plugins: [sveltekit()]
};

export default config;
