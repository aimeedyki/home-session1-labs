'use strict';

let findMinMax = (values) => {
 	 let result = [];
 	
 	 	 let max = 0;
  for (let count = 0; count < values.length; count++){
    if(values[count]> max){
      max = values[count];
    }
  }

  let min = values[0];
  for (let count = 1; count < values.length; count++){
    if(values[count]< min){
      min = values[count];
    }
  }
     result = [min, max];
     if (result[0] == result[1]) {
       result = [max];
     }
    
    return result;
}

 
 
module.exports = {
    findMinMax: findMinMax
};