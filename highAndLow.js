// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// Examples
// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return  "9 -5"

function highAndLow(numbers){
    console.log(numbers);
    const numberArr = numbers.split(' ');
    const max = Math.max(...numberArr);
    const min = Math.min(...numberArr);
    return max + ' ' + min;
  }

  console.log(highAndLow('1 2 3 4 5'))


