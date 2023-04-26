// import throttle from 'lodash.throttle';
// const TelegramBot = require('node-telegram-bot-api');
const token = '512482013:AAEMy-W7LTkZNmM95H0yVHKSSVq1Fvt76D8';
// const bot = new TelegramBot(token, { polling: true });
const formEl = document.querySelector('.modal-form');
import axios from 'axios';
// const querystring = require('querystring');
const chatId = '-972517118';
const urlApi = `https://api.telegram.org/bot${ token }/sendMessage`;
// const formData = {};

// updateForm();

// formEl.addEventListener('input', throttle(onFormInput, 500));
formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
      e.preventDefault();
      
      let message = `Нашли жертву\n`;
      message += `телефон: ${ this.name.value }\n`;
      message += `машина: ${ this.brand.value }\n`;
      message += `модель:  ${ this.model.value }\n`;
      message += `ціна:  ${ this.model.value }\n`;
      message += `коментар:  ${ this.model.value }\n`;



      axios.post(urlApi, {
        chat_id: chatId,
        parce_mode: 'html',
        text: message
      })

}


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
