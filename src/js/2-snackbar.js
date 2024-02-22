import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

// const form = document.querySelector('.form');

// form.addEventListener('submit', () => {
//   const delayInMilliseconds = parseInt(event.target.elements.delay.value);
//   const promiseState = event.target.elements.state.value;

//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (promiseState === 'fulfilled') {
//         resolve(delayInMilliseconds);
//       } else {
//         reject(delayInMilliseconds);
//       }
//     }, delayInMilliseconds);
//   });

//   promise
//     .then(delay => {
//       iziToast.success({
//         title: 'Fulfilled Promise',
//         message: `✅ Promise fulfilled in ${delay}ms`,
//       });
//     })
//     .catch(delay => {
//       iziToast.error({
//         title: 'Rejected Promise',
//         message: `❌ Promise rejected in /${delay}ms`,
//       });
//     });
// });

// const fieldsetElement = document.querySelector('.form fieldset');
// const inputElements = fieldsetElement.querySelectorAll('input');

// for (const inputElement of inputElements) {
//   inputElement.addEventListener('change', () => {
//     if (inputElement.checked) {
//       fieldsetElement.style.borderColor = '#808080';
//     } else {
//       fieldsetElement.style.borderColor = '#808080';
//     }
//   });
// }

const form = document.querySelector('.form');

function onSubmit(event) {
  event.preventDefault();
  const delay = event.target.elements.delay.value;
  let btn = event.target.elements.state.value;

  const createPromise = (btn, delay) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (btn === 'fulfilled') {
          resolve(delay);
        } else {
          reject(delay);
        }
      }, delay);
    });
  };

  createPromise(btn, delay)
    .then(res => {
      iziToast.show({
        message: `✅ Fulfilled promise in ${delay} ms`,
        messageColor: 'white',
        color: '#59a10d',
        position: 'topRight',
      });
    })
    .catch(error => {
      iziToast.show({
        message: `❌ Rejected promise in ${delay}ms`,
        messageColor: 'white',
        color: '#E76969',
        position: 'topRight',
      });
    });
}

form.addEventListener('submit', onSubmit);
