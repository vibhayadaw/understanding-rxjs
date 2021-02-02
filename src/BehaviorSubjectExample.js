import { BehaviorSubject } from "rxjs";


const mySubject$ = new BehaviorSubject(10);
mySubject$.subscribe(x => console.log('first subscribe', x));
mySubject$.next(1);
mySubject$.next(2);
// mySubject$.unsubscribe();
mySubject$.subscribe(x => console.log('second subscribe', x));
mySubject$.next(3);
mySubject$.unsubscribe();