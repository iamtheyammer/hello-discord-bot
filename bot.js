const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {

  var hellos = ["Salam!","Tungjatjeta!","Kaixo!", "Вiтаю!", "Zdravei!", "Dobar dan!", "¡Hola!", "Degemer mad!", "Bok!", "Hallo!", "Goedendag!", "Yo!", "How do you do?", "Tere!", "Hyvää päivää!", "Bonjour", "Goeie dei!", "Dia duit!", "Guten tag!", "Buon giorno!"];
  //20 hellos.
  if (msg.content === 'Hello!') {
    msg.channel.send(hellos[Math.floor(Math.random() * 20) + 1]);
  }
});

client.login('put your token here!');
