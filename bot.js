require("dotenv").config()

const Discord = require("discord.js")
const client = new Discord.Client({
  intents: ["GUILDS", "GUILD_MESSAGES"]
})

client.on("ready", () => {
  console.log("Los geyts")
})

client.on("messageCreate", msg => {
  if (msg.content.includes("microsoft")) {
    reactToMessage(msg)
  }
  else if (msg.content.includes("sina")) {
    reactToMessage(msg)
  }
})

function reactToMessage(message) {
  const botReplies = [
    "ooh, will you look at that 🤩",
    "nice, i like that",
    "yummy",
    "gimme more 🤤",
    "https://www.youtube.com/watch?v=_6FBfAQ-NDE"
  ]
  
  const randomReply = Math.floor(Math.random() * botReplies.length)
  try {
    message.channel.send(botReplies[randomReply])
    message.react("🍆")

  } catch(err) {
    console.error(err)
  }
}

client.login(process.env.BOT_TOKEN)