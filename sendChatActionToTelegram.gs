//displaying sending file to user when user send the message


function sendChatActionToTelegram(e) {
  // Define the URL and payload
  const url = 'https://api.telegram.org/bot' + BOT_TOKEN + "/sendChatAction";
  const payload = {
    method: 'post',
    headers: {
      'accept': 'application/json',
      'User-Agent': 'Telegram Bot SDK - (https://github.com/irazasyed/telegram-bot-sdk)',
      'content-type': 'application/json',
    },
    payload: JSON.stringify({
      action: 'upload_document',
      chat_id: e
    })
  };

  // Make the HTTP request
  const response = UrlFetchApp.fetch(url, payload);

  // Handle the response
  if (response.getResponseCode() == 200) {
    const responseData = JSON.parse(response.getContentText());
    Logger.log(responseData);
  } else {
    Logger.log('Error: ' + response.getResponseCode());
    Logger.log(response.getContentText());
  }
}
