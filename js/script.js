$(document).ready(function(){
    //USER INTERFACE
    $("#Form").submit(function(event){
        const left = parseInt($("#Left").val());
        const right = parseInt($("#Right").val());
        const buttom = parseInt($("#Buttom").val()); 
               
        
        // BUSINESS LOGIC
        if(left===right &&right===buttom && buttom===left ){
            console.log("it works")
            
            $(".equiv").show();
        }else if(left!==right && right!==buttom && buttom!==left){
            
            $(".scal").show();
        }else if(left===right && right===left && buttom!==left || buttom!==right){
            
            $(".isos").show();
        }else {

            $('Equilateral: All sides are equal, isoceles: exactly two sides are equal, scalene:no sides are equal').show();
           }

        event.preventDefault();
    })
})