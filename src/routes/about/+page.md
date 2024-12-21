<script>
const hobbies = ["remaking this website","still modding Nintendo stuff","learning another Vim shortcut","breaking my linux installation","dreaming about being cool enough to use Raylib","finishing my drawabox homework", "learning about the Godot engine","playing the piano","making jazz playlists","thinking about turn-based RPGs","making up new serves in ping pong","mashing in Guilty Gear","reading the new One Piece chapter","emulating retro games","beating my cybergrind high-score","wishing they'd port Final Fantasy Tactics","trying to put on 5 lbs of muscle","designing Mercury Man lore","gifting you Void Stranger on Steam","organizing my life in plaintext","making apps for my Pebble",]

let order = []
let current_hobby = ''
function shuffle_order(){
    while (order.length < hobbies.length){
        let rng = Math.floor(Math.random() * hobbies.length)
        if (!order.includes(rng)){
            order.push(rng)}
    }
    next_hobby()
}

function next_hobby(){
    current_hobby = hobbies[order.pop()]
    if (order.length == 0){
        shuffle_order()
    }
}

shuffle_order()

</script>

<svelte:head>

<title>About</title>
<meta property="og:title" content="About">
</svelte:head>

# ~/about_me

<img class="about-img" src="assets/mm.png" alt="">
<br>
<a class="source" href="https://www.instagram.com/apple_toast/?hl=en" target="_blank">mercury man commission by @apple_toast</a>
<br>
<br>

I'm Jayden, a computer science student at York University.
I'm a certified Digital Doohickey Maker to some, Software Engineer to others.

I've been in love with programming and creating with computers since modifying old Nintendo games and consoles with fan-made hacking tools (don't look for my old starmen.net account, my Earthbound hacks were very bad).

I got my start proper with using Gamemaker 8.1 in grade 10 to make simple games, and that's when my interest in programming really began.

Since then I've founded York's game development club ([gdyu.club](https://www.gdyu.club/)), learned full-stack development, got good at OOP, and have experience with many different tools and languages, and professional internship experience at companies like Scotiabank and Google (see my [resume!!](/resume)).

I'm a fan of programming and creating things in many forms, and am always looking for opportunities to use code to make interesting, expressive, artistic, and cool stuff.

When I'm not working or running my club, you can find me <a class="hobby-anchor" href="javascript:;" on:click={next_hobby}>{current_hobby}.</a>
