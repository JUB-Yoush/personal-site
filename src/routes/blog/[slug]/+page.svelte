<script>
    export let data;
</script>
<svelte:head>
    <title>Blog - {data.title}</title>
    <meta property="og:title" content={data.title}>
</svelte:head>
<article>
    <h1>{data.title}</h1>
    <p>Published: {data.date}</p>
    <svelte:component this={data.content}/>
</article>

