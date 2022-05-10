// 在 TypeScript 中，我们使用 : 指定变量的类型，: 的前后有没有空格都可以

/* function sayHello(person: string) {
    return 'Hello, ' + person;
}

let user = 'Tom';
console.log(sayHello(user)); */

/* 需要保证运行时的参数类型，还是得手动对类型进行判断 */
function sayHello(person: string) {
    if (typeof person === 'string') {
        return 'Hello,' + person;
    } else {
        throw new Error("person is not a string");
    }
}
let user = [1, 2, 3]
console.log(sayHello(user), '----------------  ----------------Tom');
