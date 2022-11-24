//&& both expression must be true for it to pass true. Returns false otherwise

// var a = () => {
//     return 3;
// }

// var b = 3;
// if (a()==3 && b==3){
//     console.log("this is true");
// }

// // || if any one value is true, it passed true

// console.log(3 && 4);

console.log(98>34 && 45<65 && "cat") /*All expressions are computed and return a value, it is boollean in the case of comparision operator

If it runs into a false value, it breaks the expression and returns the falsy value (can be a 0 or an empty string too).
If true, and subsequent expressions are also true, then the last passed value is given.

Zero values or falsy values - all non zero values are by default true, zero/emptystring/null/undefined/NaN are falsy values

logical or - passes the first true expression (if any), in case of all falsy values it returns the last ones

*/

//logical not (converts the returned expression value to its opposite) - only returns boolean values 
console.log(!(5<100 && 100>10 && 12<10))