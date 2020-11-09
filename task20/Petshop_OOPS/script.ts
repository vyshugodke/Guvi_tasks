class Pet {
    type: String;
    availableCount: Number;
    age: Number;
  }
  
  interface petDetails {
    type: String;
    count: Number;
  }
  
  // ------ Pet availability class -------
  
  class PetsAvailability {
    pets: Array<Pet> = new Array();
  
    constructor(availablePets: Array<Pet>) {
      this.pets.push(...availablePets);
    }
  
    insert(pet: Pet) {
      this.pets.push(pet);
    }
  
    showPets() {
      console.log(this.pets);
    }
  
    checkRequests(requestArray: Array<petDetails>) {
      for (let i = 0; i < requestArray.length; i++) {
        let available;
        for (let j = 0; j < this.pets.length; j++) {
          if (requestArray[i].type === this.pets[j].type) {
            available = this.pets[j].availableCount;
            break;
          }
        }
        if (!available) {
          console.log(`${requestArray[i].type} is not available`);
        } else {
          console.log(
            `${requestArray[i].type} is available and the available count is ${available}`
          );
        }
      }
    }
  }
  
  let availablePets = new PetsAvailability([
    { type: "Dog", availableCount: 5, age: 2 },
    { type: "Cat", availableCount: 3, age: 1 },
    { type: "Parrat", availableCount: 1, age: 3 },
    { type: "Snake", availableCount: 7, age: 1 },
  ]);
  
  // ----- Pet Requests class ----------------
  
  class PetRequests {
    requests: Array<petDetails> = new Array();
  
    constructor(initialRequests: Array<petDetails>) {
      this.requests.push(...initialRequests);
    }
  
    addRequest(newRequest: petDetails) {
      this.requests.push(newRequest);
    }
  
    showRequests() {
      console.log(this.requests);
    }
  
    checkAvailability() {
      availablePets.checkRequests(this.requests);
    }
  }
  
  let request1 = new PetRequests([
    {
      type: "Snake",
      count: 3,
    },
    {
      type: "Cat",
      count: 2,
    },
    {
      type: "Giraffe",
      count: 1,
    },
  ]);
  
  request1.addRequest({ type: "Lion", count: 2 });
  
  request1.checkAvailability();