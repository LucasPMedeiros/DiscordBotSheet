const Discord = require('discord.js')
const {google} = require('googleapis')
const keys = require('./keys.json')

const bot = new Discord.Client()
const token ='NjgwNjgyMzYwNjY4MTYwMDAw.XlIuFQ.ZRRl-6YAgHYoM8Sk4VOukFlWIT4'

const express = require('express')
const path = require ('path')
const PORT = process.env.PORT || 5000

express()
    .use(express.static(path.join(__dirname,'public')))
    .set('views',path.join(__dirname,'views'))
    .set('view engine','ejs')
    .get('/',(req,res) => console.render('pages/index'))
    .listen(PORT, () => console.log(`Listening on ${ PORT }`))


bot.login(token)
bot.on('ready', ()=> {
    bot.user.setActivity('Bot Simulator')
    console.log("I'm ready! ")
})


bot.on('message', msg => {
    if(msg.content ==='-pt1'){
    
        const client = new google.auth.JWT(
            keys.client_email,
            null,
            keys.private_key,
            ['https://www.googleapis.com/auth/spreadsheets'], 
            null
        );
            
        client.authorize(function(err,tokens){
            if(err){
                console.log(err)
                return
            }else {
                console.log('conectado!')
                gsrun(client)
            }
    
        })
        
        async function gsrun(cl){
            const gsapi = google.sheets({version:'v4', auth:cl})
    
            const opt = {
                spreadsheetId:'1BVhQW5Ex8CkxfHptN17M4o35tIK__pJ8kDRGL57JQzU',
                range:'STH 2 AM!B2:D7'
            }
        
            let data = await gsapi.spreadsheets.values.get(opt)
            let dataArray = data.data.values
                   
            let linha1 = dataArray[0][0] 
            let linha2 = dataArray[1][0] +'---'+ dataArray[1][1] +'---'+ dataArray[1][2] 
            let linha3 = dataArray[2][0] +'---'+ dataArray[2][1] +'---'+ dataArray[2][2] 
            let linha4 = dataArray[3][0] +'---'+ dataArray[3][1] +'---'+ dataArray[3][2] 
            let linha5 = dataArray[4][0] +'---'+ dataArray[4][1] +'---'+ dataArray[4][2] 
            let linha6 = dataArray[5][0] +'---'+ dataArray[5][1] +'---'+ dataArray[5][2] 
        
            let tudo = '\n'+ linha1 +'\n'+ linha2 +'\n'+ linha3 +'\n'+ linha4 +'\n'+ linha5 +'\n'+ linha6
                    
            msg.channel.send(tudo)
        
    
        }                
    }

    if(msg.content ==='-pt2'){
    
        const client = new google.auth.JWT(
            keys.client_email,
            null,
            keys.private_key,
            ['https://www.googleapis.com/auth/spreadsheets'], 
            null
        );
            
        client.authorize(function(err,tokens){
            if(err){
                console.log(err)
                return
            }else {
                console.log('conectado!')
                gsrun(client)
            }
    
        })
        
        async function gsrun(cl){
            const gsapi = google.sheets({version:'v4', auth:cl})
    
            const opt = {
                spreadsheetId:'1BVhQW5Ex8CkxfHptN17M4o35tIK__pJ8kDRGL57JQzU',
                range:'STH 2 AM!B9:D14'
            }
        
            let data = await gsapi.spreadsheets.values.get(opt)
            let dataArray = data.data.values
                   
            let linha1 = dataArray[0][0] 
            let linha2 = dataArray[1][0] +'---'+ dataArray[1][1] +'---'+ dataArray[1][2] 
            let linha3 = dataArray[2][0] +'---'+ dataArray[2][1] +'---'+ dataArray[2][2] 
            let linha4 = dataArray[3][0] +'---'+ dataArray[3][1] +'---'+ dataArray[3][2] 
            let linha5 = dataArray[4][0] +'---'+ dataArray[4][1] +'---'+ dataArray[4][2] 
            let linha6 = dataArray[5][0] +'---'+ dataArray[5][1] +'---'+ dataArray[5][2] 
        
            let tudo = '\n'+ linha1 +'\n'+ linha2 +'\n'+ linha3 +'\n'+ linha4 +'\n'+ linha5 +'\n'+ linha6
                    
            msg.channel.send(tudo)
        
    
        }                
    }

    if(msg.content ==='-pt3'){
    
        const client = new google.auth.JWT(
            keys.client_email,
            null,
            keys.private_key,
            ['https://www.googleapis.com/auth/spreadsheets'], 
            null
        );
            
        client.authorize(function(err,tokens){
            if(err){
                console.log(err)
                return
            }else {
                console.log('conectado!')
                gsrun(client)
            }
    
        })
        
        async function gsrun(cl){
            const gsapi = google.sheets({version:'v4', auth:cl})
    
            const opt = {
                spreadsheetId:'1BVhQW5Ex8CkxfHptN17M4o35tIK__pJ8kDRGL57JQzU',
                range:'STH 2 AM!B16:D21'
            }
        
            let data = await gsapi.spreadsheets.values.get(opt)
            let dataArray = data.data.values
                   
            let linha1 = dataArray[0][0] 
            let linha2 = dataArray[1][0] +'---'+ dataArray[1][1] +'---'+ dataArray[1][2] 
            let linha3 = dataArray[2][0] +'---'+ dataArray[2][1] +'---'+ dataArray[2][2] 
            let linha4 = dataArray[3][0] +'---'+ dataArray[3][1] +'---'+ dataArray[3][2] 
            let linha5 = dataArray[4][0] +'---'+ dataArray[4][1] +'---'+ dataArray[4][2] 
            let linha6 = dataArray[5][0] +'---'+ dataArray[5][1] +'---'+ dataArray[5][2] 
        
            let tudo = '\n'+ linha1 +'\n'+ linha2 +'\n'+ linha3 +'\n'+ linha4 +'\n'+ linha5 +'\n'+ linha6
                    
            msg.channel.send(tudo)
        
    
        }                
    }

    if(msg.content ==='-pt4'){
    
        const client = new google.auth.JWT(
            keys.client_email,
            null,
            keys.private_key,
            ['https://www.googleapis.com/auth/spreadsheets'], 
            null
        );
            
        client.authorize(function(err,tokens){
            if(err){
                console.log(err)
                return
            }else {
                console.log('conectado!')
                gsrun(client)
            }
    
        })
        
        async function gsrun(cl){
            const gsapi = google.sheets({version:'v4', auth:cl})
    
            const opt = {
                spreadsheetId:'1BVhQW5Ex8CkxfHptN17M4o35tIK__pJ8kDRGL57JQzU',
                range:'STH 2 AM!F9:H14'
            }
        
            let data = await gsapi.spreadsheets.values.get(opt)
            let dataArray = data.data.values
                   
            let linha1 = dataArray[0][0] 
            let linha2 = dataArray[1][0] +'---'+ dataArray[1][1] +'---'+ dataArray[1][2] 
            let linha3 = dataArray[2][0] +'---'+ dataArray[2][1] +'---'+ dataArray[2][2] 
            let linha4 = dataArray[3][0] +'---'+ dataArray[3][1] +'---'+ dataArray[3][2] 
            let linha5 = dataArray[4][0] +'---'+ dataArray[4][1] +'---'+ dataArray[4][2] 
            let linha6 = dataArray[5][0] +'---'+ dataArray[5][1] +'---'+ dataArray[5][2] 
        
            let tudo = '\n'+ linha1 +'\n'+ linha2 +'\n'+ linha3 +'\n'+ linha4 +'\n'+ linha5 +'\n'+ linha6
                    
            msg.channel.send(tudo)
        
    
        }                
    }

    if(msg.content ==='-pt5'){
    
        const client = new google.auth.JWT(
            keys.client_email,
            null,
            keys.private_key,
            ['https://www.googleapis.com/auth/spreadsheets'], 
            null
        );
            
        client.authorize(function(err,tokens){
            if(err){
                console.log(err)
                return
            }else {
                console.log('conectado!')
                gsrun(client)
            }
    
        })
        
        async function gsrun(cl){
            const gsapi = google.sheets({version:'v4', auth:cl})
    
            const opt = {
                spreadsheetId:'1t1q_kDZXNVW83V4kxhpKbEyWyyTSixrJN9Eyv6AgkCY',
                range:'Página2!F16:H21'
            }
        
            let data = await gsapi.spreadsheets.values.get(opt)
            let dataArray = data.data.values
                   
            let linha1 = dataArray[0][0] 
            let linha2 = dataArray[1][0] +'---'+ dataArray[1][1] +'---'+ dataArray[1][2] 
            let linha3 = dataArray[2][0] +'---'+ dataArray[2][1] +'---'+ dataArray[2][2] 
            let linha4 = dataArray[3][0] +'---'+ dataArray[3][1] +'---'+ dataArray[3][2] 
            let linha5 = dataArray[4][0] +'---'+ dataArray[4][1] +'---'+ dataArray[4][2] 
            let linha6 = dataArray[5][0] +'---'+ dataArray[5][1] +'---'+ dataArray[5][2] 
        
            let tudo = '\n'+ linha1 +'\n'+ linha2 +'\n'+ linha3 +'\n'+ linha4 +'\n'+ linha5 +'\n'+ linha6
                    
            msg.channel.send(tudo)
        
    
        }                
    }

    if(msg.content ==='-pt6'){
    
        const client = new google.auth.JWT(
            keys.client_email,
            null,
            keys.private_key,
            ['https://www.googleapis.com/auth/spreadsheets'], 
            null
        );
            
        client.authorize(function(err,tokens){
            if(err){
                console.log(err)
                return
            }else {
                console.log('conectado!')
                gsrun(client)
            }
    
        })
        
        async function gsrun(cl){
            const gsapi = google.sheets({version:'v4', auth:cl})
    
            const opt = {
                spreadsheetId:'1BVhQW5Ex8CkxfHptN17M4o35tIK__pJ8kDRGL57JQzU',
                range:'STH 2 AM!J2:L7'
            }
        
            let data = await gsapi.spreadsheets.values.get(opt)
            let dataArray = data.data.values
                   
            let linha1 = dataArray[0][0] 
            let linha2 = dataArray[1][0] +'---'+ dataArray[1][1] +'---'+ dataArray[1][2] 
            let linha3 = dataArray[2][0] +'---'+ dataArray[2][1] +'---'+ dataArray[2][2] 
            let linha4 = dataArray[3][0] +'---'+ dataArray[3][1] +'---'+ dataArray[3][2] 
            let linha5 = dataArray[4][0] +'---'+ dataArray[4][1] +'---'+ dataArray[4][2] 
            let linha6 = dataArray[5][0] +'---'+ dataArray[5][1] +'---'+ dataArray[5][2] 
        
            let tudo = '\n'+ linha1 +'\n'+ linha2 +'\n'+ linha3 +'\n'+ linha4 +'\n'+ linha5 +'\n'+ linha6
                    
            msg.channel.send(tudo)
        
    
        }                
    }

    if(msg.content ==='-pt7'){
    
        const client = new google.auth.JWT(
            keys.client_email,
            null,
            keys.private_key,
            ['https://www.googleapis.com/auth/spreadsheets'], 
            null
        );
            
        client.authorize(function(err,tokens){
            if(err){
                console.log(err)
                return
            }else {
                console.log('conectado!')
                gsrun(client)
            }
    
        })
        
        async function gsrun(cl){
            const gsapi = google.sheets({version:'v4', auth:cl})
    
            const opt = {
                spreadsheetId:'1BVhQW5Ex8CkxfHptN17M4o35tIK__pJ8kDRGL57JQzU',
                range:'STH 2 AM!J9:L14'
            }
        
            let data = await gsapi.spreadsheets.values.get(opt)
            let dataArray = data.data.values
                   
            let linha1 = dataArray[0][0] 
            let linha2 = dataArray[1][0] +'---'+ dataArray[1][1] +'---'+ dataArray[1][2] 
            let linha3 = dataArray[2][0] +'---'+ dataArray[2][1] +'---'+ dataArray[2][2] 
            let linha4 = dataArray[3][0] +'---'+ dataArray[3][1] +'---'+ dataArray[3][2] 
            let linha5 = dataArray[4][0] +'---'+ dataArray[4][1] +'---'+ dataArray[4][2] 
            let linha6 = dataArray[5][0] +'---'+ dataArray[5][1] +'---'+ dataArray[5][2] 
        
            let tudo = '\n'+ linha1 +'\n'+ linha2 +'\n'+ linha3 +'\n'+ linha4 +'\n'+ linha5 +'\n'+ linha6
                    
            msg.channel.send(tudo)
        
    
        }                
    }

    if(msg.content ==='-pt8'){
    
        const client = new google.auth.JWT(
            keys.client_email,
            null,
            keys.private_key,
            ['https://www.googleapis.com/auth/spreadsheets'], 
            null
        );
            
        client.authorize(function(err,tokens){
            if(err){
                console.log(err)
                return
            }else {
                console.log('conectado!')
                gsrun(client)
            }
    
        })
        
        async function gsrun(cl){
            const gsapi = google.sheets({version:'v4', auth:cl})
    
            const opt = {
                spreadsheetId:'1BVhQW5Ex8CkxfHptN17M4o35tIK__pJ8kDRGL57JQzU',
                range:'STH 2 AM!J16:21'
            }
        
            let data = await gsapi.spreadsheets.values.get(opt)
            let dataArray = data.data.values
                   
            let linha1 = dataArray[0][0] 
            let linha2 = dataArray[1][0] +'---'+ dataArray[1][1] +'---'+ dataArray[1][2] 
            let linha3 = dataArray[2][0] +'---'+ dataArray[2][1] +'---'+ dataArray[2][2] 
            let linha4 = dataArray[3][0] +'---'+ dataArray[3][1] +'---'+ dataArray[3][2] 
            let linha5 = dataArray[4][0] +'---'+ dataArray[4][1] +'---'+ dataArray[4][2] 
            let linha6 = dataArray[5][0] +'---'+ dataArray[5][1] +'---'+ dataArray[5][2] 
        
            let tudo = '\n'+ linha1 +'\n'+ linha2 +'\n'+ linha3 +'\n'+ linha4 +'\n'+ linha5 +'\n'+ linha6
                    
            msg.channel.send(tudo)
        
    
        }                
    }

    if(msg.content ==='-class'){
    
        const client = new google.auth.JWT(
            keys.client_email,
            null,
            keys.private_key,
            ['https://www.googleapis.com/auth/spreadsheets'], 
            null
        );
            
        client.authorize(function(err,tokens){
            if(err){
                console.log(err)
                return
            }else {
                console.log('conectado!')
                gsrun(client)
            }
    
        })
        
        async function gsrun(cl){
            const gsapi = google.sheets({version:'v4', auth:cl})
    
            const opt = {
                spreadsheetId:'1BVhQW5Ex8CkxfHptN17M4o35tIK__pJ8kDRGL57JQzU',
                range:'STH 2 AM!Q4:R21'
            }
        
            let data = await gsapi.spreadsheets.values.get(opt)
            let dataArray = data.data.values
            
            var tudo= 'Classes =>'
            for( let i = 0; i<18; i++){
                
                var linha = dataArray[i][0]+'= '+dataArray[i][1]
                if(i<17){
                  tudo = tudo + ',  ' + linha  
                }else{
                  tudo = tudo +'\n' + linha 
                }
            }

            msg.channel.send(tudo)
        
        }                
    }

    if(msg.content ==='-in'){
    
        const client = new google.auth.JWT(
            keys.client_email,
            null,
            keys.private_key,
            ['https://www.googleapis.com/auth/spreadsheets'], 
            null
        );
            
        client.authorize(function(err,tokens){
            if(err){
                console.log(err)
                return
            }else {
                console.log('conectado!')
                gsrun(client)
            }
    
        })
        
        async function gsrun(cl){
            const gsapi = google.sheets({version:'v4', auth:cl})
    
            const opt = {
                spreadsheetId:'1BVhQW5Ex8CkxfHptN17M4o35tIK__pJ8kDRGL57JQzU',
                range:'STH 2 AM!N9:O9'
            }
        
            let data = await gsapi.spreadsheets.values.get(opt)
            let dataArray = data.data.values
            
            var tudo= dataArray[0][0]+'= '+dataArray[0][1]
            msg.channel.send(tudo)
        
        }                
    }
 
    
})
