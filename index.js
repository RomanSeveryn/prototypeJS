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


  this.shift = function shift() {
    
    const firstItem = this[0];
    delete this[0];
    
    return firstItem;
  }
  

  // MyArray.prototype.concat();
  this.concat = function concat(arr) {
    const newMyArr = [];
    for (let i = 0; i < arr.length; i++) {
      this.push(arr[i]);
      for (let i = 0; i < this.length; i++) {
        newMyArr[i] = this[i];
      }
    }
    return newMyArr;
  };

  this.reverse = function () {
    const copy = Object.assign(new MyArray(), this);

    for(let i = 0; i < this.length; i++) {
      this[i] = copy[copy.length - 1 - i];
    }
    return this;
  };


  this.forEach = function forEach(func) {
    for(let i = 0; i < this.length; i++) {
      func(this[i], i, this);
    }
  };

  this.map = function(cb) {
    const result = new MyArray();
    for(let i = 0; i < this.length; i++) {
      result.push(cb(this[i], i, this));
    }
    return result;
  };  
}



function MyArray() {
  this.length = 0;

  for (let i = 0; i < arguments.length; i++) {
    this.push(arguments[i]);
  }
  // MyArray.isMyArray(arg);  // подсказка: instanceof
  MyArray.isMyArray = function isMyArray(arg) {
    return arg instanceof MyArray;
  };
}



MyArray.prototype = new MyPrototype();
const arr1 = new MyArray(1, 2);
const arr2 = new MyArray(3, 4);