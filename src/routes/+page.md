<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

# markdown yayaya

```python

    #!/usr/bin/env python3
    import discord
    from env import apikey
    from datetime import datetime, timedelta
    from discord.ext import commands

    intents = discord.Intents.default()

    intents.message_content = True
    intents.members = True
    intents.messages = True
    intents.reactions = True

    bot = commands.Bot(command_prefix='!',intents=intents)

    @bot.event
    async def on_ready():
        try:
            await bot.load_extension('bounties')
            await bot.load_extension('gescbot')
        except Exception as e:

    @bot.event
    async def on_command_error(ctx, error):
        if isinstance(error, (commands.MissingRole, commands.MissingAnyRole)):
            await ctx.send("You do not have the role required")

    bot.run(apikey)

```