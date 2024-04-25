<script>
const gif_tuple = [["https://media1.tenor.com/m/MZRbDClAvOgAAAAC/capybara-bath.gif","capybara"],["https://img.itch.zone/aW1nLzEzNjI4MjU0LnBuZw==/original/11RCpN.png","There is no gif. Play Void Stranger."],["https://64.media.tumblr.com/f2d0490d0300ce46a1e7a7f15dc74165/tumblr_nbbb83YqbU1swqiquo1_500.gif","Get 8 hours of sleep"],["https://media.tenor.com/WkI4kRS7eqMAAAAM/broly-dbz-fanmade.gif","mfw 8 hours of sleep"],["https://media.discordapp.net/attachments/760167803973140493/1232874056911687761/ezgif-1-b37e1edc87.gif?ex=662b0af0&is=6629b970&hm=9eb579d8eca91639028e3c95244c9957700354458d6592a4122884994e31c7f7&=","Check out the site's colour themes."]]
let gif_number = Math.floor(Math.random() * gif_tuple.length)

</script>
# /jaydenpb.net

<img class="home_gif" src={gif_tuple[gif_number][0]} alt="">
<br>
<a class="gif-changer" href="javascript:;" on:click={(e)=>(gif_number = (gif_number+1) % gif_tuple.length)}>{gif_tuple[gif_number][1]}</a>

## hi
I'm Jayden, a computer science student at the Lassonde school of Engineering (a part of York University)


While you're here, feel free to learn more [about me](/about), check out what I'm [up to](/projects) or what I'm [thinking about](/blog).


<div class="hire-box">
<p>If you didn't know, <a href="/resume">I'm very hireable 😳.</a> currently open to... nothing, actually. Google gave me a job for the summer before you could.</p>

<em>Ya snooze ya loose. and you snost, so you lost.
</em>
</div>


Regardless, thanks for checking out my site, feel free to reach out!

Also, if you go to York and are interested in game development, [gdyu.club](https://www.gdyu.club/).

<style>
    .hire-box{
        padding: 4px;
        border-style: solid;
        border-color: var(--color) ;
        border-width: 2px;
        margin-bottom:1rem;
    }
</style>