var BOT_TOKEN = "Your Telegram Bot token"

//doPost() getting the POST data when request have made

function doPost(e) {
  const body = JSON.parse(e.postData.contents);
  if (body.message) {
    if (body.message.text === '/start') {

      var CHATID = body.message.chat.id
      const welcomeMessage = "Hi, " + body.message.chat.first_name

      sendMessage(CHATID, welcomeMessage)
      dataSaveFirebase(CHATID, body.message.chat.first_name, body.message.chat.username, body.message.chat.id, 1)
    } else {
      try {
        var CHATID = body.message.chat.id
        

      } catch (error) {
        // handle any errors that occur during the request
        var CHATID = body.message.chat.id
        const textError = "Invalid URL or Invalid Request, Please Provide link with http or https !!"
        sendMessage(CHATID, textError)
        let date = new Date(body.message.date * 1000);
        let dateStamp = Utilities.formatDate(date, "GMT+5:30", "dd-MM-yyyy-HH-mm-ss");
        dataSaveFirebase(body.message.text, body.message.chat.id, dateStamp, body.message.chat.id, 2)
      }
    }

  }
}
