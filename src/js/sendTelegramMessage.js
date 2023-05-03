import { Notify } from 'notiflix';
import axios from 'axios';
const formEl = document.querySelector('.modal-form');
const token = '6196909571:AAFOZjAec4WPyliZ5CIK6GSVnGy1XA06-dM';
const chatId = '-980921121';
// const token = '512482013:AAEMy-W7LTkZNmM95H0yVHKSSVq1Fvt76D8';
// const chatId = '-972517118';
const urlApi = `https://api.telegram.org/bot${ token }/sendMessage`;
// const formData = {};

// updateForm();

// formEl.addEventListener('.form-input', throttle(onFormInput, 500));
formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
      e.preventDefault();
      
      let message = `Нашли жертву\n`;
      message += `телефон: ${ this.tel.value }\n`;
      message += `машина: ${ this.brand.value }\n`;
      message += `модель:  ${ this.model.value }\n`;
      message += `ціна:  ${ this.price.value }\n`;
      message += `коментар:  ${ this.comment.value }\n`;



      axios.post(urlApi, {
        chat_id: chatId,
        parce_mode: 'html',
        text: message
      })
          .then((res) => {
            this.tel.value = '';
            this.brand.value = '';
            this.model.value = '';
            this.price.value = '';
            this.comment.value = '';
          })
          .catch((err) => {
            if (tel.value === '' || 
            brand.value === ''  || 
            model.value === ''  || 
            price.value === '') {
              return Notify.failure(
                'Заповни всі поля!'
              );}
          })
          .finally(() => {
            console.log({ 
              tel: tel.value, 
              brand: brand.value, 
              model: model.value, 
              price: price.value, 
              comment: comment.value });
              evt.target.reset();
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
