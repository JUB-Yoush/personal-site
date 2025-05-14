<script>
	export let data;
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	onMount(() => {
		let tagFilter = $page.url.searchParams.get('tag') ?? 'all';
		//filter by tag
		if (tagFilter != 'all') {
			let postsquery = [];
			for (const post of data.posts) {
				if (post.meta.tags.includes(tagFilter)) {
					postsquery.push(post);
				}
			}
			data.posts = postsquery;
		}
	});
	export let allTags = new Set();

	//get all tags
	for (const post of data.posts) {
		post.meta.tags.forEach((tag) => {
			allTags.add(tag);
		});
	}
	allTags = Array.from(allTags);
</script>

<h1>~/blog</h1>

<p>
	Feel free to add me to your <a href="/rss">rss</a> reader.
</p>
<h2>Tags:</h2>
<div class="tags" data-sveltekit-reload>
	<a href="/blog">#all</a>
	{#each allTags as tag}
		<a href="/blog?tag={tag}">#{tag}</a>
	{/each}
</div>

<h2>Posts:</h2>
<ul>
	{#each data.posts as post}
		<li data-sveltekit-reload>
			<a class="blog-title" href={post.path}>
				{post.meta.title}
			</a>
			<p>Posted: {post.meta.date}</p>
			{#each post.meta.tags as tag}
				<a class="inline-tag" href="/blog?tag={tag}">#{tag}</a>
			{/each}
		</li>
	{/each}
</ul>

<style>
	.blog-title {
		font-weight: bold;
		font-size: 1.5rem;
	}
	p {
		padding-top: 8px;
	}

	li {
		padding-bottom: 1.5rem;
	}
	.inline-tag {
		padding-right: 8px;
	}
	.tags {
		padding-bottom: 8px;
		display: flex;
		max-width: 80vw;
		flex-wrap: wrap;
	}
	.tags > a {
		margin: 8px;
	}
</style>
