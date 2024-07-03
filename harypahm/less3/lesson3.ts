const messages: string = "xin chao";
const numbers: number = 1000;
console.log('numbers: ', numbers);
const sum3 = (x:number, y:number) =>{
    return x+y;
}
console.log(">>sum3: ", sum3(5,10));
const myName :string = "samdz";
console.log("my name length: ", myName.length);
console.log("my name uppercase: ", myName.toUpperCase());
let tra :string = "GiangSon";
const name2 :string[] = ["xinc", "concac", "caidbv"];
console.log('name2: ', name2);
// obejct
// let mine: object = {};
// mine= {name:"Eric"}
// mine.address = "Hoi Dan IT"
// console.log('mine: ', mine);
let pro : {
    name: string,
    age:number
} = {
    name: "Eric",
    age: 999
};
console.log('pro: ', pro);
// array
let tests : (string|number)[] = ["xinchao", 545];
tests.push(5456);
console.log('tests: ', tests);
let test2: [number, string?] = [549, "hoi dan it"];
console.log('test2: ', test2);
// enum
enum API_STATUS {
    PENDING = 400, 
    FULFILLED = 200, 
    REJECTED = 500
}
let a = API_STATUS.FULFILLED
console.log('a: ', a);
// any
let variabless: any = 4535;
variabless = "xinchao";
variabless = false;
console.log('variabless: ', variabless);
// void
const sum1 = (a:number, b:number):number => {
    return a+b;
}
const handleLogs = (messages: string):void =>{
    console.log('messages: ', messages);
}
handleLogs("Xin chao samdz");
// never
function  handleExcept (errorMes: string):never{
    throw Error(errorMes);
}
// union types
function addNumber(a: number|string, b:number|string){
    
}
// alias types
type abTypes= number|string;
function addNumberAlias(a: abTypes, b:abTypes){
    
}
// if else
let age: number = 35;
if(age){
    console.log("samdz");
}else{
    console.log("samdz else");
}