//Sending the msg to user

function sendMessage(chatid, message) {

  const url = 'https://api.telegram.org/bot' + BOT_TOKEN + "/sendMessage"; 
  const payload = {
    method: 'post',
    contentType: 'application/json',
    payload: JSON.stringify({
      chat_id: chatid,
      text: message,
      parse_mode: "HTML"
    })
  }
  UrlFetchApp.fetch(url, payload);
}
