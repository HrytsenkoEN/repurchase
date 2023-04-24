// import throttle from 'lodash.throttle';
// const formEl = document.querySelector('.modal-form');
// const STORAGE_KEY = 'feedback-form-state';

// const formData = {};

// updateForm();

// formEl.addEventListener('input', throttle(onFormInput, 500));
// formEl.addEventListener('submit', onFormSubmit);

// function onFormInput(evt) {
//     formData[evt.target.name] = evt.target.value;
//     localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
// };

// function onFormSubmit(evt) {
//     evt.preventDefault();
//     const {
//         elements: { tel, brand, momdel, price, comment },
//     } = evt.target;

//     if (tel.value === '' || 
//         brand.value === ''  || 
//         momdel.value === ''  || 
//         price.value === '') {
//         return window.alert('input fields not filled!');
//     }
//     console.log({ tel: tel.value, 
//         brand: brand.value, 
//         momdel: momdel.value, 
//         price: price.value, 
//         comment: comment.value });
//     evt.target.reset();
//     localStorage.removeItem(STORAGE_KEY);
//     delete formData.tel;
//     delete formData.brand;
// }

// function updateForm() {
//     if (localStorage.getItem(STORAGE_KEY) === null) {
//         return;
//     }
//     const savedForm = JSON.parse(localStorage.getItem(STORAGE_KEY));

//     Object.entries(savedForm).forEach(([name, value]) => {
//         formData[name] = value;
//         formEl.elements[name].value = value;
//     });
// }