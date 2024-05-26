---
title: "Why Game Engines Matter"
date: "2024-05-25"
---

---
A common question I get from non game dev programmers looking to try out game dev is "what engine should I use"? And as someone who is thinking about some long term comercial game projects, the tools you commit to using will be a large influence in your workflow.

I think about this more than most people do?

so what engine should you use and what engine should I use?

If you love decision paralysis more than reading what I have to say: check out this massive list of [every game engine](https://github.com/ellisonleao/magictools?tab=readme-ov-file#engines-and-frameworks) and just pick one.

Also, this post is from the perspective of independent hobbyist, if you're a professional then you probably don't have much choice in the engine you're using. That and why would you be listening to me??? I have no qualifications!!

but...

The short answer: Godot

The long answer:

# Part 1: What is a game engine?
 
 A game engine is the software you'll use to develop your game. There are lots to chose from.

## What factors would influence my decision?
There are generally 4 considerations to make with a game engine:

### Genre Specificity
What kind of games is the engine desinged to be used to make? This isn't nessicarily the same question as "what kind of games can you make with that engine", because bounds can be pushed and you can make anything with anything if you're unhinged enough. There are general purpose engines, who are genre agnostic, and engines for specific kinds of games, Like RPGmaker for rpgs, renpy for Visual Novels, and Mugen for Fighting Games. You can make any of these genres in a general engine, and we'll get into if you should use an engine designed for your genre or not later.


### Liscencing/price:
How much does the engine cost to use? Is it a flat fee or a monthly subscription? How much of your revenue do you need to give the engine's company? If you aren't making comercial projects and don't plan on doing so later, this isn't something you need to consider, if you are then it's incredibly important.

(Bold of you to assume your game will sell any copies)

### Publishing rights
Where can your game go? What Are your export options? For most game engines, it's binaries for Windows, Mac, Linux, and potentially web-exports as well. Console exports are also avalable for major propritary engines, but not many support those out of the box. Not to say you can't put your game on a console, but it'll take more work.

Some game engines require you to keep your project on thier marketplace/ecosystem. Roblox being the biggest example of this. But you definetly shouldn't be making roblox games, for this + many other resons outside the scope of this post.

There are also engines for specific kinds of computers. [GBstudio]() is used to make gameboy games, and there are other libraries that are used to make games for other kinds of retro or fantasy consoles. If there's a certain place you want your game, you might need to pick a specific thing to put it there.

### Proprietary vs Open Source
Can you see the source code? Can you modify and extend it? 
This is the biggest consideration which is why I left it for last. If your game engine isn't free and open source then **you don't own it.** Ownership of the tools you use to make your games is incredibly important, as if someone else owns the tool your entire game is based on, the owners can make whatever changes to that tool they'd like. This becomes an issue especially when the tool's company is publicly traded, as the goals of the company will be to maximize shareholder value, not make the best experince for the game developers.

I personaly wont use a game engine unless it's open source. Not only through my personal facination with wanting to learn things deeply and not have them be proprietary black boxes, but aslo for the reasons metioned above.

Godot has quickly become a darling in the game development community, after the changes unity had proposed had made everyone realize the dangers of investing so heavily into propritary systems. At GDC 2023, Juan lastname, the lead developer behind godot spoke about it's position in the games industry. As a boomer programmer himself, he compares Godot's potential role as an open ecosystem in the industry to a similar way he saw linux become adpoted by the web server industry. Game engines are generally made at a loss, with the games you make with them recooping the costs. Godot as feature complete as it is, companies can simplyp fork and modify the engine to fit their needs. the biggest issue with FOSS software is the lack of propietary support (like directX support and console exports in godot), but if you're forking and modifying the engine, you can add whatever you'd like. Godot can become a base engine with many different flavorus and distributions for different game development needs, like linux.

If that sounds interesting to you I definetly recomend you check out his aformentioned [GDC Talk]()


Wow look at how much you know about game engines already!

but what do I mean when I talk about a game engine?

Well I'm sort of talking about 2 things:

### Game library
Game Libraries are usually like other libraries/packages that can be installed or maintained on your programming language of choice. They're usually minimal and focus on the fundamental things you'd need to make a game in that programming language, like rendering sprites/models onto a screen, inputs, collisions and Data structures for managing your game.

### Game engines 
Game Engines, on the other hand, are large, bespoke software applications designed to make games within. These are what most commercial games are made within, and what most people these days use. They come with large sets of common tools, built-in GUI editors, interfaces for all aspects of your game, and plugins to extend functionality.

A lot of people consider using a game library the same thing as making your own engine, as it requires a lot of additonal programming efforts to become comparible to features offered by game engines. so you can treat using a library like making your own engine, and read the rest of this post under that perspective.

So you now know everything you need to to think about what game engine to consider. 

but the final and most important thing to keep in mind is:

## Game programming is a thankless job. 

The people who play your game won't care about how it was programmed. As long as they can run the exported binary on their computer, web-browser, or console.

They will complement your games amazing music or innovative artstyle or inventive game design, they won't complement how you implemented that level loading function, or optimized for occluded geometry. 

Doom and Quake are games we respect as engineering marvels yes, but people weren't interested in those games initially because they were well engineered, it's because they were well engineered and *really hecking good*.

Why is this the case? well unlike most other parts of your game, the programming is invisible. Even if you share the source code for your game It'll still take other programmers who are interested in your game enough to want to look through how it was made and discover any feats of engineering genius. Other Game developers might look at your code, But regular Gamers won't. 

A majority of the time game programming is referenced is when it's *not* invisible and how you made your game can be seen. Which is almost always realized in when your game is poorly optimzed. A recent example being in how [kiling npcs in DD2 would improve the framerate.](/)

Poor optimization is very visible to your players, while well optimized code works well, without being noteworthy.

For the certified software craftsmen among us, this is a tragic reality to face, but in a way it's also freeing. If nobody cares about how your game is made... you can use anything to make it!

And there have never been more choice in tools to use. 


## We're suffering from succsess.
We now live in a time where game programming and game engine programming can be seperate things. In the dark ages (pre... 2010?) Game Engine development was just a pre-requisite step in the game development process. Nowadays With many different general-perpouse engines that are incredibly powerful and ergonomic, You don't have to make an engine if you don't want to.

But should you want to?

# Part 2: Should you make your own engine?
Some Devs think making your own engine is always a waste of time, others think that using an existing engine at all is cheating, and that games should be made in C like God Intended. These are obviously two polar sides of the discussion, but there is merit to both oppinions.

## game engines just make a bunch of guesses
General engines don't know what kind of game you're going to make with them. All they know is that you're (probably) making a game, which is an interactive peice of computer software. Whether that be a RPG or fighting game or First person shooter, it has no idea. 

It won't know if you'll need character skill trees or rollback or gun spray patterns, so it works backwards up the tree of requirements for those games and picks things that are essential to as many games as possible.

- drawing and animating sprites on the screen
- making hitboxes and detecting collisiosn
- implementing physics simulations
- computer networking
- User Interfaces
- physics layers
- timers
- other stuff 

The more code it already made for you the less code you need to make yourself after all. 

Some engines are more specific in the kinds of assumtions they make. These are where genre specific engines have value, as the more specific assymptoins it can make, the less you'll need to make yourself. 

so in a sense the decision between a general engine and a specific engnie can be compared to the decision between using an engine or making an engine.

## Arguments for making your own engine
You'll be a goated programmer after making your own engine that's for sure. The masculine urge to make a game in C is very real and I understand it. 

If you're making games to learn about games programming, and want to learn things deeply and holisticly, you're likley more concerned about how you're making the game than the end result. Taking the time to build out an eninge to make your game on would be an extremley valuable learning experince. 

Writing all (or most of) the code yourself means there's little/no existing code you need to understand before you start making your game on top of it. There's no learning curve when there's nothing to learn!

If you make your own engine, it makes you make no assumptions about things your game could have. You can implement only what you need, and not include anything you don't. It can be as elegant and svelte as the inner craftsman in you yearns for. There's value in that.

You should make a game engine if you think you'd enjoy making a game engine. If you want to just make a game then you're likley better off using an existing game engine thaat fits your needs. there are cases where existing engines don't fit your needs, like game uses a unique rendering system, like a minecraft style voxel world renderer.

## Arguments against making your own engine
General engines have done a lot of work for you. If you're a hobbyst your time is valuable, why waste it re-doing work that was already done? Game development already takes enough time as is, why not focus your resources on making things for YOUR game.

Most people who are interested in game development are interested in making games. Remember how nobody cares about how your game was made? Most people aren't concerned about how the game is made, because game programming is an invisible art. To lots of game developers, the programming is a means to and end, and the fastest way to get to that end is the best method for them.

And that's fine! Not everyone is interested in software development inherently, programming was always a tool to make something else after all. 

## Car analogy
I like to compare using an existing engine vs making one to driving an automatic vs manual car.

If you aren't into cars (or Game Engines) then you'd think driving manual is a lot of extra work with no added benifit, and would rather focus on where you're driving (the design/content of your game) instead of how you're driving there. But some people are interested in the inner workings of their car, and are interested in how it allows them to go places. For them, manually changing gears and tuning it up is fun and interesting.

And that's the real answer, (sorry for making you read xxx other words before getting here but-) you should do what you find most fun.

You should try to make a game engine. Did you like it, then keep doing that, if you didn't, then you certainly have a deeper aprechiationg for the existing engine ypou're using. 

These decisions also don't exist in binary states. different game engines do more or less for you. Try different tools and find something that allows you to do the most amount of programming in the level of abstraction you find the most fun.

Because making games is incredibly fun, and if you aren't haven't fun there's something you should try changing about your process. 

Now go exparametnt, try things, and discover your new favorite engine (it'll be godot?, or maybe bevy,? or maybe Raylib?)

Another post in the books.