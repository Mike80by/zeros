module.exports = function getZerosCount(number) {
  // your implementation
 function logBase(num,base) {
 	return Math.log(num) / Math.log(base);
 }
 var countZ = 0;
 for (let i = 1; i <= Math.floor(logBase(number, 5)); i++) {
 	countZ += Math.floor(number / Math.pow(5, i));
 }
 return countZ;
}