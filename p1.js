var arr = [1,2,3,4,5];

var result = arr.map((element,index)=>{
    console.log(element);
    return element * element;
});

console.log("After Map execution");
console.log(result);