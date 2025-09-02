const mark = {
  fullName: 'Mark Miller',
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.BMI = this.mass / this.height**2;
    return this.BMI;
  }
}

const john = {
  fullName: 'John Smith',
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.BMI = this.mass / this.height**2;
    return this.BMI;
  }
}

john.calcBMI()
mark.calcBMI()

let relationWords;

if (john.BMI > mark.BMI){
  relationWords = 'higher than';
} else if (john.BMI < mark.BMI){
  relationWords = 'lower than';
} else {
  relationWords = 'equal to';
}

console.log(`${john.fullName}'s BMI (${john.BMI}) is ${relationWords} ${mark.fullName}'s BMI (${mark.BMI})`);
