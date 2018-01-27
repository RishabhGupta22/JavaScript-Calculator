
$(document).ready(function(){
  var operators=["+","-","/","*"];
  var dotoperator=["."];
  var numbers=[0,1,2,3,4,5,6,7,8,9];
  var input=[""];
  var total;
  
  
  
  function getValue(userinput){
  /*   var count=0;
    for (var i=0;i<input.length; i++) {
       if (input[i]===".") {
            count++;
       }
    }
    if(count>1){
      return input.pop();
      //return alert("Cannot have 2 decimals. Press CE and continue..");
    }
    */
    if(dotoperator.includes(input[input.length-1])===true && userinput==="."){
      console.log("You have entered duplicate '.'");
    }
    else if(input.length===1 && operators.includes(userinput)===true){
      return alert("ERROR : 1st element cannot be an Operator !!");
    }
    else if(input.length>16){
      return alert("ERROR : input array too long");
    }
    else if(operators.includes(input[input.length-1])===false){
      input.push(userinput);
    }
    else if(numbers.includes(Number(userinput))){
        input.push(userinput);
    }
    update();
  }
  
  function update(){
    total=input.join("");
    $("#display").html(total);
  }
  
  function getTotal(){
    total=input.join("");
    $("#display").html(eval(total));
  }
  
  $("button").on("click",function(){
    if(this.id==="ac"){ 
      input=[""];
    $("#display").text("0");
   }
    else if(this.id==="ce"){
      
      input.pop();
      update();
    }
    else if(this.id==="="){
      getTotal();
      
    }
    else{
      if(input[input.length-1].indexOf("+","-","/","*",".")===1){
        
        getValue(this.id);
      }
      else{
        getValue(this.id);
      }
    }
  });
});