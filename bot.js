const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("603597839813050378")
setInterval(function() {
channel.send(`khaled elsaid`);
}, 30)
})

client.login(process.env.BOT_TOKEN);