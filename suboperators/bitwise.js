console.log(45 & 23);//bitwise and, passes 1 for each 1 that matches in both operands 
// can use the & bitwise operator with 1 that compares the last digit with the given operand to check for even or odd 

console.log(34 | 23); //bitwise or, passes 0 for each 0 that matches in both operands  

console.log(15^12) /*bitwise XOR (uses cap) used mostly in electronics and digital circuits.
 If 2 switches are turned off/on electricity is not passed. It can be used to swap 2 numbers */ 

 /*bitwise not operator is a unary operator that inverts bits
 
 ~a = -(a+1)
 
12 -   0 0 0 0 1 1 0 0 (a)
?      1 1 1 1 0 0 1 1 (invert)
1C     0 0 0 0 1 1 0 0  
2c(+1) 0 0 0 0 1 1 0 1 - (13)

- (-13) 

 */

 //perform sustracrtion without using minus sign ~a + 1 

 //shorthand operators are valid even for bitwise operators