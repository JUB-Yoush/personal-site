<script>
	export let data;
</script>

<h1>~/blog</h1>

<p>If you'd prefer being notified for new posts automatically, my site has <a href="/api/rss">rss</a> support.</p>

<ul>
	{#each data.posts as post}
		<li>
				<a class="blog-title" href={post.path}>
					{post.meta.title}
				</a>
				<br>
			Published {post.meta.date}
		</li>
	{/each}
</ul>

<style>

.blog-title{
	font-weight: bold;
	font-size: 1.5rem;
}

li{
	padding-bottom: 1.5rem;
}

</style>