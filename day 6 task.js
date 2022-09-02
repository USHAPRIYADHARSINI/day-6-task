
//  to display the uber bill

class Person{
    constructor (name, age, city, bal, distance){
        this.name= name;
        this.age= age;
        this.city= city;
        this.bal= bal;
        this.distance= distance;
    }
    getbalance(){
    return (`your bal is : Rs `+ (this.bal));
    }
    getbill() {
        return (`Hi, `+(this.name)+` your bill amount is Rs: ` 
        + (this.distance*20)+ ` for the distance travelled ` 
        +(this.distance)+`km. Keep enjoying your ride with Uber!`);
    }
}

var uberusha = new Person("usha",26,"coimbatore",100, 3);

// console.log(uberusha.getbalance()); 
// console.log(uberusha.name); 
console.log(uberusha.getbill()); 

