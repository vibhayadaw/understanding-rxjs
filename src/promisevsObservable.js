
import { Observable } from "rxjs";

/**
 * Promise vs Observable
 * Eager and Lazy
 * 
 */

const welcomePromise = new Promise(resolve => {
    console.log("In Promise executor fn");
  
    resolve("Welcome! Promise");
  });
  
  console.log("Before calling the then method");
  
  welcomePromise.then(console.log);
  
  // console output:
  // In Promise executor fn
  // Before calling the then method
  // Welcome!

  const welcomeObservable$ = new Observable(observer => {
    console.log("In Observable producer fn");
  
    observer.next("Welcome! Observer");
    observer.complete();
  });
  
  console.log("Before calling the subscribe method");
  
  welcomeObservable$.subscribe(console.log);
  
  // console output:
  // Before calling the subscribe method
  // In Observable producer fn
  // Welcome!

/**
 * The Promise object may only deliver a single value, 
 * namely the first call of the resolve function is taken into account:
 * In contrast, the Observable instance may emit multiple values:
 */

const newsPromise = new Promise(resolve => {
    resolve("Promise! Sports news");
    resolve("Promise! Politics news");
  });
  
newsPromise.then(console.log); // Prints 'Sports news'

const news$ = new Observable(observer => {
  observer.next("Observable! Sports news");
  observer.next("Observable! Politics news");
});

news$.subscribe(console.log); // Prints 'Politics news \n Sports news'
