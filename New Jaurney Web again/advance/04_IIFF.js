//IIFE=Immediately Invoked Function Expression
//
(function chai() //named IIFE
{
    console.log(`DB Connected`);
    
})();
//chai()


//withOut Named IIFE
((name,price)=>{
    console.log(`${name} gives you ${price}`);
    
})("Washim",199)