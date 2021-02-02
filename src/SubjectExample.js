import { Subject }from 'rxjs';

/* eslint-disable no-console */
const mySubject$ = new Subject();
mySubject$.subscribe(x => console.log('first subscribe', x));
mySubject$.next(1);
mySubject$.next(2);
// mySubject$.unsubscribe();
mySubject$.subscribe(x => console.log('second subscribe', x));
mySubject$.next(3);
mySubject$.unsubscribe();