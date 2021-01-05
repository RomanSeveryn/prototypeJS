function MyPrototype() {
  // MyArray.prototype.push();
  this.push = function push() {
    for (let i = 0; i < arguments.length; i++) {
      this[this.length++] = arguments[i];
    }
    return this.length;
  };



  // MyArray.prototype.pop(); // tip: delete
  this.pop = function pop() {
    if (this.length === 0) {
      return;
    }
    const lastItem = this[this.length - 1];
    delete this[--this.length];
    return lastItem;
  };

  
  // MyArray.prototype.concat();
  this.concat = function concat(arr) {
    for(let i = 0; i < arr.length; i++) {
      this[this.length++] = arr[i];
    }
    return this;
  }
  

}

function MyArray() {
  this.length = 0;

  for (let i = 0; i < arguments.length; i++) {
    this.push(arguments[i]);
  }
  // MyArray.isMyArray(arg);  // подсказка: instanceof
  this.isMyArray = function isMyArray(arg) {
    arg = new MyArray();
    return arg instanceof MyArray;
  };
}


MyArray.prototype = new MyPrototype();

const arr1 = new MyArray(1, 2);


