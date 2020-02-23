const Discord = require('discord.js')

const bot = new Discord.Client()
const token ='Njc5ODg1NjEzNTUzNjgwNDky.Xk3-tQ.-YDaH43sFRtrmAuBLYgw8o2PQgI'

bot.login(token)
bot.on('ready', ()=> {
    console.log("I'm ready! ")
})


bot.on('message', msg => {
    if(msg.content ==='ptsth'){
             
        msg.reply('funçao indisponiveis no momento')
    }
})




