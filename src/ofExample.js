// RxJS v6+
import { of } from 'rxjs';
//emits any number of provided values in sequence
const source1 = of(1, 2, 3, 4, 5);
//output: 1,2,3,4,5
const subscribe1 = source1.subscribe(val => console.log(val));

//emits values of any type
const source2 = of({ name: 'Brian' },10, [1, 2, 3], function hello() {
    return 'Hello';
  });
  //output: {name: 'Brian'}, [1,2,3], function hello() { return 'Hello' }
  const subscribe = source2.subscribe(val => console.log(val));