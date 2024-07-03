const sub: (num1: number, num2:number) => number = (num1, num2) => num1-num2;
console.log(">> sub: ", sub(24,5));
const handle = ():void =>{
    console.log("1234");
}
// union 
const handleUnion = (price: number|string) =>{
    if(typeof price=='number'){
        console.log("day la so: ", price);
    }else if(typeof price=="string"){
        console.log("Day la luong bang chu");
    }
}
handleUnion(889384);
handleUnion("chin chin hai khong chin chu");
// enum la tap hop cac hang so 
enum Sizes{
    S = "45-55kg",
    M= "55-65kg",
    L= "65-75kg",
    XL= "75kg-85kg"
};
let size = Sizes.S;
console.log('size: ', size);
// type dinh nghia kieu du lieu
type State = {
    name:string,
    age:number 
}
// interface
interface State2 {
    age:number
}
interface State2{
    face: "handsome"
}
interface StateExtend extends State {
    age: number;
}
let state: State = {
    name:'Dang',
    age:999
}
type Name  = {
    name:string 
}
type Age = {
    age: number
}
type Person = Name | Age;
const handleClick = <Type>(value:Type) => value;
handleClick(333);
console.log('handleClick(333): ', handleClick<number>(333));
// class
class PersonCls{
    private name:string
    readonly age:number
    constructor(name:string, age:number){
        this.name = name;
        this.age = age;
    }
    handleName(){
        this.age = 9999
        return this.name + this.age;
    }
}
const alex = new PersonCls("Alex dz", 999);
console.log('alex.handleName(): ', alex.handleName());
