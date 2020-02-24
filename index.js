const Discord = require('discord.js')
const {google} = require('googleapis')
const keys = require('./keys.json')
const help = require('./help.json')

//-------------------------Heroku-----------------------------
const express = require('express')
const path = require ('path')
const PORT = process.env.PORT || 5000

express()
    .use(express.static(path.join(__dirname,'public')))
    .set('views',path.join(__dirname,'views'))
    .set('view engine','ejs')
    .get('/',(req,res) => console.render('pages/index'))
    .listen(PORT, () => console.log(`Listening on ${ PORT }`))
//-------------------------------------------------------------
var reqTimer = setTimeout(function wakeUp() {
    request("https://newordersth.herokuapp.com/", function() {
       console.log("WAKE UP DYNO");
    });
    return reqTimer = setTimeout(wakeUp, 1200000);
 }, 1200000);

//-------------------------------------------------------------------
const bot = new Discord.Client()
const token = require('./token.json')



bot.login(token.token)


bot.on('ready', ()=> {
    bot.user.setActivity('Bot Simulator')
    console.log("Estou Pronto! ")
})


bot.on('message', msg => {
    const tabela = require('./tabela.json')
    var sheet = tabela.sheetId
    var classes = tabela.classes
    var inRaid = tabela.inRaid
    var Guia = require('./guia.json')

    if(msg.content ==='-ajuda'){
        msg.reply(help.ajuda)
    }
    if(msg.content ==='-comandos'){
        msg.reply(help.comandos)
    }
    if(msg.content ==='-help'){
        msg.reply(help.help)
    }
    if(msg.content ==='-pt1'){
        var local = tabela.pt1
        buscar()
    }
    if(msg.content ==='-pt2'){
        var local = tabela.pt2
        buscar()
    }
    if(msg.content ==='-pt3'){
        var local = tabela.pt3
        buscar()
    }
    if(msg.content ==='-pt4'){
        var local = tabela.pt4
        buscar()
    }
    if(msg.content ==='-pt5'){
        var local = tabela.pt5
        buscar()
    }
    if(msg.content ==='-pt6'){
        var local = tabela.pt6
        buscar()
    }
    if(msg.content ==='-pt7'){
        var local = tabela.pt7
        buscar()
    }
    if(msg.content ==='-pt8'){
        var local = tabela.pt8
        buscar()
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
                spreadsheetId: sheet,
                range: classes
            }
        
            let data = await gsapi.spreadsheets.values.get(opt)
            let dataArray = data.data.values
            
            var tudo= ''
            for( let i = 0; i<18; i++){
                
                var linha = dataArray[i][0]+'= '+dataArray[i][1]
                if(i<17){
                  tudo = tudo + ',  ' + linha  
                }else{
                  tudo = tudo +'\n' + linha 
                }
            }

            msg.reply(tudo)
        
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
                spreadsheetId: sheet,
                range:'STH 2 AM!N9:O9'
            }
        
            let data = await gsapi.spreadsheets.values.get(opt)
            let dataArray = data.data.values
            
            var tudo= dataArray[0][0]+'= '+dataArray[0][1]
            msg.reply(tudo)
        
        }                
    }


    if(msg.content ==='-guia1'){
        var local = Guia.a01
        guiaSTH()
    } 
    if(msg.content ==='-guia2'){
        var local = Guia.a02
        guiaSTH()
    } 
    if(msg.content ==='-guia3'){
        var local = Guia.a03
        guiaSTH()
    } 
    if(msg.content ==='-guia4'){
        var local = Guia.a04
        guiaSTH()
    } 
    if(msg.content ==='-guia5'){
        var local = Guia.a05
        guiaSTH()
    } 
    if(msg.content ==='-guia6'){
        var local = Guia.a06
        guiaSTH()
    } 
    if(msg.content ==='-guia7'){
        var local = Guia.a07
        guiaSTH()
    } 
    if(msg.content ==='-guia8'){
        var local = Guia.a08
        guiaSTH()
    } 
    if(msg.content ==='-guia9'){
        var local = Guia.a09
        guiaSTH()
    } 
    if(msg.content ==='-guia10'){
        var local = Guia.a10
        guiaSTH()
    } 
    if(msg.content ==='-guia11'){
        var local = Guia.a11
        guiaSTH()
    } 
    if(msg.content ==='-guia12'){
        var local = Guia.a12
        guiaSTH()
    } 
    if(msg.content ==='-guia13'){
        var local = Guia.a13
        guiaSTH()
    } 
    if(msg.content ==='-guia14'){
        var local = Guia.a14
        guiaSTH()
    } 
    if(msg.content ==='-guia15'){
        var local = Guia.a15
        guiaSTH()
    } 
    if(msg.content ==='-guia16'){
        var local = Guia.a16
        guiaSTH()
    } 
    if(msg.content ==='-guia17'){
        var local = Guia.a17
        guiaSTH()
    } 
    if(msg.content ==='-guia18'){
        var local = Guia.a18
        guiaSTH()
    } 
    if(msg.content ==='-guia19'){
        var local = Guia.a19
        guiaSTH()
    } 
    if(msg.content ==='-guia20'){
        var local = Guia.a20
        guiaSTH()
    } 
    if(msg.content ==='-guia21'){
        var local = Guia.a21
        guiaSTH()
    } 
    if(msg.content ==='-guia22'){
        var local = Guia.a22
        guiaSTH()
    } 
    if(msg.content ==='-guia23'){
        var local = Guia.a23
        guiaSTH()
    } 
    if(msg.content ==='-guia24'){
        var local = Guia.a24
        guiaSTH()
    } 
    if(msg.content ==='-guia25'){
        var local = Guia.a25
        guiaSTH()
    } 
    if(msg.content ==='-guia26'){
        var local = Guia.a26
        guiaSTH()
    } 
    if(msg.content ==='-guia27'){
        var local = Guia.a27
        guiaSTH()
    } 
    if(msg.content ==='-guia28'){
        var local = Guia.a28
        guiaSTH()
    } 
    if(msg.content ==='-guia29'){
        var local = Guia.a29
        guiaSTH()
    } 
    if(msg.content ==='-guia30'){
        var local = Guia.a30
        guiaSTH()
    } 
    if(msg.content ==='-guia31'){
        var local = Guia.a31
        guiaSTH()
    } 
    if(msg.content ==='-guia32'){
        var local = Guia.a32
        guiaSTH()
    } 
    if(msg.content ==='-guia33'){
        var local = Guia.a33
        guiaSTH()
    } 
    if(msg.content ==='-guia34'){
        var local = Guia.a34
        guiaSTH()
    } 
    if(msg.content ==='-guia35'){
        var local = Guia.a35
        guiaSTH()
    } 
    if(msg.content ==='-guia36'){
        var local = Guia.a36
        guiaSTH()
    } 
    if(msg.content ==='-guia37'){
        var local = Guia.a37
        guiaSTH()
    } 
    if(msg.content ==='-guia38'){
        var local = Guia.a38
        guiaSTH()
    } 
    if(msg.content ==='-guia39'){
        var local = Guia.a39
        guiaSTH()
    } 
    if(msg.content ==='-guia40'){
        var local = Guia.a40
        guiaSTH()
    }
    if(msg.content ==='-guia41'){
        var local = Guia.a41
        guiaSTH()
    }
    if(msg.content ==='-guia42'){
        var local = Guia.a42
        guiaSTH()
    }
    if(msg.content ==='-guia43'){
        var local = Guia.a43
        guiaSTH()
    }
    if(msg.content ==='-guia44'){
        var local = Guia.a44
        guiaSTH()
    }
    if(msg.content ==='-guia45'){
        var local = Guia.a45
        guiaSTH()
    }
    if(msg.content ==='-guia46'){
        var local = Guia.a46
        guiaSTH()
    }
    if(msg.content ==='-guia47'){
        var local = Guia.a47
        guiaSTH()
    }
    if(msg.content ==='-guia48'){
        var local = Guia.a48
        guiaSTH()
    }
    if(msg.content ==='-guia49'){
        var local = Guia.a49
        guiaSTH()
    }
    if(msg.content ==='-guia50'){
        var local = Guia.a50
        guiaSTH()
    }
    if(msg.content ==='-guia51'){
        var local = Guia.a51
        guiaSTH()
    }
    if(msg.content ==='-guia52'){
        var local = Guia.a52
        guiaSTH()
    }
    if(msg.content ==='-guia53'){
        var local = Guia.a53
        guiaSTH()
    }
    if(msg.content ==='-guia54'){
        var local = Guia.a54
        guiaSTH()
    }
    if(msg.content ==='-guia55'){
        var local = Guia.a55
        guiaSTH()
    }
    if(msg.content ==='-ban'){
        var local = 'BAN LIST!A4:A100'
        ban()
    }
    if(msg.content ==='-reg'){
        var local = 'Aplications!A2:B100'
        registro()
    }
    //------------------------------------------------
    function buscar(){
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
                spreadsheetId: sheet,
                range: local
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
            msg.reply(tudo)        
                   
    
        }                

    }
    function guiaSTH(){
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
                spreadsheetId: sheet,
                range: local
            }
        
            let data = await gsapi.spreadsheets.values.get(opt)
            let dataArray = data.data.values
                   
            
            let tudo = '\n '+dataArray[0][0] +') '+ dataArray[0][1] +' \n '+ dataArray[0][3] 
            msg.reply(tudo)        
                   
    
        }                

    }
    function ban(){
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
                spreadsheetId: sheet,
                range: local
            }
        
            let data = await gsapi.spreadsheets.values.get(opt)
            let dataArray = data.data.values
                   
            let tudo ='------BAN LIST------\n'
            let i =0
            for( i  ; i< 100; i++){
                if(dataArray[i]==undefined){
                    break
                }else{
                  tudo= tudo + dataArray[i] +', '  
                }
                
           }
           tudo = tudo + '\n' + 'Total =' + i
           msg.reply(tudo)        
            
        }                

    }
    function registro(){
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
                spreadsheetId: sheet,
                range: local
            }
        
            let data = await gsapi.spreadsheets.values.get(opt)
            let dataArray = data.data.values
            
            let tudo ='------REGISTROS------\n'
            
            for( let i =0 ; i< 100; i++){
                tudo= tudo + dataArray[i] +', '  
            }
            for(let i =0; i< 100; i++){
                tudo= tudo.replace("I'm not listed here,","")
            }
            
            for(let i =0; i< 100; i++){
                tudo= tudo.replace("undefined,","")
            }
            let cont =0
            for(let i =0; i< tudo.length; i++){
                if(tudo[i]==','){
                    cont++
                }
            }

            tudo = tudo + '\n' + 'Total =' + cont
            msg.reply(tudo)
           
        }                

    }

})
