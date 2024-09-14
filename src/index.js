//task1


function delayedPromise(value, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(value);
    }, delay);
  });
}


const promisess = [
  delayedPromise('promis1', 1000),
  delayedPromise('promis2', 2000),
  delayedPromise('promis3', 1500),
  delayedPromise('promis4', 500),
  delayedPromise('promis5', 1200)
];


Promise.all(promisess)
  .then((results) => {
    console.log('Всі проміси виконались:', results);
  })
  .catch((error) => {
    console.error('Сталася помилка:', error);
  });


//task2



function randomDelay(value) {
  const delay = Math.floor(Math.random() * 4000) + 1000; 
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(value);
    }, delay);
  });
}


const promises = [
  randomDelay('prom1'),
  randomDelay('prom2'),
  randomDelay('prom3'),
  randomDelay('prom4'),
  randomDelay('prom5')
];


Promise.race(promises)
  .then((result) => {
    console.log('Найшвидший проміс вирішився з результатом:', result);
  })
  .catch((error) => {
    console.error('Сталася помилка:', error);
  });
