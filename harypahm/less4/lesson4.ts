const sum3 = (x:number, y = 4, z?:number) =>{
    if(z){
        return x+y+z;
    }
    return x+y;
}
console.log('sum3: ', sum3(5,7));
// rest params

function totalArr(n:number, ...m: number[]){
    return m.map(item=>item*n);
}
console.log("totalArr: ", totalArr(10,1,2,3,4,5));
// class
class Person {
    readonly ssn: string;
    private firstName: string;
    public lastName: string;
    private age: number;
    constructor(ssn:string,firstName:string, lastName:string,age:number){
        this.ssn = ssn;
        this.firstName=firstName;
        this.lastName = lastName;
        this.age = age;
    }
    getFullName():string{
        return `${this.firstName} ${this.lastName}`;
    }
    get Age(){
        return this.age;
    }
    set AgeSet(age2:number){
        this.age = age2;
    }

}
const person1 = new Person("1998", "Tran", "Trang",99);
console.log('person1: ', person1.getFullName());
console.log("person2", person1);
// console.log("Age: ", person1.getAge());
// console.log("Set age: ", person1.setAge(999));
// console.log("person2", person1);
let checkAge = person1.Age;
console.log('checkAge: ', checkAge);
person1.AgeSet = 9999;
console.log("person2 age: ", person1.Age);
//extend
class Employee extends Person{
    private jobTitle:string;
    static pi:number  = 3.14;
    constructor(
        ssn:string,firstName:string, lastName:string,age:number,
        jobTitle:string
    ){
        super(ssn,firstName,lastName,age);
        this.jobTitle = jobTitle;
    }
    // abstract getSalary():number;
    get getTitle(){
        return this.jobTitle;
    }
    set setTitle(newTitle:string){
        this.jobTitle = newTitle;
    }

}
const emp = new Employee("1999","Gia", "Trang", 999, "Bee App");
console.log(emp.getTitle);
emp.setTitle = "Clone shopee";
console.log(">>> title new: ", emp.getTitle);
console.log("pi: ", Employee.pi);
// abstract
abstract class PersonAbs {
    private salary: number;
    constructor(salary: number) {
        this.salary = salary;
    }
    protected getSalaryValue(): number {
        return this.salary;
    }
    abstract getSalary(): number;
}
class PersonChild extends PersonAbs {
    constructor(salary: number) {
        super(salary);
    }
    getSalary(): number {
        return this.getSalaryValue();
    }
}
// Example usage
const person = new PersonChild(50000);
console.log(person.getSalary()); // Output: 50000
// interface
interface IPerson{
    readonly firstName: string;
    readonly lastName:string;
}
const getFullName = (person: IPerson)=>{
    return `${person.firstName} and ${person.lastName}`;
}
