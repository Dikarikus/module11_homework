function getTypeNumber ()
{

let arr = [7, '', 14, 0, null, NaN, 116, "kill", 8, 'jit'];
let countOdd = 0;
let countEven = 0;
let count0 = 0;

for (let i=0; i <arr.length; i++) {                    
  let n = arr[i];  
  if (n%2==0) if (n != 0) if (n != null) {    
      countEven++;
    }  
  if (n%2==1) {                                        
    countOdd++;
  }
  if(n==0) {                                               
    count0++;
  }
}
console.log("Четных элементов - " + countEven);
console.log("Нечетных элементов - " + countOdd);
console.log("Количество нулей - " + count0)
}
getTypeNumber ()