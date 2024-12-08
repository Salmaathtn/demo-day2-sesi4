class Animal {
    #age
    constructor(name, food, canReproduce, energy, age) {
        this.name = name;
        this.food = food;
        this.canReproduce = canReproduce;
        this.energy = energy;
        this.age = age;
        
    }
// di enkapsulasi Age nya, jd cuman bisa di read only access nya
// yg lain bisa diedit (a.k.a name, food, dll)
    get getAge (){
        return this.#age
    }

    // tell dont ask
    isAdult(){
        return this.#age
    }

}
export default Animal;