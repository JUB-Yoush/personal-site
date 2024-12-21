<script>
const gif_tuple = [["https://media1.tenor.com/m/MZRbDClAvOgAAAAC/capybara-bath.gif","capybara"],["https://img.itch.zone/aW1nLzEzNjI4MjU0LnBuZw==/original/11RCpN.png","There is no gif. Play Void Stranger."],["https://64.media.tumblr.com/f2d0490d0300ce46a1e7a7f15dc74165/tumblr_nbbb83YqbU1swqiquo1_500.gif","Get 8 hours of sleep"],["https://media.tenor.com/WkI4kRS7eqMAAAAM/broly-dbz-fanmade.gif","mfw 8 hours of sleep"],["https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExMHh5NGlvdWhrZDZqY3Q4dHhmdGF0MGEzYXNyM3M2NDNlaXc4bWZ1dyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ZIIyYOR6vXTGeEXTZu/giphy.gif","Check out the site's colour themes."]]
let gif_number = Math.floor(Math.random() * gif_tuple.length)

</script>

<svelte:head>

<title>Jaydenpb dot net</title>
<meta property="og:title" content="Jaydenpb dot net">
</svelte:head>

# /jaydenpb.net

<img class="home_gif" src={gif_tuple[gif_number][0]} alt="">
<br>
<a class="gif-changer" href="javascript:;" on:click={(e)=>(gif_number = (gif_number+1) % gif_tuple.length)}>{gif_tuple[gif_number][1]}</a>

<br>
<br>

## Hi

I'm Jayden, a computer science student at the Lassonde school of Engineering (a school at York University)

While you're here, feel free to learn more [about me](/about), check out what I'm [up to](/projects) or what I'm [thinking about](/blog).

Thanks for stopping by.

<div class="box">
<p>If you didn't know, <a href="/resume">I'm very hireable 😳.</a> Currently looking for:
<br>
<br>
</p>
Summer 2025 Internships! If you're the hiring kinda type, reach me through the contact info in the footer.
</div>

Also, if you go to York and are interested in game development, [gdyu.club](https://www.gdyu.club/).
