class Player {
  constructor(name, type){
    console.log(this)
    this.name = name;
    this.type = type;
  }
  introduce(){
    console.log(`Hi ${this.name}, I am ${this.type} class`)
  }
}
class Wizard extends Player{
  constructor(name, type){
    super(name,type)
  }
  play(){
    console.log(`wee I am ${this.type}`)
  }
}

const wizard1 = new Wizard('Karen', 'Healer');
const wizard2 = new Wizard('Sharon','Dark Magic' );

wizard1.play();
wizard2.introduce();