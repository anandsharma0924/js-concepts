var arr = [1,2,3,4,5,6];
const square = function(val){
  return val * val;
}
const cube = function(val){
    return val * val * val;
}
const four = function(val){
    return val * val * val * val;
}
Array.prototype.calculate = function(logic){
    let result = [];
    for(let index=0; index < this.length; index++){
       result.push(logic(this[index]));
    }
    return result;
}
console.log(arr.calculate(square));
console.log(arr.map(square));

//console.log(arr.calculate(cube));
//console.log(arr.calculate(four));
