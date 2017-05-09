'use strict'
  
  const dataTypes = (input) => {
    // Check for null & undefined
  if ( input === null || input === undefined) {
    return ("no value");
  }

    // Check for boolean
  if (typeof input === "boolean") {
    return input;
  }

  // Check for number
  if (typeof input === "number") {
    if (input > 100 ){
      return ("more than 100");
    }
    else if (input < 100){
      return ("less than 100");
    }
    else{
      return "equal to 100";
   }
  }
  // Check for string
  if (typeof input === "string") {
    return input.length;
  }

  // Arrays
 if(input instanceof Array) {
    if (input.length < 3){
      return undefined;
    }
    else {
      return input[2];
    }
  }
  // Check for functions
  if (typeof input === "function") {
      return input(true);
  }
}

module.exports = {
  dataTypes: dataTypes
}



