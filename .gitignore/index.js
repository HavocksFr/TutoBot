const Discord = require("Discord.js");

var bot =new Discord.Client

bot.on("ready" ,function() {
    bot.user.setGame("TutoBot, !Help");
    console.log("Le bot a bien ete connecte");

});

bot.login("NDM2MTc1NzY2NjgyNzMwNTI2.Dbjr5Q.GxsJE4SNnd16L-VY0ma4CxpBSuM");
