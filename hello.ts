// 在 TypeScript 中，我们使用 : 指定变量的类型，: 的前后有没有空格都可以
/* function sayHello(person: string) {
    return 'Hello, ' + person;
}
let user = 'Tom';
console.log(sayHello(user)); */

/* 需要保证运行时的参数类型，还是得手动对类型进行判断 */
/* function sayHello(person: string) {
    if (typeof person === 'string') {
        return 'Hello,' + person;
    } else {
        throw new Error("person is not a string");
    }
}
let user = 'Tom'
console.log(sayHello(user), '----------------  ----------------Tom'); */

/* let anyThing: any = 'hello';
console.log(anyThing.myName, '---------------- any ----------------Tom')/

/* let myFavoriteNumber = 'seven'
console.log(myFavoriteNumber, '----------------  ----------------Tom'); */

// 联合类型（Union Types）表示取值可以为多种类型中的一种。
/* let myFavoriteNumber: string | number;
myFavoriteNumber = 'seven';
myFavoriteNumber = 7;
console.log(myFavoriteNumber, '----------------  ----------------Tom'); */

/* 类型断言的用途§
类型断言的常见用途有以下几种：
将一个联合类型断言为其中一个类型 */
// interface Cat {
//     name: string;
//     run(): void;
// }
// interface Fish {
//     name: string;
//     swim(): void;
// }
// function getName(animal: Cat | Fish) {
//     return animal.name;
// }
// let BMW: Cat = {
//     name: '12312',
//     run: () => {
//         console.log('---------------- BMW的run的方法 ----------------Tom');
//     }
// }
// let userName = getName(BMW)
// BMW.run()

// 枚举类型用户取值被限定在一定范围内的场景，比喻一周只能有七天。颜色限定为红绿蓝
/* enum Days { Sun, Mon, Tue, Wed, Thu, Fri, Sat }
console.log(Days, '----------------  ----------------Tom'); */
/* 
{
  '0': 'Sun',
  '1': 'Mon',
  '2': 'Tue',
  '3': 'Wed',
  '4': 'Thu',
  '5': 'Fri',
  '6': 'Sat',
  Sun: 0,
  Mon: 1,
  Tue: 2,
  Wed: 3,
  Thu: 4,
  Fri: 5,
  Sat: 6
}
 */

// 手动赋值
enum Days { Sun = 7, Mon = 6, Tue, Wed, Thu = 10, Fri, Sat = 'd' }
console.log(Days, '----------------  ----------------Tom');

// 为手动复制的枚举项会接着上一个枚举项递增
/*
    el：Tue = 7，Wed = 8，Fri=11，Sat = 12
*/

//上面的例子会出现覆盖现象    Days['Sun'] === 7 为 true 但是 Days[7] === 'Sun' 为  false

