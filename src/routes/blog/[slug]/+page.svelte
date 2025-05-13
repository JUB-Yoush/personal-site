<script>
	export let data;
</script>

<svelte:head>
	<title>Blog - {data.title}</title>
	<meta property="og:title" content={data.title} />
</svelte:head>
<article>
	<h1>{data.title}</h1>

	<div class="tags" data-sveltekit-reload>
		{#each data.tags as tag}
			<a class="inline-tag" href="/blog?tag={tag}">#{tag}</a>
		{/each}
	</div>

	<p>Published: {data.date}</p>
	<svelte:component this={data.content} />
</article>

<style>
	.tags {
		padding-bottom: 8px;
		display: flex;
		max-width: 80vw;
		flex-wrap: wrap;
	}
	.tags > a {
		margin: 8px;
	}
	p {
		margin-bottom: 8px;
	}
</style>
