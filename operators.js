var a=5,b=-3,c=-6
console.log("Start");
console.log(c<b<c) //-6<-3<-6 false 
console.log(c<b<a) //-6<-3<5 true 
console.log(c>b<a)//-6>-3<5 true 
console.log(a>b<c)// 5>-3<-6 false 
console.log(b<a<c) // -3<5<-6 false 
console.log(c<c<c) //-6<-6<-6 false 