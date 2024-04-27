<script>
	export let data;
</script>

<h1>~/blog</h1>

<p>If you'd prefer being notified for new posts automatically (instead of me just... telling you...), my site has <a href="/api/rss">rss</a> support.</p>

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
:where(h2, h3, h4, h5, h6) .icon-link {
  position: relative;
}

:where(h2, h3, h4, h5, h6) .icon-link::before {
  content: '#';
  position: absolute;
  left: -1ch;
  top: 0;
  line-height: 1;
  opacity: 0;
  text-decoration: underline;
}

:where(h2, h3, h4, h5, h6):hover .icon-link::before {
  opacity: 1;
}

</style>