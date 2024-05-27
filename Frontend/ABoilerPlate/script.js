$(document).ready(() => {


    // function factory(x){
    //     var myArray = [1,2,3]
    //    return myArray.map((val) => val * x)
    
    
    // }
    // myArray = (num) =>{
    //     return new factory(num);
    // }

    // console.log(myArray(3))
    // console.log(myArray(5))

    function factory(x){
        var myArray = [1,2,3];
       return myArray.map((val) => val * x);
    }
   
 var threes = () =>{ 
    return new factory(3);
 }
console.log(typeof threes)
 


})
