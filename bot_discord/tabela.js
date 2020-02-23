const {google} = require('googleapis')
const keys = require('./keys.json')

// https://www.youtube.com/watch?v=MiPpQzW_ya0&list=WL&index=34&t=902s

const client = new google.auth.JWT(
        keys.client_email,
        null,
        keys.private_key,
        ['https://www.googleapis.com/auth/spreadsheets'],  //  See, edit, create, and delete your spreadsheets in Google Drive
        null);
       
        //  https://www.googleapis.com/auth/spreadsheets.readonly	      View your Google Spreadsheets

        client.authorize(function(err,tokens){
                 if(err){
                      console.log(err)
                      return
                 } else {
                      console.log('conectado!')
                      gsrun(client)
                 }

})


async function gsrun(cl){
    const gsapi = google.sheets({version:'v4', auth:cl})

    const opt = {
        spreadsheetId:'1t1q_kDZXNVW83V4kxhpKbEyWyyTSixrJN9Eyv6AgkCY',
        range:'Página2!B2:D7'
    }

        // 'Página2!B9:D14'
        // 'Página2!B16:D21'

        // 'Página2!F9:H14'
        // 'Página2!F16:H21'

        // 'Página2!J2:L7'
        // 'Página2!J9:L14'
        // 'Página2!J16:21'

    let data = await gsapi.spreadsheets.values.get(opt)
         //console.log(data.data.values)
    
    let dataArray = data.data.values
    
    console.log(dataArray)

    let newDataArray = dataArray.map(function(r){
        r.concat(r[0] + '-' + r[1] + '-' + r[2])
        return r

    })

    //---------console.log(newDataArray)
    let q = dataArray[1][0] +' '+ dataArray[1][1] +' '+ dataArray[1][2]
    console.log(q) 

    

}



let q = dataArray[0][0]
        msg.reply(q) 
         q = dataArray[1][0] +'   '+ dataArray[1][1] +'   '+ dataArray[1][2]
         msg.reply(q)
         q = dataArray[2][0] +'   '+ dataArray[2][1] +'   '+ dataArray[2][2]
         msg.reply(q) 
         q = dataArray[3][0] +'   '+ dataArray[3][1] +'   '+ dataArray[3][2]
         msg.reply(q)
         q = dataArray[4][0] +'   '+ dataArray[4][1] +'   '+ dataArray[4][2]
         msg.reply(q)
         q = dataArray[5][0] +'   '+ dataArray[5][1] +'   '+ dataArray[5][2]
        msg.reply(q)