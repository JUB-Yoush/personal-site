<script>
	//import { preloadCode, preloadData } from '$app/navigation';

	import { page } from '$app/stores';
	import '$lib/css/reset.css';
	import '$lib/css/main.css';
	import '$lib/css/code.css';
	import { browser } from '$app/environment';
	import theme from '$lib/shared/stores/theme';
	const themes = ['plain', 'mint', 's.berry', 'banana', 'peanut', 'grape', 'melon'];
	let curr_theme = 0;

	if (browser) {
		document.documentElement.setAttribute('data-theme', themes[$theme]);
		curr_theme = $theme;
	}

	function change_theme() {
		if (browser) {
			let next_theme = ($theme + 1) % themes.length;
			theme.set(next_theme);
			document.documentElement.setAttribute('data-theme', themes[$theme]);
			curr_theme = $theme;
		}
	}
</script>

<main>
	<nav class={$page.url.pathname.startsWith('/blog/') ? 'blog' : ''}>
		<a class="" href="/">~</a>
		<a href="/about">about</a>
		<a href="/resume">hire me 😳</a>
		<a href="/projects">projects</a>
		<a class="" href="/mail">mail list</a>
		<a href="/blog">blog</a>
		<a on:click={change_theme}>{themes[curr_theme]}</a>
	</nav>

	<body class={$page.url.pathname.startsWith('/blog/') ? 'blog' : ''}>
		<span>+-------------+</span>
		<slot />
		<footer>
			<span>+-------------+</span>
			<div>
				<a class="" href="/contact">contact</a>
				<a class="" href="https://github.com/JUB-Yoush" target="_blank">github</a>
				<a class="" href="https://yoush.itch.io/" target="_blank">itch.io</a>
				<a class="" href="https://buttondown.com/jaydenpb/rss">rss</a>
			</div>
			<footer />
		</footer></body
	>
</main>

<style>
	:global(*) {
		background-color: var(--background-color);
		color: var(--color);
	}
	:global(*)::selection {
		background: var(--hover-color);
	}

	:global(a:hover) {
		color: var(--hover-color);
		cursor: pointer;
	}
	:global(a) {
		background-color: transparent;
		text-decoration: underline;
	}
	main {
		margin-top: 15vh;
		width: 100vw;
		display: flex;
		flex-direction: row;
		justify-content: center;
		margin-left: auto;
		margin-right: auto;
	}
	nav {
		padding-right: 1.5rem;
		padding-top: 16px;
		display: flex;
		flex-wrap: wrap;
		flex-direction: column;
		text-align: right;
	}
	nav a {
		margin-bottom: 0.5rem;
	}
	body {
		max-width: 800px;
		width: 60vw;
		min-width: 320px;
	}
	body.blog {
		width: 80vw;
		max-width: 1200px;
	}
	body > span {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding-bottom: 8px;
	}
	footer {
		margin-top: 8px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	@media only screen and (max-width: 600px) {
		main {
			flex-direction: column;
			margin-top: min(5vh, 30px);
			margin-left: min(5vw, 60px);
		}
		nav {
			flex-direction: row;
			text-align: left;
			justify-content: center;
		}
		body {
			width: 90vw;
		}
		nav a {
			margin-right: 12px;
		}
	}
</style>
