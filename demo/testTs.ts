// typescript
let car = "Toyota";
let num = 10
let person: any;
let house: {
    address:string
} = {
    address:""
}
house.address = "Ha Noi";
// array
let product: any[] = []
product.push(1)
product.push("cc")

let names = ["Alex" ,  "Join"];
let adress: string[] = []
adress.push("canifornia")
// adress.push(124434)
let numbers: number[]=[]
numbers.push(123);
// numbers.push("xinfdihf")
let people: {
    name: string
    age: number
}[] = [];

people.push({
    name:"Ducky",
    age:999
})
// function
const sum = (num1:number,num2:number):number=>{
    return num1+num2;
}
sum(12,3)
const sup: (num1:number, num2:number)=>number = (
    num1:number,
    num2:number
) => num1-num2