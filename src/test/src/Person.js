class Person{
    constructor(name){
        this.name=name;
    }
    greet(){
        console.log(`Hello ${this.name}!`)
    }
}

class Student extends Person{
    constructor(name, level){
        super(name);
        this.level=level;
    }
    greet(){
        console.log(`Hello ${this.name} from ${this.level}`)
    }
}

const p1= new Person("Max");
const p2 = new Student("Tina", "1st Grade");
const p3 = new Student("MAry", "2st Grade");

p3.greet=()=>console.log("I'm special");
p1.greet();
p2.greet();
p3.greet();
