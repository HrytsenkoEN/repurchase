import { Notify } from 'notiflix';
import axios from 'axios';

const formEl = document.querySelector('.modal-form');
const token = '6196909571:AAFOZjAec4WPyliZ5CIK6GSVnGy1XA06-dM';
const chatId = '-980921121';
// bot Andriy
// const token = '512482013:AAEMy-W7LTkZNmM95H0yVHKSSVq1Fvt76D8';
// const chatId = '-972517118';
const urlApi = `https://api.telegram.org/bot${token}/sendMessage`;

formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();

  let message = `Нашли жертву\n`;
  message += `телефон: ${this.tel.value}\n`;
  message += `машина: ${this.brand.value}\n`;
  message += `модель:  ${this.model.value}\n`;
  message += `ціна:  ${this.price.value}\n`;
  message += `коментар:  ${this.comment.value}\n`;

  axios
    .post(urlApi, {
      chat_id: chatId,
      parce_mode: 'html',
      text: message,
    })
    .then(res => {
      this.tel.value = '';
      this.brand.value = '';
      this.model.value = '';
      this.price.value = '';
      this.comment.value = '';
    })
    .catch(err => {
      if (
        tel.value === '' ||
        brand.value === '' ||
        model.value === '' ||
        price.value === ''
      ) {
        return Notify.failure('Заповни всі поля!');
      }
    })
    .finally(() => {
      Notify.success('Hooray! We send formdata.');
      console.log({
        tel: tel.value,
        brand: brand.value,
        model: model.value,
        price: price.value,
        comment: comment.value,
      });
    });
}
