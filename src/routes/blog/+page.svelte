<script>
	export let data;
	console.log(data.posts);
	import { page } from '$app/stores';
	export const tagFilter = $page.url.searchParams.get('tag') ?? 'all';
	let postsquery = [];
	if (tagFilter != 'all') {
		for (const post of data.posts) {
			//console.log(post.meta.tags);
			if (post.meta.tags.includes(tagFilter)) {
				postsquery.push(post);
			}
		}
	}
	data.posts = postsquery;
</script>

<h1>~/blog</h1>

<p>
	If you'd prefer being notified for new posts automatically, my mailing list has <a
		href="https://buttondown.com/jaydenpb/rss">rss</a
	> support.
</p>
<ul>
	{#each data.posts as post}
		<li>
			<a class="blog-title" href={post.path}>
				{post.meta.title}
			</a>
			<br />
			Posted: {post.meta.date}
			<br />
			tags: {post.meta.tags}
		</li>
	{/each}
</ul>

<style>
	.blog-title {
		font-weight: bold;
		font-size: 1.5rem;
	}

	li {
		padding-bottom: 1.5rem;
	}
</style>
