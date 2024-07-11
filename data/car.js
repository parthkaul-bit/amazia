class Car{
    #brand;
    #model;
    speed = 0;
    isTrunkOpen;

    constructor (carDetails){
        this.#brand = carDetails.brand;
        this.#model = carDetails.model;
        this.isTrunkOpen = false;
    }

    displayInfo(){
        // console.log(`${this.#brand} ${this.#model} ${this.speed} km/h ${this.isTrunkOpen ? 'Trunk is open' : 'Trunk is closed'}`)
    }

    go(){
        if(this.isTrunkOpen){
            return;
        }

        this.speed += 5;
        if (this.speed > 200) {
            this.speed = 200;
          }
    }

    brake(){
        this.speed -= 5
        if (this.speed < 0) {
            this.speed = 0;
          }
    }

    openTrunk(){
        this.isTrunkOpen = true;
        if(this.speed){
            this.isTrunkOpen = false
        }
    }

    closeTrunk(){
        this.isTrunkOpen = false;
    }
}

class RaceCar extends Car {

    acceleration;

    constructor(carDetails){
        super(carDetails);
        this.acceleration = carDetails.acceleration;
    }

    go(){
        this.speed += this.acceleration;
        if (this.speed > 300) {
            this.speed = 300;
          }
    }
}

const raceCar = new RaceCar({
    brand: 'McLaren',
    model: 'F1',
    acceleration: 20
  });

  raceCar.displayInfo();
  raceCar.go();
  raceCar.displayInfo();
  raceCar.go();
  raceCar.displayInfo();
  raceCar.go();
  raceCar.displayInfo();
  raceCar.openTrunk();
  raceCar.displayInfo();
  raceCar.brake();
  raceCar.displayInfo();











const toyotaCorolla = new Car({
    brand: 'Toyota',
    model: 'Corolla'
  })
const teslaModel3 = new Car({
    brand: 'Tesla',
    model: 'Model 3'
  })
// console.log(toyotaCorolla)
// console.log(teslaModel3)

toyotaCorolla.displayInfo()
toyotaCorolla.go();
toyotaCorolla.openTrunk();
toyotaCorolla.go();
toyotaCorolla.displayInfo()
toyotaCorolla.go();
toyotaCorolla.displayInfo()
toyotaCorolla.brake();
toyotaCorolla.displayInfo()
toyotaCorolla.brake();
toyotaCorolla.displayInfo()
