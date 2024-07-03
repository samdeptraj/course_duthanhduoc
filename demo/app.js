
const user =
{
    name: "duoc",
    age: 99,
    sex: "male"
}

const name = user.name
const { age } = user;
console.log('age: ', age);
console.error('name: ', name);

const listArr = [
    1,
    () => 5 + 6
]
const [value, func] = listArr
console.log('func: ', func());
console.log('value: ', value);

// spread
const user2 =
{
    name: "duoc2",
    age: 99,
    sex: "male"
}
const cloneUser = { ...user2, price: 99999 }
console.log('cloneUser: ', cloneUser);
// rest parameter
const handle = ({ a, b, ...c }) => {
    return c;
}
console.log(handle({ a: 1, b: 2, c: 3 }));
// ?? - kiem tra xem co null hay khong
let user3 = undefined;
console.log(user3 ?? "dung roi");