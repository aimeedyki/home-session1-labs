'use strict';

  const dataTypes = (data) => {
  	if (typeof data === 'string') {
  		let stringLength = data.length; 
  	    return stringLength;
  	} else if (typeof data === 'object') {
         if (data.constructor === Array){
           if (data.length < 3) {
            return "undefined";
            } 
           else {
          let thirdIndex = data[2]
          return thirdIndex;
           }
         }
         else {  
          return "no value";
        }
  	} else if (typeof data === "boolean") {
  		return data;
  	} else if (typeof data === "number") {
  		if (data < 100) {
  			return "less than 100";
  		}
  		else {
  			return "more than 100";
  		}
  	} else if (typeof data === "function") {
       let callback = data (true)
       return "called callback"
  	} 

  }

  module.exports = {
    dataTypes: dataTypes
};