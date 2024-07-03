const tutorials = [
    'what does the this keyword mean?',
    'What is the Constructor OO pattern?',
    'implementing Blockchain Web API',
    'The Test Driven Development Workflow',
    'What is NaN and how Can we Check for it',
    'What is the difference between stopPropagation and preventDefault?',
    'Immutable State and Pure Functions',
    'what is the difference between == and ===?',
    'what is the difference between event capturing and bubbling?',
    'what is JSONP?'
  ];
  
  
  let titleCased = () => {
    //callback function
    return tutorials.map((line) => {
  
      //splits a string into substrings and return them as an array
      let tokens = line.split(" ");
      let capitalizedTokens = tokens.map(
        //converts all alphabetic characters in a string to uppercase
        (token) => token.charAt(0).toUpperCase() + token.slice(1)
      );
  
      //adds all elements of an array into a string
      let response = capitalizedTokens.join(" ");
      return response;
    }
  );
  };