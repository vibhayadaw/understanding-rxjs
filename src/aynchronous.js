/* eslint no-console: "off" */
import { Observable } from 'rxjs';

// NORMAL
// const myPromise = new Promise((resolve) => {
//   setTimeout(() => resolve('Normal'), 3000);
// });
// myPromise.then(o => console.log(o));

// // RXJS
// const myObservable$ = Observable.create((observer) => {
//   setTimeout(() => {
//     observer.next('RxJS');
//     observer.complete();
//   }, 3000);
// });
// myObservable$.subscribe(o => console.log(o));


/**
 * Even if immediately resolved, the Promise is always asynchronous. 
 * As a result, the then method’s callback will be added to the microtasks 
 * queue which will be processed after the current macrotask completion:
 */

const welcomePromise = new Promise(resolve => {
  console.log("In Promise executor fn");

  resolve("Welcome! Promise");
});

console.log("Before calling the then method");

welcomePromise.then(console.log);

console.log("After calling the then method");

// console output:
// In Promise executor fn
// Before calling the then method
// After calling the then method
// Welcome!

/** asynchronous Observables */

const asyncWelcomeObservable$ = new Observable(observer => {
  console.log("In Observable producer fn");

  setTimeout(() => {
    observer.next("Asynchronous: Welcome!");
    observer.complete();
  }, 500);
});

console.log("Asynchronous: Before calling the subscribe method Async Observable");

asyncWelcomeObservable$.subscribe(console.log);

console.log("Asynchronous: After calling the subscribe method");

// console output:
// Before calling the subscribe method
// In Observable producer fn
// After calling the subscribe method
// Welcome!

/**
 * Synchronous Observable
 */

const welcomeObservable$ = new Observable(observer => {
  console.log("Synchronous: In Observable producer fn");

  observer.next("Synchronous: Welcome!");
  observer.complete();
});

console.log("Synchronous: Before calling the subscribe method");

welcomeObservable$.subscribe(console.log);

console.log("Synchronous: After calling the subscribe method");

// console output:
// Before calling the subscribe method
// In Observable producer fn
// Welcome!
// After calling the subscribe method