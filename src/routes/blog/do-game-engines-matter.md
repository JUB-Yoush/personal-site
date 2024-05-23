---
title: "Do game engines matter"
date: "2024-04-29"
---

---
# I hate gamemaker.
gamemaker 8.1 specifically but the hate extends up to studio 1 and 2. buggy propeitery code payrolled by a gambling company. It was my first engine and I won't forget from whence I came, however hating on it is a funny bit I'll do and I'll keep it up.

But lots of amazing games are made in it: 
- Undertale, 
- Pizza Tower, 
- Momodora 4, 
- VOID STRANGER.
list other good ones

A common question I get from non game dev programmers looking to try out game dev is "what engine should I use"? And as someone who is thinking about some long term comercial game projects, the tools you commit to using will be a large influence in your workflow.

so what engine should you use and what engine should I use?

the shortest answer: Godot

the less short answer: Just make something fun, who cares what you use.

the long answer: 

game engines don't matter, but they do actually.

They just don't matter in the ways most people think?

I wouldn't want the burden of having picked one for you (unless it's godot because using godot is always a good idea), So this post will be more about how to think about game engines instead of telling you what to use

I would like to preface everything else I will talk about with this: 

## Game's programming is a thankless job. 

Everyone will complement your games amazing music or innovative artstyle or inventive game design, but nobody will complement how you implemented that level loading function, or optimized for occluded geometry. 

Doom and Quake are engineering marvels yes, but people don't like those games because they're well engineered, they like them because they're *fun*.

The only excpetions to this rule are: 
- engineering marvels that we later learn to aprechaite like Doom and Quake
- Games that are so incredibly optimzed that even laypeople and those without acsess to the source code are impressed. Think Impossible ports like Doom on the snes and witcher 3 on the switch and I will add more later.
- Rollback Netcode. People care if your game has that.

A majority of the time game programming is referenced is when your game is poorly optimzed, like how kiling npcs in DD2 would improve the framerate. This is because poor optimization is very visible to your players, while well optimized code works well, without being noteworthy.

We now live in a time where game programming and game engine programming are seperate things, in the dark ages (before like... 2010?) Game Engine development was just another step in the game development process. 

We now have very good general peropuse engines that elimnate the need for you to fenagle with OpenGL or SDL2.



Game engines exist on 

## option 1: make your own engine

Some Devs think making your own engine is a waste of time, others think that using an existing engine at all is cheating, and that games should be made in C like God Intended. These are obviously two polar sides of the discussion, and there is merit to both points. my personal opinion is:

### game engines just make a bunch of guesses
general engines don't know what kind of game you're going to make with them. all they know is that you're making a game, which is an interactive peice of computer software. whether that be a RPG or fighting game or First person shooter, it has no idea. 

It won't know if you'll need character skill trees or rollback or gun spray patterns.
so it works backwards up the tree of requirements for those games and picks things that are essential to as many games as possible. things like:
- drawing sprites to the screen
- making hitboxes and detecting collisiosn
- implementing physics simulations
- computer networking
- timers

the more code it already made for you the less code you need to make yourself after all. that can certainly speed things up.

### the argument for the fundamentals
you'll be a goated programmer after making your own engine that's for sure
the masculine urge to make a game in C with SDL2 is very real and I understand it.

You should make a game engine if you'd like to make a game engine. If you want to make a game then you're likley better off using an existing game engine thaat fits your needs. there are cases where existing engines don't fit your needs, like if you're making a game for a very specific computer/console, or your game uses a unique rendering system, like a minecraft style voxel world renderer.


- more code it already wrote == less code you have to write
- rpg maker and renpy can super mario maker can assume a lot
- it's never been easier to make a video game
- never been more choice in tools to use
- engines vs libraries
- engines used to be bespoke, and built on a loss
- godot is the linux of game engines
- the different kinds of game engines
    - Foss and publishing locations + graphics and support
    - general engines vs specific engines
- scope vs complexity: the hard-ness of game dev
- scope: making the gameplay/levels
- complexity: making the game systems
- Rouge likes are high complexity but low scope, (the game makes itself) makes them a popular genre for indie devs
- rank games based on scope and complexity
- your engine influences complexity
- gamemaker makes making 2d game very easy and it's been around for a while so people know it
- godot sorta replaces gamemaker in terms of function and place in the market but ppl just stick 2 what they know

- the more assumptions your engine can make the less code you need to write yourself
- like renpy or rpgmaker
- general engines can only make general assumptions
- reasons to make your own engine is if your game has very specific needs that a general engine either prevent or don't help with
- less existing code means less code to understand before you know how to use the system, but you need to make the entire system

