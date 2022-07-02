module.exports = function toReadable (number) {

  let arr1 = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
  let arr2 = ["ten", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];

   // от 0 до 19
  if ( number >= 0 && number <= 19) {    
  return (arr1[number]);

    // 20 30 40 50 60 70 80 90
  } else if ( (String(number).length == 2) && (String(number)[1] == 0)) {
  return (arr2[String(number)[0] - 1]);

    // 21-29 31-39 41-49 51-59 61-69 71-79 81-89 91-99
  } else if ((String(number).length == 2) && (String(number)[1] !== 0)) {
  return (`${arr2[String(number)[0] - 1]} ${(arr1[String(number)[1]])}`);

    // 100 200 300 400 500 600 700 800 900
  } else if ( (String(number).length == 3) && ((String(number)[1] == 0)) && ((String(number)[2]) == 0)) {
  return (`${arr1[String(number)[0]]} hundred`);

    // 111-119 211-219 311-319 411-419 511-519 611-619 711-719 811-819 911-919
  } else if ( (String(number).length == 3) && ((+`${[String(number)[1]]}${[String(number)[2]]}`) <= 19)) {
    let a = ([+`${[String(number)[1]]}${[String(number)[2]]}`]);
    return (`${arr1[String(number)[0]]} hundred ${arr1[a]}`);

  // 110 120 130 и т.д. круглые десятки в сотнях
  } else if ((String(number).length == 3) && (String(number)[1] !==0 ) && (String(number)[2] ==0 )) {
    return (`${arr1[String(number)[0]]} hundred ${arr2[String(number)[1] - 1]}`);

    // 121-199 221-299 321-399 и т.д.
  } else if ((String(number).length == 3) && (String(number)[0] !==0 ) && (String(number)[1] !==0 ) && (String(number)[2] !==0 )) {
    return (`${arr1[String(number)[0]]} hundred ${arr2[String(number)[1] - 1]} ${(arr1[String(number)[2]])}`)
  }
}
