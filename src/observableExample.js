/* eslint-disable no-console */
import { Observable } from 'rxjs';

const myPromise = new Promise((resolve) => {
  setTimeout(() => resolve('Normal'), 3000);
});
// myPromise.then(o => console.log(o));

const greetingLady$ = new Observable((observer) => {
  console.log('Inside Observable (proof of being lazy)');
  observer.next('Hello! I am glad to get to know you.');
  observer.complete();
});

console.log('Before calling subscribe on Observable');

// greetingLady$.subscribe({
//   next: console.log,
//   complete: () => console.log('End of conversation with pretty lady'),
// });
