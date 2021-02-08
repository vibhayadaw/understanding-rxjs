/**
 * This operator is best used when you have a group of observables and only care 
 * about the final emitted value of each. One common use case for this is if you 
 * wish to issue multiple requests on page load (or some other event) and only 
 * want to take action when a response has been received for all. In this way it
 * is similar to how you might use Promise.all.
 */

import { ajax } from 'rxjs/ajax';
import { interval, forkJoin, of } from 'rxjs';
import { delay, take } from 'rxjs/operators';

/*
  when all observables complete, provide the last
  emitted value from each as dictionary
*/
forkJoin(
  // as of RxJS 6.5+ we can use a dictionary of sources
//   {
//     google: ajax.getJSON('https://api.github.com/users/google'),
//     microsoft: ajax.getJSON('https://api.github.com/users/microsoft'),
//     users: ajax.getJSON('https://api.github.com/users')
//   }
)
  // { google: object, microsoft: object, users: array }
  .subscribe(console.log);

// ===========================================
// Observable completing after different time

const myPromise = val =>
  new Promise(resolve =>
    setTimeout(() => resolve(`Promise Resolved: ${val}`), 5000)
  );

/*
  when all observables complete, give the last
  emitted value from each as an array
*/
const example = forkJoin({
  //emit 'Hello' immediately
  sourceOne: of('Hello'),
  //emit 'World' after 1 second
  sourceTwo: of('World').pipe(delay(1000)),
  //emit 0 after 1 second
  sourceThree: interval(1000).pipe(take(1)),
  //emit 0...1 in 1 second interval
  sourceFour: interval(1000).pipe(take(2)),
  //promise that resolves to 'Promise Resolved' after 5 seconds
  sourceFive: myPromise('RESULT')
});
/*
 * Output:
 * { 
 *   sourceOne: "Hello", 
 *   sourceTwo: "World", 
 *   sourceThree: 0,
 *   sourceFour: 1,
 *   sourceFive: "Promise Resolved: RESULT"
 * }
 */
const subscribe = example.subscribe(val => console.log("Only after received all the responses",val));