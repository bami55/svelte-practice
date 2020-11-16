import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		initBo: 3,
		initRounds: 6,
		initTimes: 10
	}
});

export default app;