---
title: "Why Game Engines Matter"
date: "2024-04-29"
---

---
# I hate gamemaker.
Gamemaker 8.1 specifically, but the hate extends up to studio 1 and 2. buggy propeitery code payrolled by a gambling company. It was my first engine and I won't forget from whence I came, however hating on it is a funny bit I'll do and I'll keep it up.

But lots of amazing games are made in it: 
- Undertale, 
- Pizza Tower, 
- Momodora 4, 
- VOID STRANGER.
list other good ones

A common question I get from non game dev programmers looking to try out game dev is "what engine should I use"? And as someone who is thinking about some long term comercial game projects, the tools you commit to using will be a large influence in your workflow, so it's somehting worth considering.

so what engine should you use and what engine should I use?

the shortest answer: Godot

the long answer: 

game engines don't matter, but they do actually. They just don't matter in the ways most people think? I wouldn't want the burden of having picked one for you (unless it's godot because using godot is always a good idea), So this post will be more about how to think about game engines instead of telling you what to use I would like to preface everything else I will talk about with this: 

## Game programming is a thankless job. 

The people who play your games won't care about how it was programmed. As long as they can run the binary on their computer or console.

Everyone will complement your games amazing music or innovative artstyle or inventive game design, but nobody will complement how you implemented that level loading function, or optimized for occluded geometry. 

Doom and Quake are engineering marvels yes, but people weren't interested in those games because they were well engineered, it's because they were well engineered and *fun*.

Why is this the case? well unlike most other parts of game development, programming is invisible. Even if you share the source code for your game It'll still take other programmers who are interested in your game enough to look through how it was made to notice any feats of engineering genius. Other Game developers might look at your code, Gamers won't. 

A majority of the time game programming is referenced is when it's *not* invisible and how you made your game can be seen. Which is almost always when your game is poorly optimzed. Moments like how kiling npcs in DD2 would improve the framerate. 

Poor optimization is very visible to your players, while well optimized code works well, without being noteworthy.

for the certified software craftsmen among us, this is a tragic reality to face, but in a way it's also freeing. If nobody cares about how it's made... you can use anything!

And there have never been more choice in tools to use. There lies our new-age game developer problem. We now live in a time where game programming and game engine programming can be seperate things. In the dark ages (before like... 2010?) Game Engine development was just a pre-requisite step in the game development process. With General Perpouse engines that are incredibly powerful and ergonomic, Game Engine Development is now a choice. 

Should you make that choice?

## Engines vs Libraries vs RPGMaker vs Scratch vs Roblox
There are generally 3 considerations to make with a game engine:

### Liscencing:
How much money do you need to give to the people who made the engine? this is important, and at times can can lead to unity moment haha. Free and Open Source Engines are important for software ownersihp, if you're making something on a foundation owned by someone else, they're always in control be afraid unity can strike again.

### Foss
- free and open source, 
- can you extend and modify, 
- game engines are usually made at a loss, 
- not everyone can do that, godot talk is the linux of game development goes here

### Publishing rights
- where can your game go?
- some engines require you to put them on thier marketplace and take all your money
- don't make roblox gmaes

There are also some other definitions we'll need to get out of the way so that everyone knows what I'm talking about:

### game libraries

### general game engines 

### Genre specific engines

## Make your own engine?
Some Devs think making your own engine is always a waste of time, others think that using an existing engine at all is cheating, and that games should be made in C like God Intended. These are obviously two polar sides of the discussion, and there is merit to both oppinions.

### game engines just make a bunch of guesses
General engines don't know what kind of game you're going to make with them. All they know is that you're (probably) making a game, which is an interactive peice of computer software. Whether that be a RPG or fighting game or First person shooter, it has no idea. 

It won't know if you'll need character skill trees or rollback or gun spray patterns, so it works backwards up the tree of requirements for those games and picks things that are essential to as many games as possible.

- drawing sprites to the screen
- making hitboxes and detecting collisiosn
- implementing physics simulations
- computer networking
- physics layers
- timers
- other stuff 

The more code it already made for you the less code you need to make yourself after all. 

### the arguments for making your own engine
You'll be a goated programmer after making your own engine that's for sure. The masculine urge to make a game in C is very real and I understand it. 

If you're making games to learn about games programming, and want to learn things deeply and holisticly, you're likley more concerned about how you're making the game than the end result. Taking the time to build out an eninge to make your game on would be an extremley valuable learning experince. 

Writing all (or most of) the code yourself means there's little/no existing code you need to understand before you start making your game on top of it. There's no learning curve when there's nothing to learn!

If you make your own engine, it makes you make no assumptions about things your game could have. You can implement only what you need, and not include anything you don't. It can be as elegant and svelte as the inner craftsman in you yearns for. There's value in that.

You should make a game engine if you think you'd enjoy making a game engine. If you want to just make a game then you're likley better off using an existing game engine thaat fits your needs. there are cases where existing engines don't fit your needs, like if you're making a game for a very specific computer/console, or your game uses a unique rendering system, like a minecraft style voxel world renderer.

### the arguments against making your own engine
General engines have done like 90% of the work for you, if you're a hobbyst your time is valuable, why waste it re-doing work that was already done for you? Game development already takes enough time as is, why not focus your resources on making things for YOUR game.

Most people who are interested in game development are interested in making interesting games. Remember how nobody cares about how your game was made? Most people aren't concerned about how the game is made, because game programming is an invisible art. To lots of game developers, the programming is a means to and end, and the fastest way to get to that end is the best method for them.

And that's fine! Not everyone is interested in software development inherently, programming was always a tool to make something else after all. 

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
