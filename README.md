# discord-minor-checker
A simple discord bot for server age verification

### Running the bot
The bot can be ran using the provided docker image, just pass in a token via an env variable

```bash
docker run -d -e DISCORD_TOKEN=<token> discord-minor-checker:latest
```

### Building the bot
```bash
docker build -t discord-minor-checker:latest .
```

## Pull requests welcome