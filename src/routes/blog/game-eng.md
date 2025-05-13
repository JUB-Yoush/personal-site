---
title: '(OUTDATED) Thinking about Game Engines'
date: '2024-05-26'
tags: ['game-dev', 'programming']
---

---

[that co-op touhou rouglike mmo raid simulator came out](https://store.steampowered.com/app/2132850/Rabbit_and_Steel/), [got me thinking about mmo music](https://youtu.be/ExXhr8ch8Mk?si=7GDcate3ClfGoAZo)

Note: I've been meeting a lot of interesting people recently and have had a lot of changes in perspective about this topic. I'm likely going to heavily modify this post soon.

A common question I get from non Game-Dev programmers looking to try out Game-Dev is "what engine should I use"? And as someone who is thinking about some long term commercial Game projects, the tools you commit to using will be a large influence in your development workflow.

So what Engine should you use?

If you prefer decision paralysis more than reading what I have to say: check out this massive repo of [every Game-Engine](https://github.com/ellisonleao/magictools?tab=readme-ov-file#engines-and-frameworks) and just pick one.

This post will go over the different kinds of Engines instead of specific ones, it's more about how to think about them rather than which one to use.

Also, this post is from the perspective of independent hobbyist, if you're a professional then you probably don't have much choice in the Engine you're using. That and why would you be listening to me, I have no qualifications!!

But if you do feel like listening to me...

The short answer: Godot

The long answer:

# Part 1: Why is making Games so hard?

What you chose to make your Game in will change how you make it. Your tools of choice are important.

Another Truth: Game-Development is hard. It takes a long time and is collaborative medium. It takes multiple different skill-sets coming together to make a Game, so you can either specialize and collaborate, or become a jack of all trades and do (most of) it yourself. Games are rarely made by entirely one person, even Games we commonly attribute to a solo developer like [Cave Story](https://www.mobyGames.com/Game/16493/cave-story/) usually had other people to help with miscellaneous things, like play-testing.

Another Truth: Not all Games take the same amount of time to make. Obvious yes, but what exactly influences the amount of time your Game takes to make?

The two primary factors are scope and complexity.

## Scope and Complexity

Scope: How much stuff your Game has. It's the levels, assets, and resources you need to make your Games content.

Complexity: How complicated that stuff is to set up. It's the systems your Game is built on. If you're making an RPG then you'll need a system for stats, a combat, items and inventory, a cutscene engine, and lots of other stuff before you get to actually making the content itself.

A high scope low complexity genre would be a Bullet-Hell. Making a scrolling shooter engine is quite simple, you could do it in 30 minutes, however making all the assets, enemies, stages, bullet patterns, and everything else required would take significantly more time.

Take a Game like Rouge instead. The complexity is significantly higher, requiring an entire RPG system along with a procedural generation algorithm. However the scope is comparatively lower to it's complexity, as the Game is procedurally generated, so the levels make themselves!

This is why Rogue-likes are so common in Indie Development, as you spend more time with the complexity to optimize the return on investment for scope, as the Game has a theoretically infinite amount of content.

Most beginner Game developers focus entirely on complexity, without making Games with a very large scope. Other than old High-School projects, none of my recent Games have had more than 1-2 levels. Most beginners make things quickly and loosely (as they should) and it leads to prototypes and vertical slices with just the minimum amount of content required to demonstrate the idea they came up with.

This becomes an issue when you want to eventually transition into making full Games, as you don't have much experience in what It's like designing and building out the rest of the content for the Game idea you had come up with.

### Scope is where the value of your Game comes from

Nobody cares how interesting your Game mechanic is if the levels you give them to use it in aren't well designed. We make prototypes to built out our Game's complexity and prove the idea works, we then need to apply the idea through the scope of our Game.

### The Game Engine you choose influences the complexity of your Game

Scope stays relatively the same, as making assets and designing content is separate from programming. Implementation of those assets changes from engine to engine, but the act of designing your Game is engine agnostic.

I have two commercial Game ideas in my head, one of them is a Game inspired by old Rogue-likes and has high complexity and comparatively lower scope. The other one is a Bullet-Hell that has low complexity and comparatively higher scope.

I think I'm going to go with the high scope Bullet-Hell Game first. Making the content of your Game good is something I don't have much experience in, and trying to make an entire Games worth of content will help me with not only knowing how to go about making it, but to know how to make it fun and engaging.

That and Bullet Hells are designed to be beat in one sitting using one credit, so as far as scope goes the Game is still quite small.

Anyway if you're reading this post ig this is me announcing the Game, I'm kinda busy right now Googling so don't expect anything soon, I'll probably just shadow-drop a polished demo so don't expect any updates.

# Part 2: What is a Game Engine?

A Game Engine is the software you'll use to develop your Game. There are lots to chose from.

## What factors should influence your choice?

Here are some considerations to make with picking a Game Engine.

### 1. Programming Language

Is there a language that you love? Try finding something that lets you make your Game in that.

### 2. Level of Abstraction

How close to the machine are you programming? Some people enjoy very high level visual programming languages like [Unreal Blueprint](https://docs.unrealengine.com/4.27/en-US/ProgrammingAndScripting/Blueprints/), while others prefer engines who's code isn't separated from the code they write, like [Bevy](https://bevyengine.org/).

### 3. Genre-Specificity

What kind of Games is the engine designed to be used to make? This isn't necessarily the same question as "what kind of Games can you make with that engine", because bounds can be pushed and you can make anything with anything if you're unhinged enough.

There are general purpose engines, who are genre agnostic, and engines for specific kinds of Games. These can be massive engines like [RPGmaker](https://www.rpgmakerweb.com/) for RPGs, or smaller libraries like [Renpy](https://www.renpy.org/) for Visual Novels.

#### Jayden Hates RPGMaker!?

My opinion is that larger Genre-Specific engines used to be more useful back when general engines weren't as easy/accessible to use as they were now.

Sometimes they can be quite rigid in the kind of Game they want to you make, like with RPGMaker, and all the Games made with it can feel kinda homogenous. I know we can all identify an RPG maker Game simply based on the Menus/User interface.

Working backwards to try and gain more flexibility and uniqueness in something like RPGMaker would be a comparable amount of work to just building out systems in a general engine.

If you're only interested in the scope of your Game and want to minimize complexity, then these tools still do have a place. Although I do enjoy building out Game systems so I'm sure that's influencing my opinion. I don't want them to make the Game for me!

### 4. Licensing/price

How much does the engine cost to use? Is it free? A flat fee or monthly subscription? How much of your revenue do you need to give the engine's company? If you aren't making commercial projects and don't plan on doing so later, this isn't something you need to consider, if you are then it's incredibly important.

(Bold of you to assume your Game will sell any copies)

### 5. Publishing rights

Where can your Game go? What Are your export options? For most Game Engines, it's binaries for Windows, Mac, Linux, and potentially web-exports as well. Console exports are also available for major proprietary engines, but not many support those out of the box. Not to say you can't put your Game on a console, but it'll take more work.

Some Game Engines require you to keep your project on their marketplace/ecosystem. Roblox being the biggest example of this. But you definitely shouldn't be making Roblox Games, for this + many other reasons outside the scope of this post.

There are also engines for specific kinds of computers. [GBstudio](https://www.gbstudio.dev/) is used to make GameBoy Games, and there are other libraries that are used to make Games for other kinds of retro or fantasy consoles, like the [Pico-8](https://www.lexaloffle.com/pico-8.php) or SDKs for Homebrew development. If there's a certain place you want your Game, you might need to pick a specific tool to put it there.

### 6. Proprietary vs Open Source Code

Can you see the source code? Can you modify and extend it?
This is the biggest consideration which is why I left it for last. If your Game Engine of choice isn't free and open source (and you didn't make it yourself) then **you don't own it.** Ownership of the tools you use to make your Games is incredibly important, as if someone else owns the tool your entire Game is based on, the owners can make whatever changes to that tool they'd like.

This becomes an issue especially when the companies goals isn't aligned with the communities, like if it's publicly traded, and the goals of the company will be influenced by the goal of maximize shareholder value, not to make the best experience for the Game developers.

Also having open access to extend, modify, and contribute to the engine allows you the potential opportunity to fix things that you're running into or implement features you'd like to see yourself. 99% of users of open source software don't touch the source code, but having it as an option is incredibly useful.

I personally wont use a Game Engine unless it's open source. Not only through my personal fascination with wanting to learn things deeply, and out of principle, but also for the reasons mentioned above.

#### Godot will save us all

I've been using Godot since 2020, although It's recently quickly become a darling in the Game-Development community around Fall of 2023, after Unity had [announced and then subsequently rolled back on](https://blog.unity.com/news/open-letter-on-runtime-fee) some very greedy policy changes that had made everyone realize the potential dangers of investing so heavily into proprietary systems.

At GDC 2023, Juan Linietsky, the lead developer behind Godot, spoke about it's position in the Games industry. As a cool boomer programmer himself, he compares Godot's potential role as an open ecosystem in the industry to a similar way he saw linux become adopted by the web server industry.

Game Engines are expensive and generally made at a loss, with the Games you make with them recouping the costs. This is an inherently risky investment that not all Game companies can afford to front, and engine development has become so expensive and complex nowadays that companies usually all turn to 3rd party engines to license instead, and we've already spoken of the issues behind building your game on tools that aren't yours.

Godot being as feature complete as it is, as well as being completely free and open source (nobody owns godot), allows companies to potentially fork, modify, and contribute to the engine to fit their needs.

The biggest issue with FOSS (Free and Open Source software) is the lack of proprietary support (like directX rendering and console exports), but if you're forking and modifying the engine, you can add whatever you'd like. Godot can become a base engine with many different flavours and distributions for different Game-Development needs, like Linux.

If that sounds interesting to you I definitely recommend you check out the aforementioned [GDC Talk](https://youtu.be/XduuHNOGGqI?si=NMxsmGx-OYtXWD_d)

Fun fact, Godot has the **most individual contributors to any open source project!**

Shout-outs to Godot, Owning your tools is nice.

Also before we go forward, there's another distinction I'd like to make:

### Game library

Game Libraries are libraries/packages that can be installed or maintained on your programming language of choice. They're usually minimal and focus on the fundamental things you'd need to make a Game in that programming language, like rendering sprites/models onto a screen, inputs, collisions and Data structures for managing your Game.

### Game Engine

Game Engines, on the other hand, are large, bespoke software applications designed to make Games within. These are what most commercial Games are made with, and what most people these days use. They come with large sets of common tools, built-in GUI editors, interfaces for all aspects of your Game, and plugins to extend functionality. You usually write your Games code and logic in a different/abstracted system from what the engine was made in.

A lot of people consider using a Game library as making your own engine, as they're quite minimal and require a lot of programming efforts to become comparable to features offered by Game Engines. Most people who "make their own engines" usually aren't staring from absolutely nothing, it's more of a mentality thing of what level of abstraction you'd like to start making your Game at.
so if it helps, you can treat using a library like making your own engine, and read the rest of this post under that perspective.

So you now know everything(?) you need to to think about what Game Engine to consider.

And the final and most important thing to keep in mind is:

## Game programming is a thankless job

The people who play your Game won't care about how it was programmed. As long as they can run the exported binary on their computer, web-browser, or console.

They will complement your Games amazing music or innovative art-style or inventive Game design, they won't complement how you implemented that level loading function, or optimized for occluded geometry.

Doom and Quake are Games we respect as engineering marvels yes, but people weren't interested in those Games initially because they were well engineered, it's because they were _really hecking good_.

Why is this the case? well unlike most other parts of your Game, the programming is invisible. Even if you share the source code for your Game It'll still take other programmers who are interested in your Game enough to want to look through how it was made and discover any feats of engineering genius. Other Game developers might look at your code, But regular Gamers won't.

A majority of the time Game programming is referenced is when it's _not_ invisible and how you made your Game can be seen. Which is almost always realized in when your Game is poorly programmed. A recent example being in how in Dragon's Dogma 2 [NPCs had such a heavy load on the CPU that killing them would improve the framerate.](https://old.reddit.com/r/DragonsDogma/comments/1bjn8tw/idea_a_community_made_list_of_inconsequential/)

Poorly optimized code can become visible to your players, while well optimized code works well, without being noteworthy.

For the certified software craftsmen among us, this is a tragic reality to face, but in a way it's also freeing. If nobody cares about how your Game is made... you can use anything to make it!

And there have never been more choice in tools to use.

## We're suffering from success

It's never been easier to make a Video Game, as now live in a time where Game programming and Game Engine programming can be separate things. In the dark ages (pre... 2010?) Game Engine development was just a pre-requisite step in the Game-Development process. Nowadays With many different general-purpose engines that are incredibly powerful and ergonomic, You don't have to make an engine if you don't want to.

But should you want to?

# Part 3: Should you make your own engine?

Some Devs think making your own engine is always a waste of time, others think that using an existing engine at all is cheating, and that Games should be made in C with OpenGL like God Intended. These are obviously two polar sides of the discussion, but there is merit to both opinions.

## Arguments for making your own engine

You'll be a goated programmer after making your own engine that's for sure. The masculine urge to make a Game in C and OpenGL is palpable.

If you're making Games to learn about Games programming, and want to learn things deeply and holistically, you're likely more concerned about how you're making the Game than the end result. Starting at a low level of abstraction and taking the time to build out complex systems to build your Game upon on would be an extremely valuable learning experience.

Writing all (or most of) the code yourself means there's little/no existing code you need to understand before you start making your Game on top of it. There's no learning curve when there's nothing to learn!

If you make your own engine, it makes you make no assumptions about things your Game could have. You can implement only what you need, and not include anything you don't. It can be as elegant and svelte as the inner craftsman in you yearns for. Personal Satisfaction is an important part of your development workflow.

## Arguments against making your own engine

General engines have done a lot of work for you. If you're a hobbyist, your time is valuable, why waste it re-doing work that was already done? Game-Development already takes enough time as is, why not focus your resources on making things for YOUR Game.

Not re-inventing the wheel allows you to fail faster and focus on making a Game with good design. rapid iteration and prototyping is important in figuring out what the best possible Game you can make is. not being bogged down by having to build out an engine each time would allow you to iterate and come up with a better Game faster.

The needs of Gameplay programmers and Game Engine programmers are usually quite different, with the language the Game Engine is developed in and the language you use to make Games inside the engine usually being different. Game Scope and Game Complexity frequently have different needs. Having them be different is good, as it keeps concerns separate and allows for a more ergonomic development experience for both parties

Most people who are interested in Game-Development are interested in making Games. Remember how nobody cares about how your Game was made? A lot of developers also aren't concerned about how the Game is made, because Game programming is an invisible art. To lots of Game developers, the programming is a means to and end, and the fastest way to get to that end is the best method for them.

And that's fine! Not everyone is interested in software development inherently, programming was always a tool to make something else after all.

## Car Analogy

I like to compare using an existing engine vs making one to driving an Automatic vs Manual Car.

If you aren't into cars (or Game Engines) then you'd think driving manual is a lot of extra work with no added benefit, and would rather focus on where you're driving (your Games scope/content) instead of how you're driving there (your games engine/complexity). But some people are interested in the inner workings of their car, and are interested in how it allows them to go places. For them, manually changing gears and tuning it up is fun and interesting.

And that's the real answer, (sorry for making you read 3500+ words before getting here but-)

You should do what you find most fun.

# Conclusion

You should try to make a Game from scratch or with a low level library. Did you like it? Then do more of that.

If you didn't then you certainly have a deeper appreciation for the existing engine you're using.

The decision between your own engine and an existing engine don't exist in binary states. Different Game Engines/libraries do more or less for you. Try different tools and find something that allows you to do the most amount of programming in the level of abstraction you find the most fun.

The best engine is the one that makes making games the most fun for you.

Because making Games is incredibly fun, and if you aren't haven't fun there's something you should change about how you're making them.

Now go experiment, try things, and discover or make your new favorite way to make Games.
