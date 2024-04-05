<script>
    import '$lib/css/style.css'
    import { browser} from '$app/environment'
    import theme from '$lib/shared/stores/theme'
    const themes = ["plain","mint","s.berry","banana","peanut","grape","melon"]
    console.log(`current theme is:` + $theme)
    if (browser){
        document.documentElement.setAttribute('data-theme',themes[$theme])
    }

    function change_theme(){
        if (browser){
            let next_theme = ($theme + 1) % themes.length
            theme.set(next_theme)
            console.log($theme)
            document.documentElement.setAttribute('data-theme',themes[$theme])
            console.log('changed theme')
        }

    }
</script>


<main>
    <h1>header from the +layout.svelte</h1>
    <slot/>
    <footer>foot</footer>
    <button on:click={change_theme}>change theme</button>
</main>

<style>
    :global(*){
        background-color: var(--background-color);
        color: var(--color);
    }

    :global(a:hover) {
        color:var(--hover-color);
    }
    :global(pre) {
        background-color: unset;
        color: unset;

    }
    :global(code) {
        background-color: unset;
        color: unset;
    }
</style>