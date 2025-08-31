---
title: 'Double Abstraction in Game Programming'
date: '2025-08-31'
wip: 'false'
tags: ['game-dev', 'programming']
---

[If nobody got you, jaydenpb.net reading music got you.](https://youtu.be/nZoteImDLXM?si=gljdfa6yWJbSuYKW)

## Preface: Nobody cares about how your game was made

And it's hard for them to. Non artists and non musicians can listen to music and look at art and appreciate them, they might not have the vocabulary or taste someone skilled in the trade would, but they can derive some enjoyment or assessment of quality out of it. Not only is programming generally invisible, either being compiled directly into machine code or requiring some kind of disassembler to re-create, it also requires the person to have the domain knowledge of programming to understand it. People are usually only able to judge software quality based on if it runs on their platform of choice and how good it is at that compared to other games that appear to do similar things.

The ideal of game programming is simply acting as an invisible interface between a user's computer's multimedia input and output, any consideration of the way a game was constructed manifesting themselves as hitches that break the illusion of seamless connectivity from the users controller to their monitor.

It can be disheartening to remember that your work is at it's best when the user forgets it's there at all, but If nobody cares about how your game was made, it can be made however you'd like. Conveniently it's also never been easier to make a video game.

Noel Berry recently released a [blog post](https://noelberry.ca/posts/making_games_in_2025/) about his workflow for modern C# game development, opting to use more "handmade" tools like [SDL3](https://wiki.libsdl.org/SDL3/FrontPage). He argues the benefits of making games without a large prebuilt engine, ending with:

> "Do I think you should make games without a big engine? My answer is: If it sounds fun.

Inspired by this I set out to make games in a similar fashion ([Raylib](https://www.raylib.com/) being my library of choice), and surprising nobody, I've found it to be incredibly fun. Recently made a [puzzle game](https://motherlusa.itch.io/polarity) with a friend for this year's [GMTK Game Jam](https://itch.io/jam/gmtk-2025).

## Double abstraction

As someone who only ever knew game development within large engines, it gives you the impression that it's the only reasonable approach to making games. Games are complex beasts, before Unity released the only other method of making games had to have been to take up an apprenticeship under one of those old guys with gray beards who can open up a text file, type assembly instructions, and have [RollerCoaster Tycoon](https://www.mobygames.com/game/288/rollercoaster-tycoon/) comes out the other side.

A very common piece of advice you hear is "Don't make an engine if you're interested in making games". Sound advice, but I still take some issue with it. The words we use to describe the tool we use to make games with is confusing.

When we use the phrase "Game Engine" we think of an engine, as in: the core that manages/runs a game we build around it. This isn't a sound analogy, we have the game engine itself sure, but it's abstract, (most) engines aren't designed for any specific genre or mechanics. We still need to use the capabilities of the engine's API to build the specific engine that powers our game-play.

This gives us two layers of abstraction before we get to making things people can actually play: The abstract "implementation" layer that we build or engine in, and the specific abstract "engine" layer we write. Afterwards we make the specific game-play content within our engine (levels, items, enemies etc). This is what I consider the "double abstraction" of Game Engines.

When people use the phrase "game engine", they tend to conflate the two layers with each other. "Engine-less" game development would then be like building a car without an engine (Soapbox cars don't count, their engine is gravity). Games can't exist without engines, something needs to facilitate the game-play happening.

The important distinction between using an engine and not using an engine is if the tools you're using to build your game with are reusable or bespoke. When people hear the phrase "engine-less" development, they think of us making our own "first layer", a similar reusable abstract implementation interface that could implement any kind of video game. Us toiling away in a cave recreating a worse version of Unity. This is generally regarded as a [Bad Idea](https://geometrian.com/projects/blog/write_games_not_engines.html) and is what that that advice I quoted earlier is trying to stop you from doing, as building an abstract engine first gives you generic functionality that has solved no tangible problems and isn't particularly useful to anyone.

But nobody is still (well, I'm sure someone is) is making games by writing assembly instructions in a text file. Even "engine-less" development relies on some kind of abstraction layer. So when does whatever you're using to implement your game engine cross the threshold from game "framework" or "library" into full blown "engine"?

## What is a game engine?

Everyone seems to have an arbitrary cut off point for what they consider a "Game Engine" to be. A game engine or "non engine-less" development has you build your games within a managed, usually pre-compiled, application. Everything you include (code, sprites, sounds) are assets that are interpreted by the engine and executed by in a managed runtime. This includes helpful features like automatic threading/parallelization of your code, a scene system, a gui to arrange assets within, and automatically building/exporting your game for target platforms. Most modern games development happens in software like these.

"Engineless" development is usually done within a Game "framework". These are regular 'ol software libraries that you import into your favorite programming language, and provides you an unopinionated api for implementing game related functionality. Generally things like input, audio, rendering, and window management. How you manage your game's code and call these functions is your responsibility.

To put that in significantly less words: Did you write the [game loop](https://gameprogrammingpatterns.com/game-loop.html) yourself? If yes, you made an engine, if no, you used an engine.

## Why don't we just implement our games code directly anymore? (how did we get here)

But back when engine programmers and game programmers weren't different roles, there was no "abstract implementation interface" built for the game, the game's systems were the engine, games were simpler, computers were simpler, and there simply wasn't that much room for abstraction in 64kb of RAM. Games originally were just written in assembly directly targeting the target computer's CPU, no [30 million lines](https://youtu.be/kZRE7HIO3vk?si=-6AH5tH0XtAQ5xhP) in between.

Imagine instead of picking your operating system from your boot menu, you could boot into... Fortnite. Console development is still quite similar to embedded systems, with strict hardware requirements and different architectures on single board computers. But I've never written a console port so I'm super unqualified to talk about that (as opposed to the usual amount of unqualified I am on topics I talk about).

### Idtech: the first "game engine"

[Idtech1](https://en.wikipedia.org/wiki/Doom_engine) was the first popular "abstracted engine and specific game-play content" game engine, with the separation between the engine (source ports) and the .wad files that ran the game. The games engine code was separate from the game-play "assets" that were loaded in. But there's still only two layers compared to the 3 of today. Idtech wasn't a general purpose abstract api either, it was designed only for doom levels. You can use abstract implementation layers of today to create doom source port engines, someone made one with [Godot](https://youtu.be/mS170xVQDO4?si=_5JXKbcfLMNQ8B3k) for example.

### GPU drivers

GPU drivers ([DirectX](https://en.wikipedia.org/wiki/DirectX), [Vulkan](https://www.vulkan.org/), [Metal🥀](https://developer.apple.com/metal/), [OpenGL](https://www.opengl.org/)) made it so people didn't need to write code targeting specific GPUs, GPU manufacturers would simply support specific APIs in their card's firmware. This made your code exponentially more portable. it's like the java virtual machine but for graphics programming

### Renderware: the first abstract implementation layer

Renderware was a reusable graphics and rendering abstraction api that was supported on major 6th generation consoles as well as DirectX and OpenGL for computers. It was one of the first popular commercial licensed set of "abstract implementation tools" that was mass adopted across the industry, but resembles a game framework much more than a modern large game engine. Renderware's capabilities are actually quite interesting, and relevant documentation and whitepapers about the engine are available [on EA's github](https://github.com/electronicarts/RenderWare3Docs) if you feel like skimming through it and learning about what game programmers were using in the early 00's.

With Renderware being bought out and killed by EA, having it's market share overtaken by Unreal we start to transition into where we find ourselves today.

### Where we are today

Game development started getting complicated, and that led to it getting [expensive, fast](https://www.gamedeveloper.com/business/the-cost-of-games). Investing in an engine before making the game that would see the return on said investments started to become too much money for large AAA companies to front-load, so it made more sense to outsource that work to an engine development company that focused on abstract reusable feature sets and portability, along with a GUI to promote interdisciplinary development with non-technical team members.

Unity and Unreal are the result of that that, third party licenced software that you can build your game within, and build your game within their application. The industry took to them, and gave them a monopoly on game engineering.

Controversial opinion I know, but I'm not a fan of this monopoly. There are obviously issues with leaving the implementation of your software to separate companies who's goals and visions could not be (and usually aren't) aligned with yours, we need no reminder of [how that trust has been challenged recently](https://kotaku.com/unity-engine-runtime-fees-install-changes-devs-1850865615).

But another issue is that Unity, Unreal, and other large engines are especially thick, opinionated standard layers for people to build their games within. I already mentioned the 30 million line problem (yeah I watched handmade hero, fat structs! Hawaiian t-shirts!) but in general, software is becoming increasingly and unnecessarily complicated. It's getting harder to understand how the code you write is compiled and executed by your computer. You could have a perfectly accurate mental model of how the computer system you were programming for in the 90s worked simply because there weren't that many moving parts and the interfaces we used to talk to computers were much simpler. Unity is like GPU abstraction but over every aspect of your game.

It's a well engineered abstraction layer, and if you need exactly what it's offering then it'll work out great for you, but it's lead to a decline in people considering the things their specific game needs, and simply opting in for whatever is within the large "do everything" engine they're using. Abstraction isn't inherently bad, GPU drivers are good (in concept), but simplicity is a tremendously valuable resource, and a lot of modern programming is about abstracting for things that we have specific information on, making us prepare for use cases or that won't exist or running on platforms it won't.

### Godot the anomaly

[Godot](https://godotengine.org/) being open source but feature comparable to large commercial engines could help with creating a base engine that other companies can build upon to make separate abstract implementation layers for their games, similar to how Linux was adopted over licencing windows server software. A base extendable abstract implementation layer for building your company specific abstract implementation layer... were 4 layers deep baby!

This does solve the issue of having your systems be built within a "Black Box". Godot is what I'd describe as an "opaque box". It's free and open source but it's precompiled, peeking into and modifying the source code is very separate thing from downloading and using the engine. It is very nice to be able to hit gd on my keyboard (I use neovim btw) and to to the implementation of a function, and it's something I miss in Godot. But when I'm looking to use a large engine for a project Godot is always what I'll reach for.

## Complicated Games are complicated

"Double Abstraction" get us to think about our games very abstractly. Abstraction is complex and simplicity is a scarce resource in programming. Game Engine development is all about creating reusable components while Game development is all about implementing concrete requirements.

Game development is also a eclectic process, no two games have exactly the same needs. It's important for us as developers to think about the requirements of our specific game and the resources we have to put it together. Game development can be much simpler and arguably more enjoyable if we simply try to only use the things we need.

- If your game is 2d, you don't need a 3d renderer!
- Your game isn't targeting consoles? you can use OpenGL.
- If I need big prestige AAA graphics, I know I can reach for Unreal.
- If your programmers are also your game designers then you don't need a scripting language (unless you can't implement hot reloading and compile times are unproductively slow).

It's not about making everything yourself, or not using large engines. It's about considering what you need and picking the best tools that will accomplish that. Large general purpose engines weren't designed with a specific game in mind, so you need to build your games engine within their engine (double abstraction).

If I'm making a platformer with simple [AABB](https://en.wikipedia.org/wiki/Minimum_bounding_box#Axis-aligned_minimum_bounding_box) collision detection, it would probably make for a simpler developer experience to write a tiny "physics" library myself that just handles those things. If I'm making a game that requires nuanced physics interactions then I can always reach for a library like [Box2d](https://box2d.org/), and drop that into my project.

But I'm just a hobbyist who like interfacing with their tools in very specific ways, enjoys the freedom of organizing things as I wish, and fostering holistic understandings of software systems. You make games for yourself first (when it's not your job at least). Use whatever languages libraries or engines you enjoy working in the most. If you find yourself fighting against or having to re-implement your tools to suit your fancy, consider trying something else, something simpler perhaps.

## An argument for getting lower

Using simpler tools gives you more exposure and understanding to fundamental game programming concepts, things like sequencing patterns, vertex buffers, rendering frames... that can be used irrespective of specific tools. You'll get to apply the things past section 1 of [game programming patterns](https://gameprogrammingpatterns.com/). Imagine a large tree (the data structure not the plant) with nodes of software tools/libraries/engines. The more "handmade"/simple of a tool you use, the closer to the root you are. The closer to the root you are the more flexibility you have, flexibility in how you solve your problems and model your data.

If you only know React, then any web development tools you use would have to be react or something that uses react, learning HTML/CSS/Javascript gives you the ability to write those directly or use anything that is based on those, which includes react if that's what you decide is best for the project!

Going lower gives you knowledge, and that knowledge gives you freedom, freedom to understand problems and potentially make better solutions.

I don't want the take away from this post to be "Godot became too popular for Jayden so now he has to use more niche tools", The point is that engineless development isn't as scary as a lot of of might've thought, and you should consider trying to make games with simpler tools to see if you enjoy it.
But if you really like the current workflow you have and don't feel any need to change then that's fine! Use what you enjoy.
