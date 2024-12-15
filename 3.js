function funcSum(a) { 
 
    return function funcSum2(b) {
      return console.log(a+b);
    }
  }
  
  funcSum(3)(21)