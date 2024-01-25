//set the webhook

function webhook() {
  const apiUrl = 'https://api.telegram.org/bot' + BOT_TOKEN + '/setWebhook';
  const webHook = "https://script.google.com/macros/s/YOURSCRIPTID/exec"
  // Prepare the payload for sending inline query results
  const payload = {
    method: 'post',
    payload: {
      url: webHook,
    },
  };

  // Make a request to Telegram API
  const x = UrlFetchApp.fetch(apiUrl, payload);
  Logger.log(x.getContentText())
  Logger.log(BOT_TOKEN)
}
