'use strict';

  let dataTypes = (data) => {
  	if (typeof data === 'string') {
  		let stringLength = data.length; 
  	    return stringLength;
  	} else if (Array.isArray(data) === true){
          let thirdIndex = data[2]
          return thirdIndex;
    } else if (data == null) {
      return "no value";
    } else if (typeof data === "boolean") {
  		return data;
  	} else if (typeof data === "number") {
  		if (data < 100) {
  			return "less than 100";
  		}
  		else if (data > 100){
  			return "more than 100";
  		}
      else if (data = 100) {}{
        return "equal to 100"
      }
  	} else if (typeof data === "function") {
       let callback = data (true)
       return "called callback"
  	} 
}
  
  module.exports = {
    dataTypes: dataTypes
};