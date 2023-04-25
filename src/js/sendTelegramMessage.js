// const axios = require('axios');
// const querystring = require('querystring');


// const telegramBotToken = '512482013:AAEMy-W7LTkZNmM95H0yVHKSSVq1Fvt76D8';
// const telegramChatId = '-972517118';

// async function sendTelegramMessage(formData) {
//   const message = `Нове повідомлення від ${formData.tel} (${formData.comment}):\n\n${formData.message}`;
// console.log(message);
//   const query = querystring.stringify({
//     chat_id: telegramChatId,
//     text: message
//   });

//   const config = {
//     headers: {
//       'Content-Type': 'application/x-www-form-urlencoded'
//     }
//   };

//   const url = `https://api.telegram.org/bot${telegramBotToken}/sendMessage`;

//   await axios.post(url, query, config);
// }

// const form = document.getElementById('modal-form');

// form.addEventListener('submit', async (event) => {
//   event.preventDefault();

//   const formData = new FormData(form);
// console.log(formData);
//   await sendTelegramMessage({
//     name: formData.get('tel'),
//     email: formData.get('brand'),
//     message: formData.get('momdel')
//   });

//   form.reset();
// });
