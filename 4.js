function printNum(from, to) {
    let current = from;
  
    let timerId = setInterval(function() {
      console.log(current);
      if (current === to) {
        clearInterval(timerId);
      }
      current++;
    }, 1000);
  }
  
  printNum(5, 15);